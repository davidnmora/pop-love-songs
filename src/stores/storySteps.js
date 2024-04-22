import { derived, writable } from "svelte/store";
import {
	SONG_DATA_COLUMNS_ENUM,
	LOVE_SONG_TYPE_CONSTANTS,
	GENDER_CONSTANTS,
	LOVE_SONG_TYPES
} from "$data/data-constants.js";
import { MAX_YEAR, MIN_YEAR } from "$data/songs-data.js";
import {
	fractionOfScreenFactory,
	getXPositionFromTime,
	getYPositionInSnakeChart
} from "./forcePositionOptions-helper.js";

// TODO: probably we'll overwrite this whole thing for the final. TEMP, just hardcoded for the demo
export const FIRST_STEP_TO_SHOW_SIDE_BAR = 3;

const SEARCH_AND_FILTER_BLANK_STATE = {
	selectedLoveSongTypes: [],
	selectedPerformers: [],
	selectedGenders: [],
	selectedSongs: [],
	timeRange: {
		startYear: MIN_YEAR,
		endYear: MAX_YEAR
	},

	columnsToFilterVisibilityOn: [],
	visibleButNotSelectedLoveSongTypes: [],

	typesTreatedAsNonLoveSongs: []
};

const VISUAL_ENCODING_BLANK_STATE = {
	calculateXForcePosition: getXPositionFromTime,
	calculateYForcePosition: getYPositionInSnakeChart,
	// TODO: just to get to a prototype, their may be more clever ways to derive these:
	showAggregateSnakeChart: false,
	showBubbleChart: true
};

