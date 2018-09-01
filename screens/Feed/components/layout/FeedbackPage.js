import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

// Components
import { connect } from 'react-redux';
import { DxContainer } from '../../../../styles/grid';
import HeaderNavigator from '../container/HeaderNavigator';
import FooterNavigator from '../container/FooterNavigator';
import Feedback from '../container/Feedback';

// redux
import actions from '../../actions';

class FeedbackPage extends Component {
    static propTypes = {
      navigation: PropTypes.object,
    }

    static navigationOptions = {
      header: null,
    }

    render() {
      const {
        contentWrapperStyle,
        footerContainerStyle,
      } = styles;

      return (
            <DxContainer>
                <HeaderNavigator />
                <View style={contentWrapperStyle}>
                    <Feedback />
                </View>
                <View style={footerContainerStyle}>
                    <FooterNavigator
                        navigation={this.props.navigation}
                        />
                </View>
            </DxContainer>
      );
    }
}

const styles = {
  contentWrapperStyle: {
    flex: 1,
  },
  footerContainerStyle: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
  },
};

const stateToProps = state => ({

});

const dispatchToProps = dispatch => ({

});

export default connect(stateToProps, dispatchToProps)(FeedbackPage);
