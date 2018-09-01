import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../Api';
import actions from './actions';
import constants from './constants';

// utils
import Alert from '../../utils/Alert';

function* postChannelListSaga(action) {
  try {
    const channels = yield call(api.Channel.channelList, action.payload);
    if (channels.Confirmation === 'SUCCESS') {
      yield put(actions.postChannelListSuccess(channels));
    }
  } catch (err) {
    yield put(actions.postChannelListFailure(err.response.data));
    // Error notification
    Alert.showToast(err.response.data.Message);
  }
}

export default function* ChannelSaga() {
  yield takeLatest(constants.DX_POST_CHANNEL_LIST_REQUEST, postChannelListSaga);
}
