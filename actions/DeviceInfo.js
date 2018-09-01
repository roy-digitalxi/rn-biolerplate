import constants from '../constants';

export default {
  get_device_id: deviceId => ({
    type: constants.GET_USER_PHONE_UNIQUE_ID,
    payload: deviceId,
  }),
};
