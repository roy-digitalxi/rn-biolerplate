import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import { connect } from 'react-redux';
import { Header } from '../../../../components';

class HeaderNavigator extends Component {
  static propTypes = {
    drawerOpen: PropTypes.func.isRequired,
    isSearchIcon: PropTypes.bool,
    isAddIcon: PropTypes.bool,
  }

  render() {
    const {
      isSearchIcon,
      isAddIcon,
      drawerOpen,
    } = this.props;

    return (
      <Header
        title="Bookmarks"
        isSearchIcon={isSearchIcon}
        isAddIcon={isAddIcon}
        drawerOpen={() => drawerOpen()}
      />
    );
  }
}

const stateToProps = state => ({

});

const dispatchToProps = dispatch => ({
});

export default connect(stateToProps, dispatchToProps)(HeaderNavigator);
