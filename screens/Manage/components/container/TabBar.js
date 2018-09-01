import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// constants
import {
  Tab,
  Tabs,
} from 'native-base';
import { connect } from 'react-redux';
import colors from '../../../../constants/colors';

// components
import Discovery from './Discovery';
import Manage from './Manage';

// library

// redux
import actions from '../../actions';

class TabBar extends Component {
    static propTypes = {

    }

    render() {
      const {
        contentWrapperStyle,
      } = styles;

      return (
            <Tabs
                page={this.props.currentTab == 'Channel' ? 0 : 1}
                tabBarUnderlineStyle={{ backgroundColor: colors.blackColor }}
            >
                <Tab
                    heading="Discover"
                    textStyle={{ color: colors.blackColor }}
                    activeTextStyle={{ color: colors.blackColor }}
                    tabStyle={{ backgroundColor: colors.whiteColor }}
                    activeTabStyle={{ backgroundColor: colors.whiteColor }}
                >
                    <View style={contentWrapperStyle}>
                        <Discovery />
                    </View>
                </Tab>

                <Tab
                    heading="Manage"
                    textStyle={{ color: colors.blackColor }}
                    activeTextStyle={{ color: colors.blackColor }}
                    tabStyle={{ backgroundColor: colors.whiteColor }}
                    activeTabStyle={{ backgroundColor: colors.whiteColor }}
                >
                    <View style={contentWrapperStyle}>
                        <Manage />
                    </View>
                </Tab>
            </Tabs>
      );
    }
}

const styles = {
  contentWrapperStyle: {
    flex: 1,
  },
};

const stateToProps = state => ({
  currentTab: state.nav.currentTab,
});

const dispatchToProps = dispatch => ({
});

export default connect(stateToProps, dispatchToProps)(TabBar);