const newSteps = {
	// Intro: Is Boomer Bob right that the love song is dying?

	allTheBillboardHitsInAMonoChromeCluster: {
		text: "If you look at the Billboard Top 10 from 1959-2023 (each buble is a song, sized by its popularity & tenure on the top 10)...",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: fractionOfScreenFactory(0.7, 0.3),
			calculateYForcePosition: fractionOfScreenFactory(0.7, 0.3)
		}
	},
	highlightSerenadesWithinCluster: {
		text: "... you'll see tons of what you might call Serenades: your classic, unambiguous love songs.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) => t !== LOVE_SONG_TYPE_CONSTANTS.serenade
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: fractionOfScreenFactory(0.7, 0.3),
			calculateYForcePosition: fractionOfScreenFactory(0.7, 0.3)
		}
	},
	showJustSerenadeCluster: {
		text: "But, despite their total prevelence, a lot of people, especially Boomers, think that these days the love song is dying.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [LOVE_SONG_TYPE_CONSTANTS.serenade],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: fractionOfScreenFactory(0.7, 0.3),
			calculateYForcePosition: fractionOfScreenFactory(0.7, 0.3)
		}
	},
	serenadesAreIndeedDying: {
		text: "And, if you spread Serenades from 1959-2023, they are indeed declining...",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [LOVE_SONG_TYPE_CONSTANTS.serenade],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: fractionOfScreenFactory(0.5)
		},
		showLoveSongChangeOverTime: true
	},
	serenadesPeakedInThe90s: {
		text: "Serenades peaked in popularity in the 90s with hits like 'I'll make love to you' by Boyz II Men...",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [LOVE_SONG_TYPE_CONSTANTS.serenade],
			timeRange: {
				startYear: MIN_YEAR,
				endYear: 2000
			},
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: fractionOfScreenFactory(0.5)
		},
		showLoveSongChangeOverTime: true
	},
	aFewArtistsKeepThemAliveToday: {
		text: "But only a few artists like Biebs & T-Swift keep them alive today [see side panel]. With the Serenade dropping from almost 1 in 4 songs in the 60s to just 1 in 10 today, love songs *do* seem to be on their death bed...",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [LOVE_SONG_TYPE_CONSTANTS.serenade],
			timeRange: {
				startYear: 2001,
				endYear: MAX_YEAR
			},
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: fractionOfScreenFactory(0.5)
		},
		showLoveSongChangeOverTime: true
	},
	anAggSnakeChartMakesBoomerBobSeemRight: {
		text: "Comparing Serenades in aggregate against all other songs, we have to ask: is Boomer Bob right about love songs dying?",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) => t !== LOVE_SONG_TYPE_CONSTANTS.serenade
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		},
		showLoveSongChangeOverTime: true
	},

	// What counts as love song?
	butWeWillTakeAMoreExpansiveView: {
		text: "Not quite: we think Boomer Bob has too narrow of a view of love. Sure, Serenades have declined. But what about other songs? Is 'Buy U A Drank' by T-Pain a love song? What about 'I Will Always Love You' by Whitney Houston? 'WAP'? We'll take a more expansive view.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedSongs: [
				"Buy U A Drank (Shawty Snappin')",
				"I Will Always Love You",
				"WAP"
			],
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) => t !== LOVE_SONG_TYPE_CONSTANTS.serenade
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		},
		showLoveSongChangeOverTime: true
	},
	whyWeCare: {
		text: "[Why MJia & Dmo care about countering Boomer Bob's view]",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) => t !== LOVE_SONG_TYPE_CONSTANTS.serenade
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: false
		},
		showLoveSongChangeOverTime: true
	},
	introTheTypeGrid: {
		text: "[here's how we'll classify love song types. here's Serenade, here's Longing & Heartbreak]",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) => t !== LOVE_SONG_TYPE_CONSTANTS.serenade
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: false
		},
		loveSongTypeDefinitionImage: "longing-&-heartbreak"
	},

	// Remaining Boomer-Bob-friendly types:
	longingAndHeartbreakOverview: {
		text: "Longing & Heartbreak is almost as popular as the Serenade, and even has surpassed it in the 2020s, thanks in large part to Blinding Lights by The Weeknd.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: false,
			showBubbleChart: true
		}
	},
	longingAndHeartbreakDoNotTipTheScales: {
		text: "Does expanding to include Heartbreak & Longing songs keep love songs alive? Au contraire! Added to Serenades, love songs have now dropped 22% since the 60s!",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) =>
					![
						LOVE_SONG_TYPE_CONSTANTS.serenade,
						LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak
					].includes(t)
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		},
		showLoveSongChangeOverTime: true
	},
	// Courtship
	definingCourtship: {
		text: "But we're just getting started... How about when you love someone, and it *might* become something more? Let's call these Courtship & Anticipation.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak
				// LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart
		},
		loveSongTypeDefinitionImage: "courtship-&-anticipation"
	},
	introducingCourtship: {
		text: "These songs stretch from The Beatles' 'I Want To Hold Your Hand' to Carly Rae Jepsen's 'Call Me Maybe'...",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedSongs: ["I Want To Hold Your Hand", "Call Me Maybe"],
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},
	courtshipHasNoEffect: {
		text: "But the popularity of Courtship & Anticipation songs has remained steady over the years, neither bolstering nor hurting the broader love song category as a whole.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) =>
					![
						LOVE_SONG_TYPE_CONSTANTS.serenade,
						LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
						LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation
					].includes(t)
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		},
		showLoveSongChangeOverTime: true
	},

	// Expansive-mode

	// its complicated
	letsGoBeyondBoomerBob: {
		text: "But we think love songs go beyond Boomer Bob's narrow view. Let's explore love songs that pull in more of romance's complexity, starting with: It's Complicated, which straddles stable & painful relationships.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) =>
					![
						LOVE_SONG_TYPE_CONSTANTS.serenade,
						LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
						LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation
					].includes(t)
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		},
		loveSongTypeDefinitionImage: "its-complicated"
	},

	definingItsComplicated: {
		text: "Sometimes a romantic relationship isn't squarely thriving or over. Sometimes... It's Complicated. It straddles stable & painful relationships.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation
				// LOVE_SONG_TYPE_CONSTANTS.itsComplicated
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart
		},
		loveSongTypeDefinitionImage: "its-complicated"
	},
	itsComplicatedDetail: {
		text: "It's Complicated hit its stride in the 00s and 10s, surpassing Courtship & Anticipation as well as Longing & Heartbreak.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type],
			visibleButNotSelectedLoveSongTypes: [
				// LOVE_SONG_TYPE_CONSTANTS.serenade,
				// LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				// LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation
			]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: false
		}
	},
	kikiDoYouLoveMe: {
		text: "Drake emobodies the love song type, appearing in *11* Billboard Top Ten hits. Kiki may not love him, but *he's* definitely riding It's Complicated hard.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedPerformers: ["Drake"],
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type],
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation
			]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},
	itsComplicatedDoesNotTipTheScales: {
		text: "But even with It's Complicated, love songs are still in decline",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) =>
					![
						LOVE_SONG_TYPE_CONSTANTS.serenade,
						LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
						LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
						LOVE_SONG_TYPE_CONSTANTS.itsComplicated
					].includes(t)
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: false
		},
		showLoveSongChangeOverTime: true
	},

	definingGoodRiddance: {
		text: "But we're not done: meet Good Riddance, which is like Longing & Heartbreak, but with a bite. It's the angsty side of love.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated
				// LOVE_SONG_TYPE_CONSTANTS.goodRiddance
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart
		},
		loveSongTypeDefinitionImage: "good-riddance"
	},
	introducingGoodRiddance: {
		text: "Good Riddance, ranging from Dion's 'Runaround Sue' (1962) to Olivia Rodrigo's 2021 'Good 4 U', really established itself starting in the 2000s with Cher's 'Believe'...",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedSongs: ["Runaround Sue", "Good 4 U", "Believe"],
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},
	goodRiddanceDetail: {
		text: "Female artists largely created & sustain this love song type.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedGenders: [GENDER_CONSTANTS.female],
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type],
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated
			]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},
	goodRiddanceArtists: {
		text: "Barbra Streisand was ahead of her time, beating Good Riddance heavy hitters like Kelly Clarksen and Mariah Carey by decades.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedPerformers: [
				"Barbra Streisand",
				"Kelly Clarkson",
				"Mariah Carey"
			],
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type],
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated
			]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},

	// Love song for the self
	definingLoveSongForTheSelf: {
		text: "Even more of a female-led type, Love Song for the Self is like a Serenade... but directed back at the speaker themselves. Though it's not typically written *to* a lover, it's almost always written *in reaction* to romantic rejection.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance
				// LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type],
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance
			]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart
		},
		loveSongTypeDefinitionImage: "love-song-for-the-self"
	},
	introducingLoveSongForTheSelf: {
		text: "Love Song for the Self is the opposite of love song death: it's exploded in popularity since TLC & Destiny's Child put it on the map in the early 2000s.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedSongs: [
				"Independent Women Part I",
				"No Scrubs",
				"Unpretty",
				"Bootylicious"
			],
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance,
				LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},
	womenDominateLoveSongForTheSelf: {
		text: "Woman almost single-handedly created Love Song for the Self [toggle the gender filter to see!]. Think 'Fergalicious' or Ariana Grande's 'thank u, next'.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedGenders: [GENDER_CONSTANTS.female],
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance,
				LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type],
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance
			]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},
	didLoveSongForTheSelfTipTheScales: {
		text: "But even with Good Riddance & Love Song for the Self, love songs are still in decline (though less than before)",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			typesTreatedAsNonLoveSongs: LOVE_SONG_TYPES.filter(
				(t) =>
					![
						LOVE_SONG_TYPE_CONSTANTS.serenade,
						LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
						LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
						LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
						LOVE_SONG_TYPE_CONSTANTS.goodRiddance,
						LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf
					].includes(t)
			)
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			showAggregateSnakeChart: true,
			showBubbleChart: false
		},
		showLoveSongChangeOverTime: true
	},

	definingSexualConquest: {
		text: "But we've got one love song type left: blurring the lines between courtship and romance (and perhaps love and lust), we have Sexual Conquest.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance,
				LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf
				// LOVE_SONG_TYPE_CONSTANTS.sexualConquest
			],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type],
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance,
				LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf
			]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart
		},
		loveSongTypeDefinitionImage: "sexual-conquest"
	},

	introducingSexualConquest: {
		text: "As Boomers bemoan, Sexual Conquest has risen in popularity in recent decades. It even went so far as to dethrone Serenades in the 2000s.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance,
				LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf
				// LOVE_SONG_TYPE_CONSTANTS.sexualConquest
			],
			selectedLoveSongTypes: [LOVE_SONG_TYPE_CONSTANTS.sexualConquest]
			// columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: false
		}
	},
	sexualConquestDetail: {
		text: "Nicki Minaj and Drake feature in the most songs in category, with their hits like WAP and Way 2 Sexy.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedPerformers: ["Nicki Minaj", "Drake"],
			visibleButNotSelectedLoveSongTypes: [
				LOVE_SONG_TYPE_CONSTANTS.serenade,
				LOVE_SONG_TYPE_CONSTANTS.longingAndHeartbreak,
				LOVE_SONG_TYPE_CONSTANTS.courtshipAndAnticipation,
				LOVE_SONG_TYPE_CONSTANTS.itsComplicated,
				LOVE_SONG_TYPE_CONSTANTS.goodRiddance,
				LOVE_SONG_TYPE_CONSTANTS.loveSongForTheSelf,
				// LOVE_SONG_TYPE_CONSTANTS.sexualConquest
				LOVE_SONG_TYPE_CONSTANTS.notALoveSong
			],
			// selectedLoveSongTypes: [LOVE_SONG_TYPE_CONSTANTS.sexualConquest],
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},

	addInNonLoveSongsInGray: {
		text: "Ok, it's time to zoom out and answer our original question: is the love song dying? Let's look at the aggregate in 3, 2...",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: true
		}
	},

	theLoveSongIsActuallyRising: {
		text: "... and we have our answer: the love song is just as strong as it ever was (>1% change from the 60s!) In fact, love songs today are arguably more alive, encompassing more of the complexity of romance.",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart,
			showAggregateSnakeChart: true,
			showBubbleChart: false
		},
		showLoveSongChangeOverTime: true
	},

	// Explore mode
	youDecide: {
		text: "... that is, *if* you accept these love song definitions. But you don't need to! You decide: use the filters to tell *us* how the love song is doing [the % change score will update with filters]... Enjoy!",
		searchAndFilterState: {
			...SEARCH_AND_FILTER_BLANK_STATE,
			selectedLoveSongTypes: Object.values(LOVE_SONG_TYPE_CONSTANTS),
			columnsToFilterVisibilityOn: [SONG_DATA_COLUMNS_ENUM.love_song_sub_type]
		},
		visualEncodings: {
			...VISUAL_ENCODING_BLANK_STATE,
			calculateXForcePosition: getXPositionFromTime,
			calculateYForcePosition: getYPositionInSnakeChart
		},
		showLoveSongChangeOverTime: true
	}
};

