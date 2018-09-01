import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

// constants
import colors from '../constants/colors';

const DxImageContent = ({ source }) => {
  const {
    container,
    image,
  } = styles;
  return (
    <View style={container}>
        <Image
            style={image}
            source={{ uri: source }}
        />
    </View>
  );
};

DxImageContent.propTypes = {
  source: PropTypes.string,
};

const styles = {

  container: {
    backgroundColor: colors.whiteColor,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'stretch',
  },

};

export default DxImageContent;
