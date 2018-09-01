import React from 'react';
import PropTypes from 'prop-types';

// components
import { DxContainer } from '../../styles/grid';
import FeedListPage from './components/layout/FeedListPage';

const FeedScreen = ({ navigation }) => (
        <DxContainer>
            <FeedListPage goBack={() => navigation.goBack()} channel={navigation.getParam('channel')} UserGUID={navigation.getParam('UserGUID')} />
        </DxContainer>
);


FeedScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default FeedScreen;
