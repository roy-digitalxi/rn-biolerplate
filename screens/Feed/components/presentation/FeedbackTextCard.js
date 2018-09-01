import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Content,
  Card,
  CardItem,
  Text,
  Textarea,
  Form,
} from 'native-base';
import * as colors from '../../../../styles/variables';
import * as fonts from '../../../../styles/fonts';

// Libraries

class FeedbackTextCard extends Component {
    static propTypes = {
      handleText: PropTypes.func,
      question: PropTypes.string,
    }

    handleOnChange = (text) => {
      this.props.handleText(text);
    }

    handlePress = () => {}

    render() {
      const {
        cardItemStyle,
        topContainerStyle,
        subContainerStyle,
        textAreaContainerStyle,
        labelTextStyle,
        subLabelTextStyle,
        cardStyle,
      } = styles;


      return (
            <Card style={cardStyle}>
                <CardItem
                    style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                    <Text
                        style={subLabelTextStyle}>Question</Text>
                </CardItem>
                <CardItem
                    style={Object.assign({}, cardItemStyle, subContainerStyle)}>
                    <Text
                        style={labelTextStyle}
                    >{this.props.question}</Text>
                </CardItem>
                <CardItem
                    style={Object.assign({}, cardItemStyle, textAreaContainerStyle)}>
                    <Content>
                      <Form>
                        <Textarea style={{ padding: 6, fontSize: 16 }} rowSpan={3} onChangeText={text => this.handleOnChange(text)} bordered placeholder="Type something.." />
                      </Form>
                    </Content>
                </CardItem>
            </Card>
      );
    }
}

const styles = {
  cardStyle: {
    borderColor: 'transparent',
    shadowColor: colors.btnBlue,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 9,
    paddingBottom: 4,
  },
  cardItemStyle: {
    paddingLeft: 9,
    paddingRight: 9,
  },
  topContainerStyle: {
    flexDirection: 'row',
  },
  subContainerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
  },
  textAreaContainerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
  },
  labelTextStyle: {
    fontSize: 15,
  },
  subLabelTextStyle: {
    fontSize: 12,
    color: colors.gray,
  },
};

export default FeedbackTextCard;
