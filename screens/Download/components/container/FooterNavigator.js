import React, { Component } from 'react';
import {
  View,
} from 'react-native';

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
    handleBtnPress = () => {
      const {
        document,
        current_level_section,
      } = this.props;

      if (document.IsCompleted
            && !document.IsFeedbackCompleted) {
        // Go to feed back page
        this.props.dx_feed_back_w();
      } else if (current_level_section.Type == 'FEEDBACK') {
        // Submit feed back & go to feed
        this.props.dx_feed_back_complete_w();
        this.props.navigation.popToTop();
      } else {
        // Suggestion reading
        this.props.dx_section_suggest_browser_w();
      }
    }

    render() {
      const {
        current_level_section,
        current_suggest_section,
      } = this.props;

      let title; let
        subtitle;
      if (!current_suggest_section) {
        title = 'pending title';
        subtitle = 'pending sub title';
      } else {
        if (current_suggest_section.Type == 'FEEDBACK') {
          title = 'COMPLETED';
        } else if (current_level_section.Type == 'FEEDBACK') {
          title = 'BACK TO WALLET';
        } else {
          title = 'CONTINUE READING';
        }
        subtitle = current_suggest_section.Title ? current_suggest_section.Title : current_suggest_section.SectionGUID;
      }

      return (
            <View>
                {
                    this.props.document.SectionGUID
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
                    this.props.document.IsCompleted
                        && this.props.document.IsFeedbackCompleted
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
  document: state.wallet.document,
  current_level_section: state.wallet.current_level_section,
  current_suggest_section: state.wallet.current_suggest_section,
});

const dispatchToProps = dispatch => ({
  dx_feed_back_w: () => dispatch(actions.dx_feed_back_w()),
  dx_feed_back_complete_w: () => dispatch(actions.dx_feed_back_complete_w()),
  dx_section_suggest_browser_w: () => dispatch(actions.dx_section_suggest_browser_w()),
});

export default connect(stateToProps, dispatchToProps)(FooterNavigator);
