import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import {
  Container, Content, Button, Body, Text,
} from 'native-base';

// colors
import * as colors from '../../styles/variables';

const styles = {
  contentStyle: {
    backgroundColor: colors.bgColor,
    flex: 1,
  },
  bodyStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  boatImage: {
    width: 250,
    height: 250,
    marginBottom: 30,
  },
  buttonText: {
    letterSpacing: 2,
    fontSize: 18,
  },
};
class FeedEmptyPage extends Component {
  render() {
    const {
      boatImage,
      buttonText,
      button,
      contentStyle,
      bodyStyle,
    } = styles;

    return (
          <Container>
            <Content padder contentContainerStyle={contentStyle}>
              <Body style={bodyStyle}>
                <Image style={boatImage} source={require('../../assets/images/Icons/sailboat.png')} />
                <Button block rounded info style={button} onPress={this.props.explorePage}><Text style={buttonText}>Discover Content</Text></Button>
              </Body>
            </Content>
          </Container>
    );
  }
}

export default FeedEmptyPage;
