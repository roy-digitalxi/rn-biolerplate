import React, { Component } from 'react';
import {
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import ImageZoom from 'react-native-image-pan-zoom';
import { connect } from 'react-redux';
import DxModal from './DxModal';
// constants
import colors from '../constants/colors';
import modalActions from '../actions/Modal';


class DxImageContent extends Component {
  static propTypes = {
    source: PropTypes.string,
    closeModal: PropTypes.func,
    openModal: PropTypes.func,
    modal: PropTypes.object,
    modalOpen: PropTypes.bool,
  };

  state = {
    openImagePopup: false,
  };

   handlePopup = () => {
     this.props.openModal();
     this.setState({
       openImagePopup: true,
     });
   };

   render() {
     const {
       container,
       image,
       webViewContainerStyle,
       closeStyle,
       closeButtonStyle,
     } = styles;

     const { source, modal: { modalOpen }, closeModal } = this.props;

     const { openImagePopup } = this.state;

     return (
      <View style={container}>
    {/* Popup */}
      { openImagePopup && <DxModal
        transparent={false}
        modalOpen={modalOpen}
        closeModal={ () => closeModal()}>
        <View style={webViewContainerStyle}>
              <TouchableOpacity style={closeStyle} onPress={() => closeModal()}>
                <Text style={closeButtonStyle}>Close  X</Text>
              </TouchableOpacity>
              {
                <ImageZoom
                  cropWidth={Dimensions.get('window').width}
                  cropHeight={Dimensions.get('window').height}
                  imageWidth={Dimensions.get('window').width}
                  imageHeight={Dimensions.get('window').height}>
                  <Image
                    style={image}
                    source={{ uri: source }}
                  />
                </ImageZoom>
              }
            </View>
          </DxModal>
        }
        <TouchableOpacity onPress={() => this.handlePopup()}>
          <Image
              style={image}
              source={{ uri: source }}
          />
        </TouchableOpacity>
    </View>
     );
   }
}

const styles = {
  container: {
    backgroundColor: colors.whiteColor,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 180,
    resizeMode: 'stretch',
  },
  webViewStyle: {
    width: Dimensions.get('window').width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webViewContainerStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
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
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(modalActions.closeModal()),
  openModal: () => dispatch(modalActions.openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DxImageContent);
