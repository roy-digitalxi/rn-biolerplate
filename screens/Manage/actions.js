import constants from './constants';

export default {
  // Get all channels actions
  postChannelListRequest: data => ({
    type: constants.DX_POST_CHANNEL_LIST_REQUEST,
    payload: data,
  }),

  postChannelListSuccess: channels => ({
    type: constants.DX_POST_CHANNEL_LIST_SUCCESS,
    payload: channels,
  }),

  postChannelListFailure: errors => ({
    type: constants.DX_CHANNELS_ERRORS,
    payload: errors,
  }),
};
