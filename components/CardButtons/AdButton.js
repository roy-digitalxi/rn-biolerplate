import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text, Image,
} from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import { imageBaseLink } from '../../helpers';

const styles = {
  container: {
    flex: 1,
    minHeight: 50,
    height: 150,
    alignItems: 'center',
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonWrapperStyle: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'space-between',
  },
  buttonTextStyle: {
    fontSize: 16,
  },
  buttonIconStyle: {
    fontSize: 24,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  tagStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 5,
  },
};

class DxAddButton extends Component {
  static propTypes = {
    btnContent: PropTypes.string,
    adBtnImg: PropTypes.string,
    adBtnColor: PropTypes.string,
    section: PropTypes.object,
    handleNavigate: PropTypes.func,
    isCompleted: PropTypes.bool,
    isRecommended: PropTypes.bool,
  };

  handleNavigate = (section) => {
    this.props.handleNavigate(section);
  }

  render() {
    const {
      adBtnImg, adBtnColor, btnContent, section, isCompleted, isRecommended,
    } = this.props;
    console.log('Adbutton: ', isRecommended, isCompleted);
    const {
      container, buttonIconStyle, buttonStyle, buttonTextStyle, imageStyle, buttonWrapperStyle, tagStyle,
    } = styles;

    // Colos change for recommended and is complete
    let leftElement = <View />;
    if (isCompleted) {
      leftElement = <View style={Object.assign({}, tagStyle, { backgroundColor: '#5BB99E' })} />;
    } else if (isRecommended) {
      leftElement = <View style={Object.assign({}, tagStyle, { backgroundColor: '#000000' })} />;
    }


    return (
      <View style={container}>
        <Image style={imageStyle} source={{ uri: `${imageBaseLink}${adBtnImg}` }} />
        <View style={buttonWrapperStyle}>
          { leftElement }
          <TouchableOpacity style={buttonStyle} onPress={() => this.handleNavigate(section)}>
            <Text style={[buttonTextStyle, { color: adBtnColor || '#fff' }]}>{btnContent}</Text>
            <Icon style={[buttonIconStyle, { color: adBtnColor || '#fff' }]} name="ios-arrow-forward-outline" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DxAddButton;
