import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
// constants
import Pdf from 'react-native-pdf';
import colors from '../constants/colors';

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    margin: 0,
    padding: 0,
  },
  pdf: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
};

const DxDocReader = ({ source }) => {
  const {
    container,
    pdf,
  } = styles;
  return (
    <View style={container}>
      <Pdf
        source={{ uri: source }}
        onLoadComplete={(numberOfPages, filePath) => {
          // console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          // console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          // console.log(error);
        }}
        style={pdf}
      />
    </View>

  );
};

DxDocReader.propTypes = {
  source: PropTypes.string,
};

export default DxDocReader;
