import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

// constants
import colors from '../constants/colors';

class DxTextContent extends Component {
  render() {
    const {
      container,
      text,
    } = styles;

    return (
            <View style={container}>
                <Text style={text}>{this.props.content}</Text>
            </View>
    );
  }
}

const styles = {

  container: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: colors.whiteColor,
  },

  text: {
    textAlign: 'justify',
    lineHeight: 24,
  },
};

export default DxTextContent;
