import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import { connect } from 'react-redux';
import { Header } from '../../../../components';

// redux
import actions from '../../actions';

// constants
import colors from '../../../../constants/colors';

class HeaderNavigator extends Component {
    static propTypes = {
      isSearchIcon: PropTypes.bool,
      isAddIcon: PropTypes.bool,
      drawerOpen: PropTypes.func.isRequired,
    }

    render() {
      const {
        isSearchIcon,
      } = this.props;

      return (
            <Header
                title='Home'
                isSearchIcon={isSearchIcon}
                drawerOpen={this.props.drawerOpen}
            />
      );
    }
}

export default HeaderNavigator;
