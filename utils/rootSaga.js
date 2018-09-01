import { all, fork } from 'redux-saga/effects';
import ChannelSaga from '../screens/Channel/saga';
import FeedsSaga from '../screens/Feed/saga';
import HomeSaga from '../screens/Home/saga';

export default function* rootSaga() {
  yield all([fork(ChannelSaga), fork(FeedsSaga), fork(HomeSaga)]);
}
