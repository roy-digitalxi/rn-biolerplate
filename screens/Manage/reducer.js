import constants from './constants';

const INITIAL_STATE = {
  channels: [],
  errors: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.DX_POST_CHANNEL_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case constants.DX_POST_CHANNEL_LIST_SUCCESS:
      return {
        ...state,
        channels: action.payload,
        loading: false,
      };

    case constants.DX_CHANNELS_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
