import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { Container } from 'native-base';
import PropTypes from 'prop-types';

// components
import { DxContainer } from '../../../../styles/grid';
import HeaderNavigator from '../container/HeaderNavigator';
import Bookmark from '../container/Bookmark';
import * as colors from '../../../../styles/variables';

const styles = {
  contentWrapperStyle: {},
  contentContainerStyle: {
    minHeight: Dimensions.get('window').height - 64 - 48,
    backgroundColor: colors.bgColor,
  },
};

class FeedListPage extends Component {
  static propTypes = {
    drawerOpen: PropTypes.func.isRequired,
  }

  render() {
    const {
      contentContainerStyle,
    } = styles;
    const { drawerOpen } = this.props;

    return (
            <DxContainer>
              <HeaderNavigator
                  isSearchIcon={true}
                  isAddIcon={true}
                  drawerOpen={() => drawerOpen()}
              />
              <Container style={contentContainerStyle}>
                <Bookmark />
              </Container>
            </DxContainer>
    );
  }
}

export default FeedListPage;
