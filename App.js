import React, { Component } from 'react';
import {
  Root,
} from 'native-base';

import { Provider } from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import { AppNavigator } from './navigators/AppNavigator';
import store from './store';

// Action for device info
import actions from './actions/DeviceInfo';

// Setting Default Props for the app
import { setCustomText } from 'react-native-global-props';
import fonts from './styles/fonts';


// Setting default fontfamily
const customTextProps = {
  style: {
    fontFamily: fonts.regular,
    letterSpacing: 1,
  },
};

setCustomText(customTextProps);

class App extends Component {
  // Fetching the device unique Id
  componentDidMount() {
    const deviceId = DeviceInfo.getUniqueID();
    store.dispatch(actions.get_device_id(deviceId));
  }

  render() {
    return (
      <Provider store={store}>
        <Root>
          <AppNavigator />
        </Root>
      </Provider>
    );
  }
}

export default App;
