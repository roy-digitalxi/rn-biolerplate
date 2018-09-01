import React from 'react';
import { Dimensions } from 'react-native';
import { Spinner } from 'native-base';
import * as colors from '../styles/variables';

const styles = {
  spinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height - 64 - 48,
  },
};

const SpinnerLoader = () => (
    <Spinner color={colors.gray} style={styles.spinnerStyle} />
);

export default SpinnerLoader;
