import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  CardItem, Text,
} from 'native-base';
import * as fonts from '../../styles/fonts';

// Libraries

const styles = {
  topContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  contentContainerStyle: {
    marginTop: -10,
    height: 90,
    width: '100%',
    flexDirection: 'row',
  },
  imageWrapperStyle: {},
  imageStyle: {
    height: '100%',
    width: '100%',
  },
  detailWrapperStyle: {
    backgroundColor: '#55AADD',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
    paddingLeft: 5,
    paddingRight: 5,
  },
  detailLableStyle: {
    fontFamily: fonts.light,
    padding: 6,
    color: '#FFFFFF',
    fontSize: 14,
  },
};


const BackgroundText = ({ experienceCard, handlePressCard }) => {
  // Filter background color
  const filterBackgroundColor = experienceCard.Settings.filter(data => data.Type === 'BACKGROUND_COLOR');

  // Filter Color
  const filterColor = experienceCard.Settings.filter(data => data.Type === 'COLOR');
  return (
    <CardItem button style={styles.cardItemStyle} onPress={() => handlePressCard()}>
      <View style={styles.contentContainerStyle}>
        <View style={
          [Object.assign({}, styles.detailWrapperStyle), filterBackgroundColor && {
            backgroundColor: filterBackgroundColor[0].Default,
          }]}>
          <Text style={[styles.detailLableStyle, filterColor && { color: filterColor[0].Default }]}>
            {experienceCard.Content}
          </Text>
        </View>
      </View>
    </CardItem>
  );
};

BackgroundText.propTypes = {
  experienceCard: PropTypes.object,
  handlePressCard: PropTypes.func,
};

export default BackgroundText;
