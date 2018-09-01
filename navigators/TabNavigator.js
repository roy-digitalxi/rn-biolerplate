import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
// Libraries
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Platform } from 'react-native';

// components
import {
  HomeScreen,
  ChannelScreen,
  BookmarkScreen,
} from '../screens';

// constants
import Colors from '../constants/colors';

// Main Tab Navigator
const MainRootTabNavigator = createBottomTabNavigator({

  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={30} />
      ),
    },
  },
  Explore: {
    screen: ChannelScreen,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-compass" color={tintColor} size={30} />
      ),
    },
  },
  Bookmark: {
    screen: BookmarkScreen,
    navigationOptions: {
      tabBarLabel: 'Bookmarks',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bookmark" color={tintColor} size={30} />
      ),
    },
  },

}, {
  initialRouteName: 'Home',
  swipeEnabled: false,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: (Platform.OS !== 'android'),
    showIcon: true,
    inactiveTintColor: Colors.inactiveColor,
    activeTintColor: Colors.activeColor,
    pressColor: Colors.activeColor,
    IndicatorStyle: {
      backgroundColor: Colors.activeColor,
    },
    style: {
      backgroundColor: Colors.whiteColor,
      height: 60,
      borderTopColor: 'transparent',
      shadowColor: Colors.greyColor,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 1,
    },
    labelStyle: {
      fontSize: 14,
    },
  },
});

export default MainRootTabNavigator;
