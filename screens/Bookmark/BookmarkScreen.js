import React, { Component } from 'react';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
import actions from './actions';

// components
import { DxContainer } from '../../styles/grid';
import FeedListPage from './components/layout/FeedListPage';

class BookmarkScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
    }),
  }

  render() {
    const { navigation } = this.props;
    return (
            <DxContainer>
                <FeedListPage />
            </DxContainer>
    );
  }
}

const stateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,

});

const dispatchToProps = dispatch => ({

});

export default connect(stateToProps, dispatchToProps)(BookmarkScreen);
