import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import { Content } from 'native-base';
import ManageCard from '../presentation/ManageCard';

// library

class Manage extends Component {
    static propTypes = {

    }

    render() {
      const {
        textStyle,
        contentContainerStyle,
      } = styles;

      return (
            <ScrollView contentContainerStyle={contentContainerStyle}>
                <Content>
                    <View>
                        <Text style={textStyle}>Pending invitations</Text>
                        <ManageCard
                            channelTitle="#news"
                            isLockIcon={false}
                        />
                    </View>
                    <View>
                        <Text style={textStyle}>Existing subscriptions</Text>
                        <ManageCard
                            channelTitle="#news"
                            isLockIcon={false}
                        />
                        <ManageCard
                            channelTitle="#investors"
                            isLockIcon={true}
                        />
                    </View>
                </Content>
            </ScrollView>
      );
    }
}

const styles = {
  textStyle: {
    paddingTop: 9,
    paddingBottom: 6,
    paddingLeft: 9,
  },
  contentContainerStyle: {
    paddingBottom: Platform.OS === 'ios' ? 10 : 30,
    height: Platform.OS === 'ios' ? Dimensions.get('window').height - 158 : Dimensions.get('window').height - 180,
    marginTop: 6,
  },
};

const stateToProps = state => ({

});

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(Manage);
