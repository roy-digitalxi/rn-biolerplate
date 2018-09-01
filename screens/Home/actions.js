import constants from './constants';

// Actions
export default {
  // Get downloads directory content
  getDownloadsDirectoryRequest: directoryName => ({
    type: constants.DX_GET_DOWNLOADS_DIRECTORY_REQUEST,
    payload: directoryName,
  }),

  getDownloadsDirectorySuccess: data => ({
    type: constants.DX_GET_DOWNLOADS_DIRECTORY_SUCCESS,
    payload: data,
  }),

  getDownloadsDirectoryErrors: errors => ({
    type: constants.DX_GET_DOWNLOADS_DIRECTORY_ERRORS,
    payload: errors,
  }),

  // Add feed to download
  addFeedToDownloadRequest: data => ({
    type: constants.DX_ADD_FEED_TO_DOWNLOAD_REQUEST,
    payload: data,
  }),

  addFeedToDownloadSuccess: downloadData => ({
    type: constants.DX_ADD_FEED_TO_DOWNLOAD_SUCCESS,
    payload: downloadData,
  }),

  addFeedToDownloadErrors: errors => ({
    type: constants.DX_ADD_FEED_TO_DOWNLOAD_ERRORS,
    payload: errors,
  }),

  // Delete feed from downloads

  deleteFeedFromDownloadRequest: (fileName, folderName) => ({
    type: constants.DX_DELETE_FEED_FROM_DOWNLOAD_REQUEST,
    payload: { fileName, folderName },
  }),

  deleteFeedFromDownloadSuccess: data => ({
    type: constants.DX_DELETE_FEED_FROM_DOWNLOAD_SUCCESS,
    payload: data,
  }),

  deleteFeedFromDownloadErrors: errors => ({
    type: constants.DX_DELETE_FEED_FROM_DOWNLOAD_ERRORS,
    payload: errors,
  }),

  // Get featured Content

  getFeaturedCardsRequest: featuredParams => ({
    type: constants.DX_GET_FEATURED_CARDS_REQUEST,
    payload: featuredParams,
  }),

  getFeaturedCardsSuccess: featuredData => ({
    type: constants.DX_GET_FEATURED_CARDS_SUCCESS,
    payload: featuredData,
  }),

  getFeaturedCardsErrors: errors => ({
    type: constants.DX_GET_FEATURED_CARDS_ERRORS,
    payload: errors,
  }),

  // Get New Releases Content

  getNewReleaseRequest: newReleaseParams => ({
    type: constants.DX_GET_NEW_RELEASES_CARDS_REQUEST,
    payload: newReleaseParams,
  }),

  getNewReleaseSuccess: newReleaseData => ({
    type: constants.DX_GET_NEW_RELEASES_CARDS_SUCCESS,
    payload: newReleaseData,
  }),

  getNewReleaseErrors: errors => ({
    type: constants.DX_GET_NEW_RELEASES_CARDS_ERRORS,
    payload: errors,
  }),

  // Get Most Popular Content

  getMostPopularRequest: mostPopularParams => ({
    type: constants.DX_GET_MOST_POPULAR_CARDS_REQUEST,
    payload: mostPopularParams,
  }),

  getMostPopularSuccess: mostPopularData => ({
    type: constants.DX_GET_MOST_POPULAR_CARDS_SUCCESS,
    payload: mostPopularData,
  }),

  getMostPopularErrors: errors => ({
    type: constants.DX_GET_MOST_POPULAR_CARDS_ERRORS,
    payload: errors,
  }),

  // Get Trending Content

  getTrendingRequest: trendingParams => ({
    type: constants.DX_GET_TRENDING_CARDS_REQUEST,
    payload: trendingParams,
  }),

  getTrendingSuccess: trendingData => ({
    type: constants.DX_GET_TRENDING_CARDS_SUCCESS,
    payload: trendingData,
  }),

  getTrendingErrors: errors => ({
    type: constants.DX_GET_TRENDING_CARDS_ERRORS,
    payload: errors,
  }),

  dx_scroll: (completion, isBottom) => ({
    type: constants.DX_SCROLL,
    payload: {
      completion,
      isBottom,
    },
  }),

  dx_feed_back: () => ({
    type: constants.DX_FEED_BACK,
    payload: {},
  }),

  dx_feed_back_complete: () => ({
    type: constants.DX_FEED_BACK_COMPLETE,
    payload: {},
  }),

  dx_browser: document => ({
    type: constants.DX_BROWSER,
    payload: {
      document,
    },
  }),

  dx_browser_back: () => ({
    type: constants.DX_BROWSER_BACK,
    payload: {},
  }),

  dx_section_browser: current_level_section => ({
    type: constants.DX_SECTION_BROWSER,
    payload: {
      current_level_section,
    },
  }),

  dx_section_browser_back: () => ({
    type: constants.DX_SECTION_BROWSER_BACK,
    payload: {},
  }),

  dx_section_suggest_browser: () => ({
    type: constants.DX_SECTION_SUGGEST_BROWSER,
    payload: {},
  }),

  dx_add_feed_to_download: downloadData => ({
    type: constants.DX_ADD_FEED_TO_DOWNLOAD,
    payload: downloadData,
  }),

  dx_delete_download: feedId => ({
    type: constants.DX_DELETE_DOWNLOAD,
    payload: feedId,
  }),

  dx_add_bookmark: feedId => ({
    type: constants.DX_ADD_BOOKMARK,
    payload: feedId,
    meta: {
      offline: {
        // the network action to execute
        effect: {
          url: '',
          method: 'POST',
          body: JSON.stringify({
            feedId,
          }),
        },
        // action to dispatch when effect succeeds:
        commit: {
          type: 'DX_ADD_BOOKMARK',
          meta: {
            feedId,
          },
        },
        // action to dispatch if network action fails permanently:
        rollback: {
          type: 'DX_ADD_BOOKMARK_ROLLBACK',
          meta: {
            feedId,
          },
        },
      },
    },
  }),

  dx_delete_bookmark: feedId => ({
    type: constants.DX_DELETE_BOOKMARK,
    payload: feedId,
  }),
};
