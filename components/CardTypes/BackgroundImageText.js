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
    backgroundColor: '#000',
  },
  imageWrapperStyle: {},
  imageStyle: {
    height: '100%',
    width: '100%',
    opacity: 0.7,
  },
  detailWrapperStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailLableStyle: {
    fontFamily: fonts.light,
    padding: 6,
    color: '#FFFFFF',
    fontSize: 14,
  },
};


const BackgroundImageText = ({ experienceCard, handlePressCard }) => {
  // Filter Image
  const filterImage = experienceCard.Settings.filter(data => data.Type === 'IMAGE');

  // Filter background color
  const filterColor = experienceCard.Settings.filter(data => data.Type === 'COLOR');

  return (
    <CardItem button style={styles.cardItemStyle} onPress={() => handlePressCard()}>
      <View style={styles.contentContainerStyle}>

        <View style={Object.assign({}, styles.imageWrapperStyle, { flex: 1 })}>

         {
           filterImage && <Image style={styles.imageStyle} source={{ uri: `https://api.publishxi.com/picture?ImageGUID=${filterImage[0].Value}` }} />
         }

          <View style={Object.assign({}, styles.detailWrapperStyle)}>
            <Text style={[styles.detailLableStyle, filterColor && { color: filterColor[0].Default }]}>
              {experienceCard.Content}
            </Text>
          </View>
        </View>

      </View>
    </CardItem>
  );
};

BackgroundImageText.propTypes = {
  experienceCard: PropTypes.object,
  handlePressCard: PropTypes.func,
};

export default BackgroundImageText;
