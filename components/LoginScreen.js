import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';

const LoginScreen = ({ navigation }) => (
  <View>
    <Button
      onPress={() => navigation.dispatch({ type: 'Login' })}
      title="Log in"
    />
  </View>
);

LoginScreen.navigationOptions = {
  title: 'Login',
};

export default LoginScreen;