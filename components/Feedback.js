import React, { Component } from 'react';
import { View } from 'react-native';

// Libraries
import StarRating from 'react-native-star-rating';

// styled-components
import { connect } from 'react-redux';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Textarea,
} from 'native-base';
import { FeedbackBtn } from '../styles/grid';

// redux
import actions from './actions';

// native base

class Feedback extends Component {
    static navigationOptions = {
      header: null,
    }

    state = {
      starCount: 0,
    };


    // StarRating onPress function
    onStarRatingPress(rating) {
      this.setState({
        starCount: rating,
      });
    }

    render() {
      const {
        cardItemStyle,
        topContainerStyle,
        subContainerStyle,
        tabContentStyle,
        buttonContainerStyle,
        btnTextStyle,
        ratingsContainerStyle,
        textAreaContainerStyle,
      } = styles;

      return (
            <Container style={{ backgroundColor: 'red' }}>
                <Content style={tabContentStyle}>
                    <Card>
                        <CardItem style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                            <Text style={{ fontSize: 9 }}>Question</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle)}>
                            <Text style={{ fontSize: 15 }}>Do you find this content useful?</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle, buttonContainerStyle)}>
                            <View>
                                <FeedbackBtn>
                                    <Text style={btnTextStyle}>No</Text>
                                </FeedbackBtn>
                            </View>
                            <View>
                                <FeedbackBtn>
                                    <Text style={btnTextStyle}>Yes</Text>
                                </FeedbackBtn>
                            </View>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                            <Text style={{ fontSize: 9 }}>Rating</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle)}>
                            <Text style={{ fontSize: 15 }}>How do you like this content experience?</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle, ratingsContainerStyle)}>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={this.state.starCount}
                                emptyStar={'ios-star-outline'}
                                fullStar={'ios-star'}
                                halfStar={'ios-star-half'}
                                iconSet={'Ionicons'}
                                selectedStar={rating => this.onStarRatingPress(rating)}
                            />
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                            <Text style={{ fontSize: 9 }}>Question</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle)}>
                            <Text style={{ fontSize: 15 }}>Do you want to save this content to your wallet for easy retrival?</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle, buttonContainerStyle)}>
                            <View>
                                <FeedbackBtn>
                                    <Text style={btnTextStyle}>No</Text>
                                </FeedbackBtn>
                            </View>
                            <View>
                                <FeedbackBtn>
                                    <Text style={btnTextStyle}>Yes</Text>
                                </FeedbackBtn>
                            </View>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                            <Text style={{ fontSize: 9 }}>Question</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle)}>
                            <Text style={{ fontSize: 15 }}>Please share your experience below</Text>
                        </CardItem>
                        <CardItem style={Object.assign({}, cardItemStyle, textAreaContainerStyle)}>
                            <Content>
                                <Textarea rowSpan={3} bordered placeholder="Type something ..." />
                            </Content>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
      );
    }
}

const styles = {
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
  tabContentStyle: {
    backgroundColor: '#F0F7FF',
  },
  btnTextStyle: {
    lineHeight: 27,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  ratingsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textAreaContainerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 10,
  },
};

const stateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const dispatchToProps = dispatch => ({
  logout: () => dispatch({ type: global_constants.LOGOUT }),
});

export default connect(stateToProps, dispatchToProps)(Feedback);
