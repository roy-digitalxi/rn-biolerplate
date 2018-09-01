import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  CardItem,
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
    paddingLeft: 5,
    paddingRight: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  detailLableStyle: {
    fontFamily: fonts.light,
    padding: 6,
    color: '#FFFFFF',
    fontSize: 14,
  },
};


const ImageCard = ({ experienceCard, handlePressCard }) => {
  // Filter Image
  const filterImage = experienceCard.Settings;
  return (
    <CardItem button style={styles.cardItemStyle} onPress={() => handlePressCard()}>
      <View style={styles.contentContainerStyle}>
        <View style={Object.assign({}, styles.imageWrapperStyle, { flex: 1 })}>
          {
           filterImage && <Image style={styles.imageStyle} source={{ uri: `https://api.publishxi.com/picture?ImageGUID=${filterImage[0].Value}` }} />
         }
        </View>
      </View>
    </CardItem>
  );
};

ImageCard.propTypes = {
  experienceCard: PropTypes.object,
  handlePressCard: PropTypes.func,
};

export default ImageCard;
