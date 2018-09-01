import React, { Component } from 'react';
import {
  View,
  Dimensions,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// components
import { DxContainer } from '../../../../styles/grid';
import HeaderNavigator from '../container/HeaderNavigator';
import Discovery from '../container/Discovery';

class ChannelPage extends Component {
  static propTypes = {
    nav: PropTypes.object.isRequired,
    feedPage: PropTypes.func,
  }

  render() {
    const {
      contentContainerStyle,
    } = styles;
    const { currentTab } = this.props.nav;
    return (
          <DxContainer>
              <HeaderNavigator
                  isSearchIcon={true}
                  isAddIcon={true}
              />
                  {currentTab === 'Explore' && <Discovery feedPage={this.props.feedPage} />}
          
          </DxContainer>
    );
  }
}

const styles = {
  contentContainerStyle: {
    minHeight: Dimensions.get('window').height - 64 - 48,
  },
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps, null)(ChannelPage);
