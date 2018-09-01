import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
} from 'react-native';

// constants
import { connect } from 'react-redux';
import global_constants from '../../constants';

// redux
import actions from './actions';

// styled-components
import { InputTextBox, Btn, TouchHighlight } from '../../styles/grid';


class LoginScreen extends Component {
    static propTypes = {
      navigation: PropTypes.object.isRequired,
    };

    static navigationOptions = {
      header: null,
    }

    state = {
      emailId: '',
      password: '',
    };

    render() {
      const {
        wrapperStyle,
        logoComponentStyle,
        emailComponentStyle,
        pwdComponentStyle,
        btnComponentStyle,
        btnContentStyle,
        forgotPwdComponentStyle,
        forgotPaswordContentStyle,
        signUpBtnComponentStyle,
        signUpBtnText,
      } = styles;

      const { navigation } = this.props;
      return (
            <View style={wrapperStyle}>
                <View style={logoComponentStyle}>
                    <Image
                        style={{ width: 160, height: 50 }}
                        source={require('../../assets/images/digitalXi.png')}
                    />
                </View>
                <View style={emailComponentStyle}>
                    <InputTextBox
                        onChangeText={emailId => this.setState({ emailId })}
                        value={this.state.emailId}
                        placeholder={'Email address'}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={pwdComponentStyle}>
                    <InputTextBox
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        underlineColorAndroid={'transparent'}
                    />
                </View>
                <View style={btnComponentStyle}>
                    <Btn
                        onPress={() => navigation.dispatch({ type: global_constants.LOGIN })}
                    >
                        <Text style={btnContentStyle}>Login</Text>
                    </Btn>
                </View>
                {/* <View style={forgotPwdComponentStyle}>
                    <TouchHighlight
                        onPress={this.onPress}
                    >
                        <Text style={forgotPaswordContentStyle}> Forgot password? </Text>
                    </TouchHighlight>
                </View> */}
                {/* <View style={signUpBtnComponentStyle}>
                    <Btn>
                        <Text style={signUpBtnText}>New user? Sign up</Text>
                    </Btn>
                </View> */}
            </View>

      );
    }
}

const styles = {
  wrapperStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    position: 'relative',
  },
  emailComponentStyle: {
    alignItems: 'stretch',
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 40,
  },
  pwdComponentStyle: {
    alignItems: 'stretch',
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 30,
  },
  btnComponentStyle: {
    alignItems: 'stretch',
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 40,
  },
  btnContentStyle: {
    color: 'white',
    fontSize: 18,
    height: 48,
    fontFamily: 'Avenir-Light',
    textAlign: 'center',
    lineHeight: 48,
  },
  forgotPwdComponentStyle: {
    alignItems: 'center',
    marginTop: 20,
  },
  forgotPaswordContentStyle: {
    fontFamily: 'Avenir-Light',
  },
  signUpBtnComponentStyle: {
    alignSelf: 'stretch',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  signUpBtnText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Avenir-Light',
    lineHeight: 48,
    textAlign: 'center',
  },
  logoComponentStyle: {
    alignItems: 'center',
    marginBottom: 10,
  },
};

const stateToProps = state => ({

});

const dispatchToProps = dispatch => ({

});

export default connect(stateToProps, dispatchToProps)(LoginScreen);
