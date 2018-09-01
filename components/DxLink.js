import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, WebView, Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import modalActions from '../actions/Modal';
import * as colors from '../styles/variables';
import DxModal from './DxModal';

const styles = {
  containerStyle: {
    minHeight: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  webViewStyle: {
    width: Dimensions.get('window').width * 0.8,
    height: '100%',
  },
  webViewContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  closeStyle: {
    alignSelf: 'flex-end',
  },
  closeButtonStyle: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
};

class DxLink extends Component {
  static propTypes = {
    link: PropTypes.string,
    linkLabel: PropTypes.string,
    linkColor: PropTypes.string,
    modal: PropTypes.object,
    modalOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    openModal: PropTypes.func,
  };

  state={
    showPopup: false,
  }

  handleOpenPopup = () => {
    this.setState({
      showPopup: true,
    });
    this.props.openModal();
  }

  render() {
    const {
      link, linkLabel, linkColor, modal: { modalOpen }, closeModal,
    } = this.props;
    const { showPopup } = this.state;

    const {
      containerStyle, buttonStyle, buttonTextStyle, webViewStyle, webViewContainerStyle, closeButtonStyle, closeStyle,
    } = styles;

    return (
      <View style={containerStyle}>
        {
          showPopup && <DxModal
          canClose={false}
          modalOpen={modalOpen}
          closeModal={ () => closeModal()}>
            <View style={webViewContainerStyle}>
              <TouchableOpacity style={closeStyle} onPress={() => closeModal()}><Text style={closeButtonStyle}>Close  X</Text></TouchableOpacity>
              <WebView
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: `${link}` }}
                style={webViewStyle}
              />
            </View>
          </DxModal>
        }
        <TouchableOpacity style={buttonStyle} onPress={() => this.handleOpenPopup()}>
          <Text style={[buttonTextStyle, { color: linkColor || colors.blue }]}>
            {linkLabel}
          </Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(modalActions.closeModal()),
  openModal: () => dispatch(modalActions.openModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DxLink);
