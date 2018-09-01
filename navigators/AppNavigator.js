import React from 'react';
import { connect } from 'react-redux';
import {
  createStackNavigator,
} from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import MainRootDrawerNavigator from './DrawerNavigator';

import LoginScreen from '../screens/Login/LoginScreen';

import SectionPage from '../screens/Feed/components/layout/SectionPage';
import FeedbackPage from '../screens/Feed/components/layout/FeedbackPage';
import PreferencePage from '../screens/Setting/components/layout/PreferencePage';
import PrivacyPage from '../screens/Setting/components/layout/PrivacyPage';
import HelpPage from '../screens/Setting/components/layout/HelpPage';
import { FeedScreen, ChannelScreen, DownloadScreen } from '../screens';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

// Main Stack Navigator
const MainRootNavigator = createStackNavigator({
  MainScreen: { screen: MainRootDrawerNavigator },
  Section: { screen: SectionPage },
  Feedback: { screen: FeedbackPage },
  Preference: { screen: PreferencePage },
  Privacy: { screen: PrivacyPage },
  Help: { screen: HelpPage },
  Feed: { screen: FeedScreen },
  Channel: { screen: ChannelScreen },
  Download: { screen: DownloadScreen },
}, {
  headerMode: 'none',
});

// Root Stack Navigator
const RootNavigator = createStackNavigator({
  Main: { screen: MainRootNavigator },
  Login: { screen: LoginScreen },
}, {
  headerMode: 'none',
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {
  RootNavigator,
  AppNavigator,
  middleware,
};
