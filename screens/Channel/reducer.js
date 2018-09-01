import constants from './constants';

const INITIAL_STATE = {
  channels: [],
  subscribedChannels: [],
  errors: {},
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.DX_POST_CHANNEL_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case constants.DX_POST_CHANNEL_LIST_SUCCESS:
      return {
        ...state,
        channels: action.payload.Response.ExperienceChannels,
        isLoading: false,
      };

    case constants.DX_CHANNELS_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

      // Subscribe channel
    case constants.DX_POST_CHANNEL_SUBSCRIBE_REQUEST:
      return {
        ...state,
      };

    case constants.DX_POST_CHANNEL_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        subscribedChannels: [action.payload.Response, ...state],
      };

    case constants.DX_POST_CHANNEL_SUBSCRIBE_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};
