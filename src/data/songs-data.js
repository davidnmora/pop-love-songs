import rawSongsData from "$data/23-EXPORT-viz-ready-data.json";
import { SONG_DATA_COLUMNS_ENUM } from "./data-constants";
import { calculateRadiusFromPopularityScore } from "$components/viz/viz-utils.js";

// export CAPS constants MIN_YEAR and MAX_YEAR
export const MIN_YEAR = rawSongsData.reduce(
	(acc, song) =>
		Math.min(acc, +song[SONG_DATA_COLUMNS_ENUM.date_as_decimal]),
	Infinity
);
export const MAX_YEAR = rawSongsData.reduce(
	(acc, song) =>
		Math.max(acc, +song[SONG_DATA_COLUMNS_ENUM.date_as_decimal]),
	-Infinity
);

// algo:
// 1. given an array of non-overlapping, contiguous time regions (an array with a start & stop year)...
// Use 1968-1969, then do decades from there on out (1970-1979, 1980-1989, etc.)
let aggregationTimeRegions = [
	{
		start: 1958,
		stop: 1969
	},
	{
		start: 1970,
		stop: 1979
	},
	{
		start: 1980,
		stop: 1989
	},
	{
		start: 1990,
		stop: 1999
	},
	{
		start: 2000,
		stop: 2009
	},
	{
		start: 2010,
		stop: 2019
	},
	{
		start: 2020,
		stop: 2029
	}
];

// 2. ... aggregate the total songs for each time region, then label each with a sumative percentage, append that to the object

const getAggregatePercentageByLoveSongType = (songsInTimeRegion) => {
	// 1. aggregate
	const popularitySumByType = songsInTimeRegion.reduce((acc, song) => {
		const loveSongType = song[SONG_DATA_COLUMNS_ENUM.love_song_sub_type];
		const popularity = song[SONG_DATA_COLUMNS_ENUM.popularity_score];
		return {
			...acc,
			[loveSongType]: (acc[loveSongType] || 0) + popularity
		};
	}, {});

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
			// Note: want to place the dots in the middle of the band, so divide by 2
			[loveSongType]:
				totalPercentageThatHasBeenAccountedFor + loveSongPercentage / 2
		};
	}, {});
};

const loveSongsLabeledByTimeRegionPercentageForPosition =
	aggregationTimeRegions.map((timeRegion) => {
		const songsInTimeRegion = rawSongsData.filter((song) => {
			const songYear = +song[SONG_DATA_COLUMNS_ENUM.date_as_decimal];
			return songYear >= timeRegion.start && songYear <= timeRegion.stop;
		});

		return {
			...timeRegion,
			popularityScoreSumsInTimeRegion:
				getAggregatePercentageByLoveSongType(songsInTimeRegion)
		};
	});

const getPercentageForSong = (song) => {
	const songYear = Math.round(+song[SONG_DATA_COLUMNS_ENUM.date_as_decimal]);
	const timeRegion = loveSongsLabeledByTimeRegionPercentageForPosition.find(
		(timeRegion) => songYear >= timeRegion.start && songYear <= timeRegion.stop
	);
	if (!timeRegion) {
		console.warn(
			"Song falls outside set time regions:",
			song,
			loveSongsLabeledByTimeRegionPercentageForPosition
		);
		return 0.5;
	}

	const loveSongType = song[SONG_DATA_COLUMNS_ENUM.love_song_sub_type];
	return timeRegion.popularityScoreSumsInTimeRegion[loveSongType];
};

// Wrap each array in an object (to which force simulation will attach properties)
const wrappedData = rawSongsData.map((song) => ({
	song,
	radius: calculateRadiusFromPopularityScore(
		+song[SONG_DATA_COLUMNS_ENUM.popularity_score]
	),
	yPositionTargetPercentage: getPercentageForSong(song)
}));

export default wrappedData;
