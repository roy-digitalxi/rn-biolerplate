import React, { Component } from 'react';
import {
  ScrollView,
  Dimensions,
} from 'react-native';

// Components
import {
  Content, Button, Text,
} from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../actions';
import FeedbackCard from '../presentation/FeedbackCard';
import FeedbackStar from '../presentation/FeedbackStar';
import FeedbackTextCard from '../presentation/FeedbackTextCard';
import * as colors from '../../../../styles/variables';

// Libraries

class Feedback extends Component {
  static propTypes = {
    postFeedback: PropTypes.func,
  }

    state = {
      starCount: 3,
      q1: true,
      q3: false,
      comments: '',
    };

    handleBtnClick = (bol, index) => {
      if (index == 1) {
        this.setState({
          q1: bol,
        });
      } else {
        this.setState({
          q3: bol,
        });
      }
    }

    handleStarRatingPress = (starCount) => {
      this.setState({
        starCount,
      });
    }

    handleText = (text) => {
      this.setState({
        comments: text,
      });
    }

    handleSubmit = () => {
      const {
        starCount, q1, q3, comments,
      } = this.state;

      const data = {
        stars: starCount,
        q1,
        q3,
        comments,
        UserGUID: '1231232131',
      };
      this.props.postFeedback(data);

      // Clears the form
      this.setState({
        starCount: 3,
        q1: true,
        q3: false,
        comments: '',
      });
    }

    render() {
      const {
        contentContainerStyle, button, buttonText,
      } = styles;

      return (
            <ScrollView
                contentContainerStyle={contentContainerStyle}>
                <Content>
                    <FeedbackCard
                        question="Did you find this content useful?"
                        isTrue={this.state.q1}
                        handleBtnClick={bol => this.handleBtnClick(bol, 1)}
                    />
                    <FeedbackStar
                        question="How do you like this content experience?"
                        onStarRatingPress={starCount => this.handleStarRatingPress(starCount)}
                        starCount={this.state.starCount}
                    />
                    <FeedbackCard
                        question="Do you want to save this content to your wallet for easy retrival?"
                        isTrue={this.state.q3}
                        handleBtnClick={bol => this.handleBtnClick(bol, 3)}
                    />
                    <FeedbackTextCard
                        question="Please share your experience below"
                        handleText={text => this.handleText(text)} />

                    <Button block rounded info onPress={this.handleSubmit} style={{ flex: 1, alignItems: 'center' }}><Text style={buttonText}>Submit Feedback</Text></Button>

                </Content>
            </ScrollView>
      );
    }
}

const styles = {
  contentContainerStyle: {
    backgroundColor: colors.bgColor,
    paddingTop: 9,
    paddingBottom: 80,
  },
  buttonText: {
    letterSpacing: 2,
    fontSize: 18,
  },
};

const mapDispatchToProps = dispatch => ({
  postFeedback: data => dispatch(actions.postFeedback(data)),
});

export default connect(null, mapDispatchToProps)(Feedback);
