import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Libraries
import StarRating from 'react-native-star-rating';
import {
  Card,
  CardItem,
  Text,
} from 'native-base';
import * as colors from '../../../../styles/variables';

class FeedbackStar extends Component {
    static propTypes = {
      onStarRatingPress: PropTypes.func,
    }

    onStarRatingPress = (rating) => {
      this.props.onStarRatingPress(rating);
    }

    render() {
      const {
        cardItemStyle,
        topContainerStyle,
        subContainerStyle,
        ratingsContainerStyle,
        labelTextStyle,
        subLabelTextStyle,
        cardStyle,
      } = styles;

      return (
            <Card style={cardStyle}>
                <CardItem
                    style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                    <Text
                        style={subLabelTextStyle}>Rating</Text>
                </CardItem>
                <CardItem
                    style={Object.assign({}, cardItemStyle, subContainerStyle)}>
                    <Text
                        style={labelTextStyle}>{this.props.question}</Text>
                </CardItem>
                <CardItem
                    style={Object.assign({}, cardItemStyle, subContainerStyle, ratingsContainerStyle)}>
                    <StarRating
                        disabled={false}
                        style={{ color: colors.btnBlue }}
                        maxStars={5}
                        rating={this.props.starCount}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        halfStarEnabled={true}
                        iconSet={'Ionicons'}
                        selectedStar={rating => this.onStarRatingPress(rating)}
                    />
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
  ratingsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  labelTextStyle: {
    fontSize: 15,
  },
  subLabelTextStyle: {
    fontSize: 12,
    color: colors.gray,
  },
};

export default FeedbackStar;
