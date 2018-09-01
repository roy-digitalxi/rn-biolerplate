import constants from './constants';

// Actions
export default {

  // Get all channel experiences action
  postStreamExperienceRequest: data => ({
    type: constants.DX_POST_STREAM_EXPRERIENCE_LIST_REQUEST,
    payload: data,
  }),

  postStreamExperienceSuccess: experiences => ({
    type: constants.DX_POST_STREAM_EXPRERIENCE_LIST_SUCCESS,
    payload: experiences,
  }),

  postStreamExperienceFailure: errors => ({
    type: constants.DX_POST_STREAM_EXPRERIENCE_LIST_ERRORS,
    payload: errors,
  }),

  // Get cards inside pages(mobile-view)

  postStreamCardContentRequest: data => ({
    type: constants.DX_POST_STREAM_EXPRERIENCE_CARD_INFO_REQUEST,
    payload: data,
  }),

  postStreamCardContentSucccess: cardPages => ({
    type: constants.DX_POST_STREAM_EXPRERIENCE_CARD_INFO_SUCCESS,
    payload: cardPages,
  }),

  postStreamCardContentErrors: errors => ({
    type: constants.DX_POST_STREAM_EXPRERIENCE_CARD_INFO_ERRORS,
    payload: errors,
  }),

  dx_browse_to_channel: () => ({
    type: constants.DX_BROWSE_TO_CHANNEL_PAGE,
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

  // Post feedback
  postFeedback: data => ({
    type: constants.POST_FEEDBACK,
    payload: data,
  }),
};
