import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withNavigation } from 'react-navigation';
import { Header } from '../../../../components';
// redux
import actions from '../../actions';


class HeaderNavigator extends Component {
    static propTypes = {
      isBackIcon: PropTypes.bool,
      isSearchIcon: PropTypes.bool,
      isAddIcon: PropTypes.bool,
      goBack: PropTypes.func,
      channel: PropTypes.object,
      experienceCount: PropTypes.number,
      current_level_section: PropTypes.object,
      dx_section_browser_back: PropTypes.func,
      dx_browser_back: PropTypes.func,
      navigation: PropTypes.object,
      dx_feed_back: PropTypes.func,
      dx_browse_to_channel: PropTypes.func,
    }

    handleBackNavigate = () => {
      const {
        current_level_section,
      } = this.props;

      if (current_level_section.IsRoot === true) {
        // Back to feed list
        this.props.dx_browser_back();
        this.props.navigation.pop();
      } else if ((!current_level_section.IsRoot && current_level_section.onFeedPage === false) || current_level_section.onFeedPage === true) {
        this.props.dx_browse_to_channel();
      } else {
        // Back to upper level
        this.props.dx_section_browser_back();
      }
    }


    render() {
      const {
        isBackIcon,
        isSearchIcon,
        channel,
        experienceCount,
        current_level_section,
      } = this.props;

      return (
            <Header
                title = {
                  (channel && channel.ChannelName) || (current_level_section && current_level_section.Title)
                }
                isSplash={current_level_section && current_level_section.IsSplash}
                splashContent={current_level_section && current_level_section.SplashContent}
                splashColor={current_level_section && current_level_section.SplashColor }
                splashImg={current_level_section && current_level_section.SplashImg}
                channelColor={channel && channel.ChannelColor}
                isBackIcon={isBackIcon}
                isSearchIcon={isSearchIcon}
                experienceCount={experienceCount && experienceCount}
                handleBackIconPress={() => this.handleBackNavigate()}
            />
      );
    }
}

const stateToProps = state => ({
  current_level_section: state.feed.current_level_section,
});

const dispatchToProps = dispatch => ({
  dx_browser_back: () => dispatch(actions.dx_browser_back()),
  dx_browse_to_channel: () => dispatch(actions.dx_browse_to_channel()),
  dx_section_browser_back: () => dispatch(actions.dx_section_browser_back()),
});

export default compose(connect(stateToProps, dispatchToProps), withNavigation)(HeaderNavigator);
