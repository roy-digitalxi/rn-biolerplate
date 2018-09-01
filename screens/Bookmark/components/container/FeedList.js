import React, { Component } from 'react';
import {
  View,
  Text,
  Platform,
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
import feedAction from '../../../Feed/actions';

// import * as selectors from "../../Selector";

// components
import { DxCard } from '../../../../components';

// data
import demo3 from '../../../../Data/demo3.json';

class FeedList extends Component {
  componentDidMount() {
    // fetch feed list here
  }

    handlePressCard = () => {
      this.props.dx_browser_w(demo3);
    }

    handleDeleteBookmark = (feedId) => {
      this.props.dx_delete_bookmark(feedId);
    }

    render() {
      const {
        contentStyle,
        swipeBodyStyle,
        rightsideDeleteButton,
        bookmarkDateStyling,
        bodyContainerStyle,
        deleteButtonStyle,
      } = styles;
      return (
            <Content contentContainerStyle={contentStyle}>
              <SwipeRow
                disableRightSwipe
                style={swipeBodyStyle}
                rightOpenValue={-100}
                body={
                  <View style={bodyContainerStyle}>
                    <Text style={bookmarkDateStyling}>Jan 25, 2018 - Today</Text>
                    {/* <DxCard
                      handlePressCard={() => this.handlePressCard()}
                    /> */}
                  </View>
                }
                right={
                  <View style={rightsideDeleteButton}>
                    <Button light onPress={() => alert('Bookmark deleted')}>
                      <Icon active name="trash" style={deleteButtonStyle} />
                    </Button>
                  </View>
                }
              />


                {/* list of feed */}
            </Content>
      );
    }
}

const styles = {
  contentStyle: {
    marginTop: 9,
    marginBottom: 9,
  },
  bodyContainerStyle: {
    paddingLeft: 12,
  },
  titleContainerStyle: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 9,
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
    width: '100%',
    borderBottomWidth: 0,
    marginBottom: 5,
  },
  rightsideDeleteButton: {
    flex: 1,
    marginBottom: Platform.OS === 'ios' ? 5 : 7,
  },
  deleteButtonStyle: {
    fontSize: 30,
    color: colors.redColor,
  },
  bookmarkDateStyling: {
    fontFamily: fonts.light,
    textAlign: 'center',
    marginBottom: 9,
    letterSpacing: 2,
  },
};

const stateToProps = state => ({
  feed: state.feed,
  // bookmarkList: selectors.BookmarkInfoSelector(state)
});

const dispatchToProps = dispatch => ({
  dx_browser_w: document => dispatch(actions.dx_browser_w(document)),
  dx_delete_bookmark: feedId => dispatch(feedAction.dx_delete_bookmark(feedId)),
});

export default connect(stateToProps, dispatchToProps)(FeedList);
