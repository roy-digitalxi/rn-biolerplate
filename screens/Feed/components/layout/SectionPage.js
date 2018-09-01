import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

// components
import { connect } from 'react-redux';
import { DxContainer } from '../../../../styles/grid';
import SectionList from '../container/SectionList';
import HeaderNavigator from '../container/HeaderNavigator';
import FooterNavigator from '../container/FooterNavigator';
import * as colors from '../../../../styles/variables';
// redux
import actions from '../../actions';

class SectionPage extends Component {
    static propTypes = {
      document: PropTypes.object,
      current_level_section: PropTypes.object,
      goBack: PropTypes.func,
      navigation: PropTypes.object,
    }

    static navigationOptions = {
      header: null,
    }

    render() {
      const {
        contentContainerStyle,
        completed_contentContainerStyle,
        splashContentContainerStyle,
        completed_splashContentContainerStyle,
        footerContainerStyle,
      } = styles;

      const {
        document,
        current_level_section,
        navigation,
      } = this.props;

      let contentStyle;
      if (document.IsCompleted && document.IsFeedbackCompleted) {
        if (current_level_section.IsSplash) {
          contentStyle = completed_splashContentContainerStyle;
        } else {
          contentStyle = completed_contentContainerStyle;
        }
      } else if (current_level_section.IsSplash) {
        contentStyle = splashContentContainerStyle;
      } else {
        contentStyle = contentContainerStyle;
      }

      return (
            <DxContainer style={{ backgroundColor: colors.bgColor }}>

                <HeaderNavigator
                    isBackIcon={true}
                    isSearchIcon={true}
                    goBack={() => navigation.goBack()}
                />

                <View style={contentStyle}>
                    <SectionList
                        section_data={this.props.current_level_section}
                        height={contentStyle.height}
                    />
                </View>

                <View style={footerContainerStyle}>
                    <FooterNavigator />
                </View>

            </DxContainer>
      );
    }
}

const styles = {
  contentStyle: {
    backgroundColor: colors.bgColor,
  },
  contentContainerStyle: {
    height: Dimensions.get('window').height - 64 - 60,
  },
  completed_contentContainerStyle: {
    height: Dimensions.get('window').height - 64,
  },
  splashContentContainerStyle: {
    height: Platform.OS === 'ios' ? Dimensions.get('window').height - 180 - 60 : Dimensions.get('window').height - 180 - 90,
  },
  completed_splashContentContainerStyle: {
    height: Dimensions.get('window').height - 180,
  },
  footerContainerStyle: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: Dimensions.get('window').width,
  },
};

const stateToProps = state => ({
  document: state.feed.document,
  current_level_section: state.feed.current_level_section,
  feed: state.feed,
});

const dispatchToProps = dispatch => ({

});

export default connect(stateToProps, dispatchToProps)(SectionPage);
