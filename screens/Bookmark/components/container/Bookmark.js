import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import FeedList from './FeedList';
import * as colors from '../../../../styles/variables';

class Bookmark extends Component {
  render() {
    const {
      contentWrapperStyle,
      contentContainerStyle,
    } = styles;
    return (
      <View style={contentWrapperStyle}>
          <ScrollView contentContainerStyle={contentContainerStyle}>
              <FeedList />
          </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentWrapperStyle: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingBottom: Platform.OS === 'android' ? 20 : 0,
  },
  contentContainerStyle: {
    minHeight: Dimensions.get('window').height - 64 - 48,
  },
});

export default Bookmark;
