import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import { connect } from 'react-redux';
import { Header } from '../../../../components';

// redux
import actions from '../../actions';


class HeaderNavigator extends Component {
    static propTypes = {

    }

    handleBackNavigate = () => {
      console.log('go back');
    }

    render() {
      const {
        isBackIcon,
        isSearchIcon,
        isHamburgerIcon,
        isAddIcon,
        isDownloadIcon,
      } = this.props;

      return (
            <Header
                title="Explore"
                isBackIcon={isBackIcon}
                isSearchIcon={isSearchIcon}
                isHamburgerIcon={isHamburgerIcon}
                isAddIcon={isAddIcon}
                isDownloadIcon={isDownloadIcon}
                handleBackIconPress={() => this.handleBackNavigate()}
            />
      );
    }
}

const stateToProps = state => ({

});

const dispatchToProps = dispatch => ({

});

export default connect(stateToProps, dispatchToProps)(HeaderNavigator);
