import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RNFS from 'react-native-fs';

import {
  View,
  Text,
  Dimensions,
  WebView,
} from 'react-native';

// constants
import { connect } from 'react-redux';
import {
  Icon,
  Content,
  SwipeRow,
  Button,
} from 'native-base';
import * as colors from '../../../../styles/variables';
import fonts from '../../../../styles/fonts';

// redux
import actions from '../../actions';
// Delete bookmark action
import homeActions from '../../../Home/actions';
import SpinnerLoader from '../../../../components/DxSpinner';

// data
import demo3 from '../../../../Data/demo3.json';

class DownloadList extends Component {
    static propTypes = {
      getDownloadsDirectoryRequest: PropTypes.func,
      deleteFeedFromDownloadRequest: PropTypes.func,
      explore: PropTypes.object,
      userDownloads: PropTypes.array,
      downloadsDirectory: PropTypes.array,
      handlePressCard: PropTypes.func,
    }

    componentDidMount() {
    // fetch feed list here
      this.props.getDownloadsDirectoryRequest('downloadFeeds');
    }

    handlePressCard = (fileName, folderName) => {
      this.props.deleteFeedFromDownloadRequest(fileName, folderName);
    }

    render() {
      const {
        titleContainerStyle,
        iconStyle,
        titleStyle,
        contentStyle,
        errorMessageStyle,
        errorMessageTextStyle,
      } = styles;

      const { explore: { downloadsDirectory, isLoading } } = this.props;

      return (
            <Content contentContainerStyle={contentStyle}>
            {
              isLoading
                ? <SpinnerLoader />
                : downloadsDirectory.length > 0
                  ? downloadsDirectory
                    .map(feed => <SwipeRow
                                  key={feed.name}
                                  disableRightSwipe
                                  style={styles.swipeBodyStyle}
                                  rightOpenValue={-100}
                                  body={
                                    <View>
                                      <Text>
                                        {
                                          `${feed.ctime.getDate()}/${feed.ctime.getDay()}/${feed.ctime.getFullYear()} ${feed.ctime.getHours()}:${feed.ctime.getMinutes()}`
                                        }
                                      </Text>
                                      <WebView
                                      source = {
                                        {
                                          uri: `file://${RNFS.DocumentDirectoryPath}/downloadFeeds/${feed.name}`,
                                          scale: 1,
                                        }
                                      }
                                      style = {{ width: 100, height: 90 }}
                                      />
                                    </View>
                                  }
                                  right={
                                    <Button danger onPress={() => this.handlePressCard(feed.name, 'downloadFeeds')}>
                                      <Icon active name="trash" />
                                    </Button>
                                  }
                                />)

                  : <View style={errorMessageStyle}>
                      <Text style={errorMessageTextStyle}>
                        No Downloads found
                      </Text>
                    </View>
            }
  </Content>
      );
    }
}

const styles = {
  contentStyle: {
    marginTop: 9,
    marginBottom: 9,
  },
  titleContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 12,
  },
  iconStyle: {
    fontSize: 18,
    paddingLeft: 6,
    paddingRight: 6,
  },
  titleStyle: {
    color: colors.greyColor,
  },
  swipeBodyStyle: {
    paddingBottom: 9,
  },
  errorMessageStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    height: Dimensions.get('window').height - 64 - 48,
  },
  errorMessageTextStyle: {
    fontSize: 18,
    color: colors.gray,
  },

};

const stateToProps = state => ({
  explore: state.explore,
});

const dispatchToProps = dispatch => ({
  getDownloadsDirectoryRequest: folderName => dispatch(homeActions.getDownloadsDirectoryRequest(folderName)),
  deleteFeedFromDownloadRequest: (fileName, folderName) => dispatch(homeActions.deleteFeedFromDownloadRequest(fileName, folderName)),
});

export default connect(stateToProps, dispatchToProps)(DownloadList);
