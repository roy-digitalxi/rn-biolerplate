import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import { Container } from 'native-base';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
// component
import DiscoveryCard from '../presentation/DiscoveryCard';

// Modal
import modalActions from '../../../../actions/Modal';

// actions
import actions from '../../actions';

import SpinnerLoader from '../../../../components/DxSpinner';
import * as colors from '../../../../styles/variables';

const styles = {
  contentWrapperStyle: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  contentContainerStyle: {
    marginTop: 6,
    paddingBottom: 20,
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

const mapStateToProps = state => ({
  channel: state.channel,
  modal: state.modal,
});

class Discovery extends Component {
    static propTypes = {
      postChannelListRequest: PropTypes.func.isRequired,
      postChannelSubscribeRequest: PropTypes.func.isRequired,
      closeModal: PropTypes.func.isRequired,
      openModal: PropTypes.func.isRequired,
      modal: PropTypes.object.isRequired,
      channels: PropTypes.object,
      navigation: PropTypes.object,
      channel: PropTypes.object,
      modalOpen: PropTypes.bool,
    }

    state={
      errors: {},
    }

    static getDerivedStateFromProps(nextProps) {
      if (nextProps.channel.errors) {
        return {
          errors: nextProps.channel.errors,
        };
      }
      return false;
    }

    componentDidMount() {
      this.handlePostChannelList();
    }


    handlePostChannelList = () => {
      // Static data
      const UserGUID = '1231232131';
      const pageData = {
        UserGUID,
        Limit: '-1',
        Offset: '0',
      };

      this.props.postChannelListRequest(pageData);
    }

    handleOpenModal = () => {
      this.props.openModal();
    }

    // Show public live channels
    showPublicChannels = (channels) => {
      const {
        modalOpen,
        navigation,
        closeModal,
        postChannelSubscribeRequest,
      } = this.props;
      return channels
        .map(channel => <DiscoveryCard
                          key={channel.ExperienceChannelGUID}
                          handleSubscribe={
                            () => postChannelSubscribeRequest('1231232131', channel.ExperienceChannelGUID)
                          }
                          UserGUID='1231232131'
                          channelType={channel.ChannelType}
                          isSubscribed={channel.IsSubscribed}
                          channelName={channel.ChannelName}
                          channelPercentage="0.25"
                          channelViews="14000"
                          channelLastView="2018-06-02 19:00:00"
                          channelColor = {channel.ChannelColor}
                          navigation = {
                              () => navigation.navigate('Feed', {
                                channel,
                                UserGUID: '1231232131',
                              })}
                          openModal={this.handleOpenModal}
                          modalOpen={modalOpen}
                          closeModal={() => closeModal()}
                          channelDescription={channel.ChannelDescription}
                        />);
    }

    render() {
      const {
        contentContainerStyle,
        contentWrapperStyle,
        errorMessageStyle,
        errorMessageTextStyle,
      } = styles;

      const { channel: { channels, isLoading } } = this.props;

      const { errors } = this.state;

      return (
            <Container style={contentWrapperStyle}>
                <ScrollView contentContainerStyle={contentContainerStyle}>

                  {/* Check for api call errors first */}
                  {
                    errors.Confirmation === 'FAIL'
                      && <View style={errorMessageStyle}>
                        <Text style={errorMessageTextStyle}>
                          Unable to fetch channels. Please try again
                        </Text>
                      </View>
                  }

                  {/* Rendering discovery cards */}
                  {
                    isLoading ? <SpinnerLoader />
                      : (this.showPublicChannels(channels).length > 0
                        ? this.showPublicChannels(channels)
                        : <View style={errorMessageStyle}>
                            <Text style={errorMessageTextStyle}>
                              No channels found
                            </Text>
                          </View>
                      )

                  }

                </ScrollView>
            </Container>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  postChannelListRequest: data => dispatch(actions.postChannelListRequest(data)),
  postChannelSubscribeRequest: (UserGUID, ExperienceChannelGUID) => dispatch(actions.postChannelSubscribeRequest(UserGUID, ExperienceChannelGUID)),
  closeModal: () => dispatch(modalActions.closeModal()),
  openModal: () => dispatch(modalActions.openModal()),
});

export default compose(connect(mapStateToProps, mapDispatchToProps), withNavigation)(Discovery);
