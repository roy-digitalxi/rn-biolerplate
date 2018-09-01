import React from 'react';
import PropTypes from 'prop-types';
import { DxContainer } from '../../styles/grid';
import ChannelPage from './components/layout/ChannelPage';

const ChannelScreen = props => (
      <DxContainer>
          <ChannelPage feedPage={() => props.navigation.navigate('Feed')}/>
      </DxContainer>
);

ChannelScreen.propTypes = {
  navigatation: PropTypes.func,
  navigate: PropTypes.func,
};

export default ChannelScreen;
