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

  // Subscribe Channel
  postChannelSubscribeRequest: (UserGUID, ExperienceChannelGUID, IsHardInterest) => ({
    type: constants.DX_POST_CHANNEL_SUBSCRIBE_REQUEST,
    payload: {
      UserGUID,
      ExperienceChannelGUID,
      IsHardInterest,
    },
  }),

  postChannelSubscribeSuccess: data => ({
    type: constants.DX_POST_CHANNEL_SUBSCRIBE_SUCCESS,
    payload: data,
  }),

  postChannelSubscribeFailure: errors => ({
    type: constants.DX_POST_CHANNEL_SUBSCRIBE_FAILURE,
    payload: errors,
  }),
};
