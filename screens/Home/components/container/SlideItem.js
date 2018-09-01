import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, Image, WebView, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { compose } from 'redux';
import ImageZoom from 'react-native-image-pan-zoom';
import DxCard from '../../../../components/DxCard';
import modalActions from '../../../../actions/Modal';
import DxModal from '../../../../components/DxModal';
import { imageBaseLink } from '../../../../helpers';

// Actions
import channelActions from '../../../Channel/actions';
import feedActions from '../../../Feed/actions';

const styles = {
  slideStyle: {
    right: 10,
  },
  webViewStyle: {
    width: Dimensions.get('window').width * 0.8,
    height: '100%',
  },
  webViewContainerStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeStyle: {
    alignSelf: 'flex-end',
  },
  closeButtonStyle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    paddingTop: 20,
    paddingRight: 20,
  },
  popupImageStyle: {
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    height: '100%',
  },
  videoStyle: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
};

class SlideItem extends Component {
  static propTypes = {
    slide: PropTypes.object,
    item: PropTypes.object,
    postChannelSubscribeRequest: PropTypes.func,
    postStreamCardContentRequest: PropTypes.func,
    navigate: PropTypes.func,
    navigation: PropTypes.object,
    openModal: PropTypes.func,
    closeModal: PropTypes.func,
    modal: PropTypes.object,
    modalOpen: PropTypes.bool,
  };

  state = {
    openCardPopup: false,
    data: {},
  }

  handlePressCard = (ExperienceStreamGUID, ExperienceGUID) => {
    const { postStreamCardContentRequest, slide: { item: { Experience } } } = this.props;

    // Updated isHardSubscribe
    // this.handleHardSubscribe();

    // Open Mobile View api endpoint
    (Experience.ExperienceType === '1' && Experience.ExperiencePageProperties.length)
    && (
      postStreamCardContentRequest({
        ExperienceStreamGUID,
      })
    );

    // Otherwise check the filetype between image/Video for the card

    (Experience.ExperienceType === '0' && Experience.ExperienceCard.Type === 'IMAGE')
      ? (this.props.openModal(),
      this.setState({ openCardPopup: true, data: { type: 'IMAGE', link: Experience.ExperienceCardProperties[0].Value } })
      )
      : null;

    (Experience.ExperienceType === '0' && Experience.ExperienceCard.Type === 'VIDEO')
      ? (this.props.openModal(),
      this.setState({
        openCardPopup: true,
        data: {
          type: 'VIDEO',
          link: Experience.ExperienceCard.Content,
        },
      })
      )
      : null;
  }

  // Update hard subscribe
  // handleHardSubscribe = () => {
  //   const { postChannelSubscribeRequest } = this.props;
  //   if (channel.IsHardInterest === 0) {
  //     postChannelSubscribeRequest('1231232131', channel.ExperienceChannelGUID, '1');
  //   }
  // }
  handleChannelNameClick = (channel) => {
    this.props.navigation.navigate('Feed', {
      channel,
      UserGUID: '1231232131',
    });
  }

  // handling popup for the only image/video cards
  renderPopupForCards = data => <DxModal
        transparent={false}
        modalOpen={this.props.modal.modalOpen}
        closeModal={ () => this.props.closeModal()}>
        <View style={styles.webViewContainerStyle}>
              <TouchableOpacity style={styles.closeStyle} onPress={() => this.props.closeModal()}><Text style={styles.closeButtonStyle}>Close  X</Text></TouchableOpacity>
              {
                data.type === 'IMAGE'
                  ? <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth = {
                         Dimensions.get('window').width
                       }
                       imageHeight={Dimensions.get('window').height}>
                  <Image
                    source={{ uri: `${imageBaseLink}${data.link}` }}
                    style={styles.popupImageStyle}
                  /></ImageZoom> : data.type === 'VIDEO'
                    ? <View style={{ height: 350 }}>
                    <WebView
                      source={{ uri: `${data.link}` }}
                      style={styles.videoStyle}
                    />
                  </View>
                    : null
              }
            </View>
      </DxModal>

  render() {
    const { slide: { item } } = this.props;
    const { data, openCardPopup } = this.state;

    return (
      <View style={styles.slideStyle}>
       { /* Image/Videocard popup */ } {
         openCardPopup && this.renderPopupForCards(data)
       }
        <DxCard
          experience={item}
          channelGUID={item.ExperienceChannelGUID}
          channelColor={item.ChannelColor}
          channelName={item.ChannelName}
          createdAt={item.CreatedAt}
          description={item.Experience.ExperienceCard.Content}
          handlePressCard={
            (ExperienceStreamGUID, ExperienceGUID) => this.handlePressCard(ExperienceStreamGUID, ExperienceGUID)
          }
          handleChannelNameClick = {
            channel => this.handleChannelNameClick(channel)
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const dispatchToProps = dispatch => ({
  postChannelSubscribeRequest: (UserGUID, ExperienceChannelGUID, IsHardInterest) => dispatch(channelActions.postChannelSubscribeRequest(UserGUID, ExperienceChannelGUID, IsHardInterest)),
  postStreamCardContentRequest: data => dispatch(feedActions.postStreamCardContentRequest(data)),
  closeModal: () => dispatch(modalActions.closeModal()),
  openModal: () => dispatch(modalActions.openModal()),
});

export default compose(connect(mapStateToProps, dispatchToProps), withNavigation)(SlideItem);
