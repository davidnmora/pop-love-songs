import rawSongsData from "$data/23-EXPORT-viz-ready-data.json";
import { SONG_DATA_COLUMNS_ENUM } from "./data-constants";
import { calculateRadiusFromPopularityScore } from "$components/viz/viz-utils.js";

// export CAPS constants MIN_YEAR and MAX_YEAR
export const MIN_YEAR = rawSongsData.reduce(
	(acc, song) => Math.min(acc, +song[SONG_DATA_COLUMNS_ENUM.date_as_decimal]),
	Infinity
);
export const MAX_YEAR = rawSongsData.reduce(
	(acc, song) => Math.max(acc, +song[SONG_DATA_COLUMNS_ENUM.date_as_decimal]),
	-Infinity
);

// Wrap each array in an object (to which force simulation will attach properties)
const wrappedData = rawSongsData.map((song) => ({
	song,
	radius: calculateRadiusFromPopularityScore(
		+song[SONG_DATA_COLUMNS_ENUM.popularity_score]
	)
}));

export default wrappedData;
