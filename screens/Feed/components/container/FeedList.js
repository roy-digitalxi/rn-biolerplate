import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content } from 'native-base';
import { View, Text, Dimensions } from 'react-native';

// redux
import { connect } from 'react-redux';
import actions from '../../actions';
import channelActions from '../../../Channel/actions';

// constants
import * as colors from '../../../../styles/variables';
import SpinnerLoader from '../../../../components/DxSpinner';

// components
import { DxCard } from '../../../../components';

const styles = {
  titleContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
  },
  iconStyle: {
    fontSize: 18,
    paddingLeft: 6,
    paddingRight: 6,
  },
  titleStyle: {
    color: colors.greyColor,
  },
  errorMessageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    height: Dimensions.get('window').height - 64 - 48,
  },
  errorMessageTextStyle: {
    fontSize: 18,
    color: colors.gray,
  },
};

class FeedList extends Component {
  static propTypes = {
    experiences: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    errors: PropTypes.object,
    postChannelSubscribeRequest: PropTypes.func,
    postStreamExperienceRequest: PropTypes.func,
    channel: PropTypes.object,
    handlePressCard: PropTypes.func,
  }

  // Show Channel Streams
  showChannelStreams = streams => streams
    .map(stream => <DxCard
                      key={stream.ExperienceStreamGUID}
                      experience={stream}
                      handlePressCard={(ExperienceStreamGUID, ExperienceGUID, experience) => this.handlePressCard(ExperienceStreamGUID, ExperienceGUID, experience)}
                    />)

  // move the data to parent component and do the actions
  handlePressCard = (ExperienceStreamGUID, ExperienceGUID, experience) => {
    // Updated isHardSubscribe
    this.handleHardSubscribe();

    // Open popup for consent
    this.props.handlePressCard(experience.Experience, ExperienceStreamGUID, ExperienceGUID);
  }

  // Update hard subscribe
  handleHardSubscribe = () => {
    const { postChannelSubscribeRequest, channel } = this.props;
    if (channel.IsHardInterest === 0) {
      postChannelSubscribeRequest('1231232131', channel.ExperienceChannelGUID, '1');
    }
  }

  render() {
    const {
      errorMessageTextStyle,
      errorMessageStyle,
    } = styles;

    const {
      experiences,
      isLoading,
      errors,
    } = this.props;

    return (

        <Content padder>
          {/* Check for api call errors first */}
          {
            errors.Confirmation === 'FAIL'
              && <View style={errorMessageStyle}>
                <Text style={errorMessageTextStyle}>
                  Unable to fetch channels. Please try again
                </Text>
              </View>
          }

          {/* Rendering cards */}
          {
            isLoading ? <SpinnerLoader /> : (
              this.showChannelStreams(experiences).length > 0
                ? this.showChannelStreams(experiences)
                : <View style={errorMessageStyle}>
                  <Text style={errorMessageTextStyle}>
                    No Streams found
                  </Text>
                </View>
            )
          }

        </Content>

    );
  }
}

const dispatchToProps = dispatch => ({
  dx_add_bookmark: feedId => dispatch(actions.dx_add_bookmark(feedId)),
  postChannelSubscribeRequest: (UserGUID, ExperienceChannelGUID, IsHardInterest) => dispatch(channelActions.postChannelSubscribeRequest(UserGUID, ExperienceChannelGUID, IsHardInterest)),
});

export default connect(null, dispatchToProps)(FeedList);
