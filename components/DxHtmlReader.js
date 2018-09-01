import React from 'react';
import {
  View,
  WebView,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

// constants
import colors from '../constants/colors';

const styles = {
  container: {
    flex: 1,
    minHeight: 50,
    width: '100%',
    paddingLeft: 12,
    paddingRight: 12,
    margin: 0,
    padding: 0,
  },
};

const DxHtmlReader = ({ source }) => (
  <View style={styles.container}>
    <WebView
      javaScriptEnabled={true}
      domStorageEnabled={true}
      source={{ uri: source }}
      scalesPageToFit = {
        Platform.OS !== 'ios'
      }
    />
  </View>
);

DxHtmlReader.propTypes = {
  source: PropTypes.string,
};


export default DxHtmlReader;
