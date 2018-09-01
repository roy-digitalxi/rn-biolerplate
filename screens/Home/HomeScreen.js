import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import { DxContainer } from '../../styles/grid';
import HomePage from './components/layout/HomePage';

class HomeScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      openDrawer: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }),
  }

  render() {
    const { navigate, openDrawer } = this.props.navigation;
    return (
            <DxContainer>
                <HomePage
                  explorePage={() => navigate('Explore')}
                  drawerOpen={() => openDrawer()}
                />
            </DxContainer>
    );
  }
}


export default HomeScreen;