export const storySteps = [
	// LATEST STORY:

	// Intro: Is Boomer Bob right that the love song is dying?
	newSteps.allTheBillboardHitsInAMonoChromeCluster,
	newSteps.highlightSerenadesWithinCluster,
	newSteps.showJustSerenadeCluster,
	newSteps.serenadesAreIndeedDying,
	newSteps.serenadesPeakedInThe90s,
	newSteps.aFewArtistsKeepThemAliveToday,
	newSteps.anAggSnakeChartMakesBoomerBobSeemRight,

	// What counts as love song?
	newSteps.butWeWillTakeAMoreExpansiveView,
	newSteps.whyWeCare,
	newSteps.introTheTypeGrid,

	// Remaining Boomer-Bob-friendly types:
	newSteps.longingAndHeartbreakOverview,
	newSteps.longingAndHeartbreakDoNotTipTheScales,

	newSteps.definingCourtship,
	newSteps.introducingCourtship,
	newSteps.courtshipHasNoEffect,

	// Expansive-mode
	newSteps.letsGoBeyondBoomerBob,

	newSteps.itsComplicatedDetail,
	newSteps.kikiDoYouLoveMe,
	newSteps.itsComplicatedDoesNotTipTheScales,

	newSteps.definingGoodRiddance,
	newSteps.introducingGoodRiddance,
	newSteps.goodRiddanceDetail,
	newSteps.goodRiddanceArtists,

	newSteps.definingLoveSongForTheSelf,
	newSteps.introducingLoveSongForTheSelf,
	newSteps.womenDominateLoveSongForTheSelf,
	newSteps.didLoveSongForTheSelfTipTheScales,

	newSteps.definingSexualConquest,
	newSteps.introducingSexualConquest,
	newSteps.sexualConquestDetail,

	// Conclusion:
	newSteps.addInNonLoveSongsInGray,
	newSteps.theLoveSongIsActuallyRising,

	// Explore mode
	newSteps.youDecide
];

export const currentStoryStepIndex = writable(0);

export const currentStoryStep = derived(
	[currentStoryStepIndex],
	([$currentStoryStepIndex]) => storySteps[$currentStoryStepIndex]
);

export const typesTreatedAsNonLoveSongs = derived(
	[currentStoryStep],
	([$currentStoryStep]) =>
		$currentStoryStep.searchAndFilterState.typesTreatedAsNonLoveSongs
);
