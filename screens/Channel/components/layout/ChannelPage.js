import React, { Component } from 'react';

// components
import { DxContainer } from '../../../../styles/grid';
import HeaderNavigator from '../container/HeaderNavigator';
import Discovery from '../container/Discovery';

class ChannelPage extends Component {
  static propTypes = {

  }

  render() {
    return (
      <DxContainer>
        <HeaderNavigator
            isSearchIcon={true}
            isAddIcon={true}
        />
        <Discovery />
      </DxContainer>
    );
  }
}


export default ChannelPage;
