import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../Api';
import actions from './actions';
import constants from './constants';

// File system
import { readDir, downloadFile, deleteFile } from '../../utils/fileSystem';

// utils
import Alert from '../../utils/Alert';

function* getUserDownloadDirectorySaga(action) {
  try {
    const directoryContent = yield (readDir(action.payload));
    yield put(actions.getDownloadsDirectorySuccess(directoryContent));
  } catch (err) {
    yield put(actions.getDownloadsDirectoryErrors(err.response.data));
  }
}

function* addUserDownloadsSaga(action) {
  try {
    const {
      fileLink, folderName, fileName, fileType, userGUID,
    } = action.payload;

    yield (downloadFile(fileLink, folderName, fileName, fileType));

    yield put(actions.addFeedToDownloadSuccess(action.payload));
  } catch (err) {
    yield put(actions.addFeedToDownloadErrors(err.response.data));
  }
}

function* deleteUserDownloadsSaga(action) {
  try {
    const {
      fileName,
      folderName,
    } = action.payload;

    yield (deleteFile(fileName, folderName));
    yield put(actions.deleteFeedFromDownloadSuccess(action.payload));
  } catch (err) {
    yield put(actions.deleteFeedFromDownloadErrors(err.response.data));
  }
}

function* getFeaturedSaga(action) {
  try {
    const featuredContent = yield call(api.Explore.featuredChannelList, action.payload);
    if (featuredContent.Confirmation === 'SUCCESS') {
      yield put(actions.getFeaturedCardsSuccess(featuredContent));
    }
  } catch (err) {
    yield put(actions.getFeaturedCardsErrors(err.response.data));
  }
}

function* getmostPopularSaga(action) {
  try {
    const mostPopularContent = yield call(api.Explore.streamList, action.payload);
    if (mostPopularContent.Confirmation === 'SUCCESS') {
      yield put(actions.getMostPopularSuccess(mostPopularContent));
    }
  } catch (err) {
    yield put(actions.getMostPopularErrors(err.response.data));
  }
}

function* getTrendingSaga(action) {
  try {
    const trendingContent = yield call(api.Explore.streamList, action.payload);
    if (trendingContent.Confirmation === 'SUCCESS') {
      yield put(actions.getTrendingSuccess(trendingContent));
    }
  } catch (err) {
    yield put(actions.getTrendingErrors(err.response.data));
  }
}

function* getNewReleasesSaga(action) {
  try {
    const newReleaseContent = yield call(api.Explore.streamList, action.payload);
    if (newReleaseContent.Confirmation === 'SUCCESS') {
      yield put(actions.getNewReleaseSuccess(newReleaseContent));
    }
  } catch (err) {
    yield put(actions.getNewReleaseErrors(err.response.data));
  }
}

export default function* HomeSaga() {
  yield takeLatest(constants.DX_GET_DOWNLOADS_DIRECTORY_REQUEST, getUserDownloadDirectorySaga);
  yield takeLatest(constants.DX_ADD_FEED_TO_DOWNLOAD_REQUEST, addUserDownloadsSaga);
  yield takeLatest(constants.DX_DELETE_FEED_FROM_DOWNLOAD_REQUEST, deleteUserDownloadsSaga);
  yield takeLatest(constants.DX_GET_FEATURED_CARDS_REQUEST, getFeaturedSaga);
  yield takeLatest(constants.DX_GET_NEW_RELEASES_CARDS_REQUEST, getNewReleasesSaga);
  yield takeLatest(constants.DX_GET_MOST_POPULAR_CARDS_REQUEST, getmostPopularSaga);
  yield takeLatest(constants.DX_GET_TRENDING_CARDS_REQUEST, getTrendingSaga);
}
