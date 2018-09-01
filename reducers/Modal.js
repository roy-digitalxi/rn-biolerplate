import constants from '../constants';

const initialState = {
  modalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.OPEN_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };
    case constants.CLOSE_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };
    default:
      return state;
  }
};
