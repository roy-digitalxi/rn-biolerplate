import React, { Component } from 'react';
import {
  View,
  Dimensions,
  WebView,
  AppState,
} from 'react-native';
import PropTypes from 'prop-types';

// constants
import colors from '../constants/colors';

class DxVideoPlayer extends Component {
  static propTypes = {
    source: PropTypes.string,
  }

  state = {
    appState: AppState.currentState,
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (nextAppState) => {
    this.setState({
      appState: nextAppState,
    });
  }

  render() {
    const { source } = this.props;
    const { container, videoStyle } = styles;
    const { appState } = this.state;
    return (
            <View style={container}>
              {
                appState === 'active'
                && <WebView
                  style={videoStyle}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{ uri: `${source}` }}
                />
              }
            </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  videoStyle: {
    flex: 1,
    minHeight: 250,
  },
};

export default DxVideoPlayer;
