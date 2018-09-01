import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import {
  Card,
  CardItem,
  Text,
} from 'native-base';
import { FeedbackBtn } from '../../../../styles/grid';

// Constants
import * as colors from '../../../../styles/variables';

class FeedbackCard extends Component {
    static propTypes = {
      handleBtnClick: PropTypes.func,
    }

    render() {
      const {
        cardItemStyle,
        topContainerStyle,
        subContainerStyle,
        buttonContainerStyle,
        btnTextStyle,
        labelTextStyle,
        subLabelTextStyle,
        activeColor,
        inactiveColor,
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
                        style={labelTextStyle}>{this.props.question}</Text>
                </CardItem>
                <CardItem
                    style={Object.assign({}, cardItemStyle, buttonContainerStyle)}>
                    <View>
                        <FeedbackBtn
                            onPress={() => this.props.handleBtnClick(false)}
                            style={!this.props.isTrue ? activeColor : inactiveColor}>
                            <Text
                                style={btnTextStyle}>No</Text>
                        </FeedbackBtn>
                    </View>
                    <View>
                        <FeedbackBtn
                            onPress={() => this.props.handleBtnClick(true)}
                            style={this.props.isTrue ? activeColor : inactiveColor}>
                            <Text
                                style={btnTextStyle}>Yes</Text>
                        </FeedbackBtn>
                    </View>
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
  buttonContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnTextStyle: {
    lineHeight: 27,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  labelTextStyle: {
    fontSize: 15,
  },
  subLabelTextStyle: {
    fontSize: 12,
    color: colors.gray,
  },
  activeColor: {
    backgroundColor: colors.btnBlue,
  },
  inactiveColor: {
    backgroundColor: colors.gray,
  },
};

export default FeedbackCard;
