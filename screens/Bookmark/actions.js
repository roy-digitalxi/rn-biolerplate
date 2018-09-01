import constants from './constants';

// Actions
export default {

  dx_scroll_w: (completion, isBottom) => ({
    type: constants.DX_SCROLL_W,
    payload: {
      completion,
      isBottom,
    },
  }),

  dx_feed_back_w: () => ({
    type: constants.DX_FEED_BACK_W,
    payload: {},
  }),

  dx_feed_back_complete_w: () => ({
    type: constants.DX_FEED_BACK_COMPLETE_W,
    payload: {},
  }),

  dx_browser_w: document => ({
    type: constants.DX_BROWSER_W,
    payload: {
      document,
    },
  }),

  dx_browser_back_w: () => ({
    type: constants.DX_BROWSER_BACK_W,
    payload: {},
  }),

  dx_section_browser_w: current_level_section => ({
    type: constants.DX_SECTION_BROWSER_W,
    payload: {
      current_level_section,
    },
  }),

  dx_section_browser_back_w: () => ({
    type: constants.DX_SECTION_BROWSER_BACK_W,
    payload: {},
  }),

  dx_section_suggest_browser_w: () => ({
    type: constants.DX_SECTION_SUGGEST_BROWSER_W,
    payload: {},
  }),
};
