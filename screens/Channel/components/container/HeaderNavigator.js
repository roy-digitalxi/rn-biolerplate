import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

// components
import { Header } from '../../../../components';


class HeaderNavigator extends Component {
    static propTypes = {
      openDrawer: PropTypes.func,
      isBackIcon: PropTypes.bool,
      isSearchIcon: PropTypes.bool,
      isHamburgerIcon: PropTypes.bool,
      isAddIcon: PropTypes.bool,
      isDownloadIcon: PropTypes.bool,
      navigation: PropTypes.object,
    }

    handleBackNavigate = () => {
      console.log('go back');
    }

    render() {
      const {
        isBackIcon,
        isSearchIcon,
      } = this.props;

      return (
            <Header
              title="Explore"
              isBackIcon={isBackIcon}
              isSearchIcon={isSearchIcon}
              handleBackIconPress={() => this.handleBackNavigate()}
              drawerOpen={() => this.props.navigation.openDrawer()}
            />
      );
    }
}

export default withNavigation(HeaderNavigator);
