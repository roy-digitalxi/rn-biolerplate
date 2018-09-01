import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import { connect } from 'react-redux';
import { Header } from '../../../../components';

// redux
import actions from '../../actions';


class HeaderNavigator extends Component {
  static propTypes ={
    goBack: PropTypes.func.isRequired,
  }

  render() {
    const {
      isBackIcon,
      isSearchIcon,
      isAddIcon,
      goBack,
    } = this.props;

    return (
        <Header
          title="Downloads"
          isBackIcon={isBackIcon}
          isSearchIcon={isSearchIcon}
          isAddIcon={isAddIcon}
          handleBackIconPress={() => goBack()}
        />
    );
  }
}

const stateToProps = state => ({
  current_level_section: state.bookmark.current_level_section,
});

const dispatchToProps = dispatch => ({
  dx_browser_back_w: () => dispatch(actions.dx_browser_back_w()),
  dx_section_browser_back_w: () => dispatch(actions.dx_section_browser_back_w()),
});

export default connect(stateToProps, dispatchToProps)(HeaderNavigator);
