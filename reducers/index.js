import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../navigators/AppNavigator';

import {
  ChannelReducer,
  FeedReducer,
  BookmarkReducer,
  HomeReducer,
} from '../screens';
import constants from '../constants';
import feedScreenContants from '../screens/Feed/constants';
import settingScreenContants from '../screens/Setting/constants';
import bookmarkScreenContants from '../screens/Bookmark/constants';

// Global reducers
import deviceInfo from './DeviceInfo';
import modal from './Modal';

// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = RootNavigator.router.getActionForPathAndParams('Main');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(
  secondAction,
  tempNavState,
);

function nav(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      nextState = RootNavigator.router.getStateForAction(
        action,
        state,
      );
      nextState.currentTab = action.routeName;
      break;

    case constants.LOGIN:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;

    case constants.LOGOUT:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Login' }),
        state,
      );
      break;

    case feedScreenContants.DX_FEED_BACK:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Feedback' }),
        state,
      );
      break;

    case feedScreenContants.DX_BROWSER:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Section' }),
        state,
      );
      break;

    case feedScreenContants.DX_POST_STREAM_EXPRERIENCE_CARD_INFO_SUCCESS:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Section',
        }),
        state,
      );
      break;

    case feedScreenContants.DX_BROWSE_TO_CHANNEL_PAGE:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: 'Explore',
        }),
        state,
      );
      break;

    case settingScreenContants.DX_PREFERENCE:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Preference' }),
        state,
      );
      break;

    case settingScreenContants.DX_PRIVACY:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Privacy' }),
        state,
      );
      break;

    case settingScreenContants.DX_HELP:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Help' }),
        state,
      );
      break;

    case bookmarkScreenContants.DX_FEED_BACK_W:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'FeedbackW' }),
        state,
      );
      break;

    case bookmarkScreenContants.DX_BROWSER_W:
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'SectionW' }),
        state,
      );
      break;

    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  return nextState || state;
}

const initialAuthState = {
  isLoggedIn: false,
  data: {},
};
function auth(state = initialAuthState, action) {
  switch (action.type) {
    case constants.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case constants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

const AppReducer = combineReducers({
  nav,
  auth,
  deviceInfo,
  modal,
  channel: ChannelReducer,
  feed: FeedReducer,
  bookmark: BookmarkReducer,
  explore: HomeReducer,
});

export default AppReducer;
