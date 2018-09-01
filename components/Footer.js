import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// libraries
import {
  Icon,
} from 'native-base';

class Footer extends Component {
    handleBtnPress = () => {
      this.props.handleBtnPress();
    }

    render() {
      const {
        footerContainerStyle,
        containerStyle,
        contentContainerStyle,

        labelContainerStyle,
        titleStyle,
        subtitleStyle,
        iconContainerStyle,
        iconStyle,
      } = styles;

      const {
        title,
        subtitle,
      } = this.props;

      return (
            <View style={footerContainerStyle}>
                <TouchableOpacity
                    onPress={() => this.handleBtnPress()}
                    style={Object.assign({}, containerStyle)}>
                    <View style={iconContainerStyle}></View>
                    <View style={contentContainerStyle}>
                        <View style={labelContainerStyle}>
                            <Text style={titleStyle}>{title}</Text>
                            <Text style={subtitleStyle}>{subtitle}</Text>
                        </View>
                    </View>
                    <View style={iconContainerStyle}>
                        {
                            this.props.hasArrow
                              ? (
                                    <Icon
                                        style={iconStyle}
                                        name="ios-arrow-forward-outline" />
                              )
                              : null
                        }
                    </View>
                </TouchableOpacity>
            </View>
      );
    }
}

const styles = {

  footerContainerStyle: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#F2F2F2',
    backgroundColor: '#FFFFFF',
  },
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
  },
  contentContainerStyle: {
    flex: 8,
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
  },
  labelContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {

  },
  subtitleStyle: {
    color: '#C3C9CE',
  },
  iconContainerStyle: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 12,
  },
  iconStyle: {
    fontSize: 30,
  },


};

export default Footer;
