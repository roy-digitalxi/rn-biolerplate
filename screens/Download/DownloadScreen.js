import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import { DxContainer } from '../../styles/grid';
import DownloadListPage from './components/layout/DownloadListPage';

class DownloadScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  }

  render() {
    const { navigation } = this.props;
    return (
            <DxContainer>
              <DownloadListPage goBack={() => navigation.goBack()} />
            </DxContainer>
    );
  }
}

export default DownloadScreen;
