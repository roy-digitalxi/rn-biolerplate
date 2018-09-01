import React from 'react';
import { Dimensions } from 'react-native';

import { createDrawerNavigator } from 'react-navigation';
import MainRootTabNavigator from './TabNavigator';

import SideBar from './SideBar';

import {
  ChannelScreen, BookmarkScreen, HomeScreen,
} from '../screens';

const { width } = Dimensions.get('window');

// Main Drawer Navigator
const MainRootDrawerNavigator = createDrawerNavigator({
  MainScreen: { screen: MainRootTabNavigator },
  Explore: { screen: ChannelScreen },
  Bookmark: { screen: BookmarkScreen },
  Home: { screen: HomeScreen },
}, {
  initialRouteName: 'MainScreen',
  drawerWidth: width * 0.8,
  contentComponent: props => <SideBar {...props} />,
});

export default MainRootDrawerNavigator;
