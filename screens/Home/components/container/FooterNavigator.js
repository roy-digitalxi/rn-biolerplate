import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

// components
import { connect } from 'react-redux';
import {
  Footer,
  DxProgressBar,
} from '../../../../components';

// redux
import actions from '../../actions';

// helpers
import { isObjectEmpty } from '../../../../helpers';

class FooterNavigator extends Component {
    static propTypes = {
      feed: PropTypes.object,
      dx_feed_back: PropTypes.func,
      dx_feed_back_complete: PropTypes.func,
      dx_section_suggest_browser: PropTypes.func,
    }

    handleBtnPress = () => {
      const {
        document,
        current_level_section,
      } = this.props.feed;

      if (document.IsCompleted
            && !document.IsFeedbackCompleted) {
        // Go to feed back page
        this.props.dx_feed_back();
      } else if (current_level_section.Type === 'FEEDBACK') {
        // Submit feed back & go to feed
        this.props.dx_feed_back_complete();
        this.props.navigation.popToTop();
      } else {
        // Suggestion reading
        this.props.dx_section_suggest_browser();
      }
    }

    render() {
      const {
        document,
        current_level_section,
        current_suggest_section,
      } = this.props.feed;

      let title; let
        subtitle;
      if (!current_suggest_section) {
        title = 'pending title';
        subtitle = 'pending sub title';
      } else {
        if (current_suggest_section.Type == 'FEEDBACK') {
          title = 'COMPLETED';
        } else if (current_level_section.Type == 'FEEDBACK') {
          title = 'BACK TO FEED';
        } else {
          title = 'CONTINUE READING';
        }
        subtitle = current_suggest_section.Title ? current_suggest_section.Title : current_suggest_section.SectionGUID;
      }
      console.log(this.props);
      return (
            <View>
                {
                    document.SectionGUID
                      ? (
                            <DxProgressBar
                                record={current_level_section ? current_level_section.Completion : 0}
                                progress={current_level_section ? current_level_section.Completion : 0}
                                isbottom={current_level_section.IsBottom}
                            />
                      )
                      : null
                }
                {
                    document.IsCompleted
                        && document.IsFeedbackCompleted
                      ? null
                      : (
                            <Footer
                                title={title}
                                subtitle={subtitle}
                                handleBtnPress={() => this.handleBtnPress()}
                                hasArrow={current_level_section.Type !== 'FEEDBACK'}
                            />
                      )
                }
            </View>
      );
    }
}

const stateToProps = state => ({
  feed: state.feed,
});

const dispatchToProps = dispatch => ({
  dx_feed_back: () => dispatch(actions.dx_feed_back()),
  dx_feed_back_complete: () => dispatch(actions.dx_feed_back_complete()),
  dx_section_suggest_browser: () => dispatch(actions.dx_section_suggest_browser()),
});

export default connect(stateToProps, dispatchToProps)(FooterNavigator);
