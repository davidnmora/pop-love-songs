import { derived } from "svelte/store";
import { area as d3area } from "d3";
import viewport from "./viewport";

import { getYPosInAggregateSnakeChart } from "./forcePositionOptions-helper";
import { getXPosForYear } from "$data/data-utils";
import {
	LOVE_SONG_TYPES,
	SONG_DATA_COLUMNS_ENUM
} from "$data/data-constants.js";
import { visibleSongsData } from "./dataDerivations";

// algo:
// 1. given an array of non-overlapping, contiguous time regions (an array with a start & stop year)...
// Use 1968-1969, then do decades from there on out (1970-1979, 1980-1989, etc.)
import {
	aggregationTimeRegions,
	getPopularitySumByType
} from "./loveSongsLabeledByTimeRegionPercentageForPosition";
import { visibleButNotSelectedLoveSongTypes } from "./searchAndFilter";
import { typesTreatedAsNonLoveSongs } from "./storySteps";

// 2. ... aggregate the total songs for each time region, then label each with a sumative percentage, append that to the object

const getAggregatePercentageByLoveSongType = (
	songsInTimeRegion,
	typesTreatedAsNonLoveSongs
) => {
	// 1. aggregate
	const popularitySumByType = getPopularitySumByType(
		songsInTimeRegion,
		typesTreatedAsNonLoveSongs
	);

	// HANDLE EDGE CASE: if there are no songs in a love song type in the time region, insert it with a value of 0
	const DEFAULT_VALUE_IF_NO_SONGS = 0.1; // TODO: handle this better, flag it, do things like hide the snake (even if it still exists for transition purposes)
	LOVE_SONG_TYPES.forEach((loveSongType) => {
		if (!popularitySumByType[loveSongType]) {
			popularitySumByType[loveSongType] = DEFAULT_VALUE_IF_NO_SONGS; // TODO: make it functional, not mutative
		}
	});

	const loveSongTypesSortedGreatestToLeast = Object.keys(
		popularitySumByType
	).sort((a, b) => popularitySumByType[b] - popularitySumByType[a]);

	// // 2. Sort in descending order (biggest to smallest), then convert to percentages.
	// // Note, the percentages are summative, meaning that if the largest (first) value is "Serenade" at 50%, then the next value will be "Serenade" + "Longing & Heartbreak" at 75%.
	const popularityScoreSumsInTimeRegion = Object.keys(
		popularitySumByType
	).reduce((acc, loveSongType) => acc + popularitySumByType[loveSongType], 0);

	return loveSongTypesSortedGreatestToLeast.reduce((acc, loveSongType) => {
		const totalPercentageThatHasBeenAccountedFor = Object.keys(acc).reduce(
			(sum, accountedForLoveSongType) =>
				sum +
				popularitySumByType[accountedForLoveSongType] /
					popularityScoreSumsInTimeRegion,
			0
		);
		const loveSongPercentage =
			popularitySumByType[loveSongType] / popularityScoreSumsInTimeRegion;

		return {
			...acc,
			[loveSongType]: {
				y0: totalPercentageThatHasBeenAccountedFor + loveSongPercentage,
				y1: totalPercentageThatHasBeenAccountedFor
			}
		};
	}, {});
};

export const aggregateSnakeChartPositions = derived(
	[visibleSongsData, typesTreatedAsNonLoveSongs],
	([$visibleSongsData, $typesTreatedAsNonLoveSongs]) => {
		return aggregationTimeRegions.map((timeRegion) => {
			const songsInTimeRegion = $visibleSongsData.filter(({ song }) => {
				const songYear = +song[SONG_DATA_COLUMNS_ENUM.date_as_decimal];
				return songYear >= timeRegion.start && songYear <= timeRegion.stop;
			});

			return {
				...timeRegion,
				popularityScoreSumsInTimeRegion: getAggregatePercentageByLoveSongType(
					songsInTimeRegion,
					$typesTreatedAsNonLoveSongs
				)
			};
		});
	}
);

const createSVGPathGenerator = ($viewport) => {
	return d3area()
		.x(({ x }) => getXPosForYear(x, $viewport.width))
		.y0(({ y0, y1 }) =>
			getYPosInAggregateSnakeChart({
				percentage: y0,
				percentageChange: y0 - y1,
				canvasHeight: $viewport.height,
				isY0: true
			})
		)
		.y1(({ y0, y1 }) =>
			getYPosInAggregateSnakeChart({
				percentage: y1,
				canvasHeight: $viewport.height,
				percentageChange: y0 - y1
			})
		);
};

const TRANSITION_WIDTH_BETWEEN_TIME_REGIONS = 1.8; // in years. NOTE: regions are already a year apart, accounted for below
const getSvgCoordsForLoveSongType = (
	loveSongType,
	aggregateSnakeChartPositions
) =>
	aggregateSnakeChartPositions.reduce((accum, timeRegion) => {
		const { y0, y1 } =
			timeRegion.popularityScoreSumsInTimeRegion[loveSongType] || {};
		return [
			...accum,
			{
				x: timeRegion.start,
				y0,
				y1
			},
			{
				x: timeRegion.stop - (TRANSITION_WIDTH_BETWEEN_TIME_REGIONS - 1),
				y0,
				y1
			}
		];
	}, []);

export const svgCoordsForLoveSongTypes = derived(
	[aggregateSnakeChartPositions],
	([$aggregateSnakeChartPositions]) =>
		LOVE_SONG_TYPES.map((loveSongType) => ({
			loveSongType,
			svgCoords: getSvgCoordsForLoveSongType(
				loveSongType,
				$aggregateSnakeChartPositions
			)
		}))
);

// TODO: delete this, replace with just a svgPathGenerator that returns one object
export const aggregateSnakeChartSVGPaths = derived(
	[svgCoordsForLoveSongTypes, viewport, visibleButNotSelectedLoveSongTypes],
	([
		$svgCoordsForLoveSongTypes,
		$viewport,
		$visibleButNotSelectedLoveSongTypes
	]) =>
		$svgCoordsForLoveSongTypes.map(({ loveSongType, svgCoords }) => {
			const pathGenerator = createSVGPathGenerator($viewport);
			const visibleButNotSelected =
				$visibleButNotSelectedLoveSongTypes.includes(loveSongType);
			return {
				// DERIVE THESE IN MAINVIZ, DON'T PASS
				loveSongType,
				visibleButNotSelected,
				// KEEP THESE PROPERTIES
				svgPathGenerator: pathGenerator,
				y0BorderGenerator: pathGenerator.lineY0(),
				y1BorderGenerator: pathGenerator.lineY1()
			};
		})
);
