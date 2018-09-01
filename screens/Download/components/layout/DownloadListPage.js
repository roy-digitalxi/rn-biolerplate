import React, { Component } from 'react';
import { Container } from 'native-base';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import homeActions from '../../../Home/actions';

// components
import { DxContainer } from '../../../../styles/grid';
import HeaderNavigator from '../container/HeaderNavigator';
import DownloadList from '../container/DownloadList';
import * as colors from '../../../../styles/variables';

const styles = {
  contentContainerStyle: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
};

class DownloadListPage extends Component {
  static propTypes = {
    goBack: PropTypes.func.isRequired,
    deleteFeedFromDownloadRequest: PropTypes.func,
  }

    handlePressCard = (fileName, folderName) => {
      this.props.deleteFeedFromDownloadRequest(fileName, folderName);
    }


    render() {
      const {
        contentContainerStyle,
      } = styles;

      const { goBack } = this.props;
      return (
      <DxContainer>
        <HeaderNavigator
          isSearchIcon={true}
          isAddIcon={true}
          isBackIcon={true}
          goBack={() => goBack()}
        />
        <Container style={contentContainerStyle}>
          <DownloadList handlePressCard={(fileName, folderName) => this.handlePressCard(fileName, folderName)} />
        </Container>
      </DxContainer>
      );
    }
}

const mapStateToProps = state => ({
  explore: state.explore,
});


const mapDispatchToProps = dispatch => ({
  deleteFeedFromDownloadRequest: (fileName, folderName) => dispatch(homeActions.deleteFeedFromDownloadRequest(fileName, folderName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadListPage);
