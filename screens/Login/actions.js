import constants from './constants';
import globalConstants from '../../constants';

// Actions
export default {

  test: (data) => {
    console.log('action called, now go to reducer');
    return {
      type: 'message',
      data,
    };
  },

  get_device_id: deviceId => ({
    type: globalConstants.GET_USER_PHONE_UNIQUE_ID,
    payload: deviceId,
  }),
};
