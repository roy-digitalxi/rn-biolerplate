import constants from './constants';

// helpers
import { isObjectEmpty } from '../../helpers';

const INITIAL_STATE = {
  downloadsDirectory: [],
  userDownloads: [],
  featured: [],
  trending: [],
  newReleases: [],
  mostPopular: [],
  isLoading: false,
  errors: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Get User Downloads
    case constants.DX_GET_DOWNLOADS_DIRECTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case constants.DX_GET_DOWNLOADS_DIRECTORY_SUCCESS:
      return {
        ...state,
        downloadsDirectory: action.payload,
        isLoading: false,
      };

    case constants.DX_GET_DOWNLOADS_DIRECTORY_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

      // Download feeds
    case constants.DX_ADD_FEED_TO_DOWNLOAD_SUCCESS:
      return {
        ...state,
        userDownloads: [{
          data: action.payload,
          alreadyDownloaded: true,
        }, ...state.downloads],
      };

    case constants.DX_ADD_FEED_TO_DOWNLOAD_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

      // Delete user Downloaded feeds
    case constants.DX_DELETE_FEED_FROM_DOWNLOAD_SUCCESS:
      return {
        ...state,
        userDownloads: state.userDownloads.filter(item => item.fileName !== action.payload.name),
      };

    case constants.DX_DELETE_FEED_FROM_DOWNLOAD_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

      // Get Featured

    case constants.DX_GET_FEATURED_CARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case constants.DX_GET_FEATURED_CARDS_SUCCESS:
      return {
        ...state,
        featured: action.payload.Response.ExperienceStreams,
        isLoading: false,
      };

    case constants.DX_GET_FEATURED_CARDS_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

      // Get Most Popular

    case constants.DX_GET_MOST_POPULAR_CARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case constants.DX_GET_MOST_POPULAR_CARDS_SUCCESS:
      return {
        ...state,
        mostPopular: action.payload.Response.ExperienceStreams,
        isLoading: false,
      };

    case constants.DX_GET_MOST_POPULAR_CARDS_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

      // Get New Releases

    case constants.DX_GET_NEW_RELEASES_CARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case constants.DX_GET_NEW_RELEASES_CARDS_SUCCESS:
      return {
        ...state,
        newReleases: action.payload.Response.ExperienceStreams,
        isLoading: false,
      };

    case constants.DX_GET_NEW_RELEASES_CARDS_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

      // Get Trending

    case constants.DX_GET_TRENDING_CARDS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case constants.DX_GET_TRENDING_CARDS_SUCCESS:
      return {
        ...state,
        trending: action.payload.Response.ExperienceStreams,
        isLoading: false,
      };

    case constants.DX_GET_TRENDING_CARDS_ERRORS:
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
