import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../Api';
import actions from './actions';
import constants from './constants';

// utils
import Alert from '../../utils/Alert';

function* postStreamExperienceSaga(action) {
  try {
    const experiences = yield call(api.Feeds.streamExperienceList, action.payload);
    if (experiences.Confirmation === 'SUCCESS') {
      yield put(actions.postStreamExperienceSuccess(experiences));
    }
  } catch (err) {
    yield put(actions.postStreamExperienceFailure(err.response.data));
  }
}

function* postStreamExperienceCardInfoSaga(action) {
  try {
    const experiences = yield call(api.Feeds.mobileViewExperience, action.payload);
    if (experiences.Confirmation === 'SUCCESS') {
      yield put(actions.postStreamCardContentSucccess(experiences));
    }
  } catch (err) {
    yield put(actions.postStreamCardContentErrors(err.response.data));
  }
}

export default function* FeedsSaga() {
  yield takeLatest(constants.DX_POST_STREAM_EXPRERIENCE_LIST_REQUEST, postStreamExperienceSaga);
  yield takeLatest(constants.DX_POST_STREAM_EXPRERIENCE_CARD_INFO_REQUEST, postStreamExperienceCardInfoSaga);
}
