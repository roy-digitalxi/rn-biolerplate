/* eslint-disable */

import React, { Component } from 'react';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import { View, Text, WebView, Dimensions, TouchableOpacity, Image } from 'react-native';
// Redux
import { connect } from 'react-redux';
import actions from '../../actions';
import modalActions from '../../../../actions/Modal';
import homeActions from '../../../Home/actions';
import ImageZoom from 'react-native-image-pan-zoom';

// components
import { DxContainer } from '../../../../styles/grid';
import HeaderNavigator from '../container/HeaderNavigator';
import FeedList from '../container/FeedList';
import * as colors from '../../../../styles/variables';

import DxModal from '../../../../components/DxModal';
import DownloadModal from '../presentation/DownloadModal';

// Helpers
import { imageBaseLink, fileBaseLink } from '../../../../helpers';

const styles = {
  contentWrapperStyle: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  webViewStyle: {
    width: Dimensions.get('window').width,
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
    height: '100%'
  }
};

class FeedListPage extends Component {
   static propTypes = {
     goBack: PropTypes.func,
     channel: PropTypes.object,
     UserGUID: PropTypes.string,
     postStreamExperienceRequest: PropTypes.func,
     postStreamCardContentRequest: PropTypes.func,
     ExperienceChannelGUID: PropTypes.string,
     expereinces: PropTypes.array,
     feed: PropTypes.object,
     openModal: PropTypes.func,
     closeModal: PropTypes.func,
     modal: PropTypes.object,
     modalOpen: PropTypes.bool,
     addFeedToDownloadRequest: PropTypes.func,
   };

   state={
     showPopup: false,
     openCardPopup: false,
     data: {},
     errors: {},
   }

   static getDerivedStateFromProps(nextProps) {
     if (nextProps.feed.errors) {
       return {
         errors: nextProps.feed.errors,
       };
     }
     return false;
   }

   componentDidMount = () => {
     this.handleChannelExperiences();
   }

  handleChannelExperiences = () => {
    const { ExperienceChannelGUID } = this.props.channel;
    const data = {
      Limit: '-1',
      Offset: '0',
      Extra: {
        ExperienceChannelGUID,
      },
    };
    this.props.postStreamExperienceRequest(data);
  }
  
  
  handlePressCard = (experience, ExperienceStreamGUID, ExperienceGUID) => {
    
    // To check the file type (Html/Image)
    
    // const experienceCardProps = experience.ExperienceCardProperties || [];
    // const experiencePageProps = experience.ExperiencePageProperties || [];

    // let fileLink;
    // if (experience.ExperienceType === '0' && experienceCardProps.length > 0 && experienceCardProps[0].Type === 'IMAGE') {
    //   // Structure the link
    //   fileLink = `${imageBaseLink}${experienceCardProps[0].Value}`;
    //   console.log("Filelink", fileLink);
    // } else if (experience.ExperienceType === '1' && experiencePageProps.length > 0 && experiencePageProps[0].Type === 'FILE') {
    //   fileLink = `${fileBaseLink}${experiencePageProps[0].Value}.html`;
    //   // Make sure to do a for loop to download all the files
    // }

    // Download the file using the experienceStreamGUID as a name
    // Add to the downloads state in explore
    // const userGUID = '1231232131';
    // const data = {
    //   fileName: ExperienceStreamGUID,
    //   fileType: experienceCardProps[0].Type || experiencePageProps[0].Type,
    //   folderName: 'downloadFeeds',
    //   fileLink,
    //   userGUID,
    // };
    // this.props.addFeedToDownloadRequest(data);

    //Handle feed Download and popup
    this.handleFeedDownload();

    // Get the Mobile View
    this.handleStreamContent(ExperienceStreamGUID, ExperienceGUID, experience);
  }

  //Handle the feed download and popup
  handleFeedDownload = () => {

    //Open Popup
    //  this.setState({
    //    showPopup: true,
    //  });

    //  this.props.openModal();
  }

  // Check the experienceType annd then go to mobile view
  handleStreamContent = async (ExperienceStreamGUID, ExperienceGUID, experience) => {
    
    const { postStreamCardContentRequest } = this.props;

    // If page properties array has length as well as experience type 1 do the action and redirect
    (experience.ExperienceType === '1' && experience.ExperiencePageProperties.length) && 
    (
      postStreamCardContentRequest({ ExperienceStreamGUID})
    );

    // Otherwise check the filetype between image/Video for the card
  
    (experience.ExperienceType === '0' && experience.ExperienceCard.Type === 'IMAGE') 
      ? ( this.props.openModal(), 
          this.setState({ openCardPopup: true, data:{type: 'IMAGE', link: experience.ExperienceCardProperties[0].Value} })
        )
      : null;

    (experience.ExperienceType === '0' && experience.ExperienceCard.Type === 'VIDEO') 
      ? ( this.props.openModal(), 
          this.setState({ openCardPopup: true,  data: {type: 'VIDEO',
          link: experience.ExperienceCard.Content} })
        )
      : null;

  }

// handling popup for the only image/video cards
  renderPopupForCards = (data) => {
    
    return <DxModal
        transparent={false}
        modalOpen={this.props.modal.modalOpen}
        closeModal={ () => this.props.closeModal()}>
        <View style={styles.webViewContainerStyle}>
              <TouchableOpacity style={styles.closeStyle} onPress={() => this.props.closeModal()}><Text style={styles.closeButtonStyle}>Close  X</Text></TouchableOpacity>
              {
                data.type === 'IMAGE' ? 
                  <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth = {
                         Dimensions.get('window').width
                       }
                       imageHeight={Dimensions.get('window').height}>
                    <Image
                      source={{ uri: `${imageBaseLink}${data.link}` }}
                      style={styles.popupImageStyle}
                    />
                  </ImageZoom>
                  : data.type === 'VIDEO' ? 
                  <View style={{ height: 350 }}>
                    <WebView
                      source={{ uri: `${data.link}` }}
                      style={styles.videoStyle}
                    />
                  </View>
                   : null
              }
            </View>
      </DxModal>
  }


  render() {
    const {
      goBack, channel, feed: { experiences, isLoading }, modal: { modalOpen }, closeModal,
    } = this.props;
    const { errors, showPopup, openCardPopup, data } = this.state;

    return (
      <DxContainer>
      {/* Download Popup */}
        { showPopup && <DxModal
            canClose={false}
            modalOpen={modalOpen}
            closeModal={ () => closeModal()}>
            <DownloadModal />
          </DxModal>
        }
        
      {/* Image/Videocard popup */}
        {
          openCardPopup && this.renderPopupForCards(data)
        }
        <HeaderNavigator
            isSearchIcon={true}
            isAddIcon={true}
            isBackIcon={true}
            goBack={() => goBack()}
            channel={channel}
            experienceCount={experiences.length}
        />
        <Container style={styles.contentWrapperStyle}>
            <FeedList channel={channel} experiences={experiences} isLoading={isLoading} errors={errors} handlePressCard={this.handlePressCard} />
        </Container>
      </DxContainer>
    );
  }
}

const mapStateToProps = state => ({
  feed: state.feed,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  getFeedElement: (document) => dispatch(actions.getFeedElement(document)),
  postStreamCardContentRequest: data => dispatch(actions.postStreamCardContentRequest(data)),
  postStreamExperienceRequest: data => dispatch(actions.postStreamExperienceRequest(data)),
  closeModal: () => dispatch(modalActions.closeModal()),
  openModal: () => dispatch(modalActions.openModal()),
  addFeedToDownloadRequest: data => dispatch(homeActions.addFeedToDownloadRequest(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedListPage);
