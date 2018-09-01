import React, { Component } from 'react';
import {
  View, TouchableOpacity, Text,
} from 'react-native';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    minHeight: 60,
    justifyContent: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonTextStyle: {
    fontSize: 16,
  },
  buttonIconStyle: {
    fontSize: 24,
  },
  tagStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 5,
  },
};

class DxAddButton2 extends Component {
  static propTypes = {
    btnContent: PropTypes.string,
    adBtnBgColor: PropTypes.string,
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
      adBtnBgColor, adBtnColor, btnContent, section, isCompleted, isRecommended,
    } = this.props;
    console.log('Adbutton2: ', isRecommended, isCompleted);
    const {
      container, buttonIconStyle, buttonStyle, buttonTextStyle, tagStyle,
    } = styles;

    // Colos change for recommended and is complete
    let leftElement = <View />;
    if (isCompleted) {
      leftElement = <View style={Object.assign({}, tagStyle, { backgroundColor: '#5BB99E' })} />;
    } else if (isRecommended) {
      leftElement = <View style={Object.assign({}, tagStyle, { backgroundColor: '#000000' })} />;
    }

    return (
      <View style={[container, { backgroundColor: adBtnBgColor || '#fff' }]}>
        { leftElement }
        <TouchableOpacity style={buttonStyle} onPress={() => this.handleNavigate(section)}>
          <Text style={[buttonTextStyle, { color: adBtnColor || '#fff' }]}>{btnContent}</Text>
          <Icon style={[buttonIconStyle, { color: adBtnColor || '#fff' }]} name="ios-arrow-forward-outline" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default DxAddButton2;
