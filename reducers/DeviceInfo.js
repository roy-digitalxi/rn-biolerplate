import constants from '../constants';

const initialState = {
  deviceId: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_USER_PHONE_UNIQUE_ID:
      return {
        ...state,
        deviceId: action.payload,
      };
    default:
      return state;
  }
};
