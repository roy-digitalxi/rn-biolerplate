import constants from '../constants';

export default {
  openModal: () => ({
    type: constants.OPEN_MODAL,
    payload: true,
  }),
  closeModal: () => ({
    type: constants.CLOSE_MODAL,
    payload: false,
  }),
};
