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
    height: '100%',
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
      style={{ height: 300 }}
    />
  </View>
);

DxHtmlReader.propTypes = {
  source: PropTypes.string,
};


export default DxHtmlReader;
