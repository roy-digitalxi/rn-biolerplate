
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  SwipeRow, Button, Icon,
} from 'native-base';

// redux
import { connect } from 'react-redux';
import actions from '../../actions';
import * as colors from '../../../../styles/variables';

// components
import {
  DxListItem,
  DxDocReader,
  DxVideoPlayer,
  DxTextContent,
  DxImageContent,
  DxHtmlReader,
  DxLink,
} from '../../../../components';

import { DxButton, DxAdButton, DxAdButton2 } from '../../../../components/CardButtons';

import { fileBaseLink, imageBaseLink } from '../../../../helpers';

class SectionList extends Component {
    static propTypes = {
      dx_section_browser: PropTypes.func,
      current_level_section: PropTypes.object,
      dx_scroll: PropTypes.func,
      experiencePages: PropTypes.object,
      section_data: PropTypes.object,
      Sections: PropTypes.array,
    }

  state = {
    isRefresh: true,
    height: 0,
    clearId: null,
  };


  componentWillReceiveProps(nextProps) {
    if (this.props.current_level_section.SectionGUID
        !== nextProps.current_level_section.SectionGUID) {
      this.setState({
        isRefresh: true,
      });
    }
  }

    // Navigate between the nested pages
    handleNavigate = (section) => {
      // if no connected pages
      section.ConnectedPageGUID === null ? null : this.props.dx_section_browser(section);
    }

    renderListItem = (section) => {
      switch (section.Type) {
        case 'BUTTON':
          return (<DxButton
              key={section.SectionGUID}
              btnContent={section.BtnContent}
              section={section}
              handleNavigate={this.handleNavigate}
              isCompleted={section.IsCompleted}
              isRecommended={section.IsRecommended}
            />);

        case 'AD_BUTTON':
          return (
              <DxAdButton
                key={section.SectionGUID}
                adBtnImg={section.AdBtnImg}
                adBtnColor={section.AdBtnColor}
                btnContent={section.BtnContent}
                section={section}
                handleNavigate={this.handleNavigate}
                isCompleted={section.IsCompleted}
                isRecommended={section.IsRecommended}
              />
          );

        case 'AD_BUTTON_2':
          return (
            <DxAdButton2
              key={section.SectionGUID}
              adBtnBgColor={section.AdBtnBgColor}
              adBtnColor={section.AdBtnColor}
              btnContent={section.BtnContent}
              section={section}
              handleNavigate={this.handleNavigate}
              isCompleted={section.IsCompleted}
              isRecommended={section.IsRecommended}
            />
          );

        default:
          return null;
      }
    }


    renderContent = (section) => {
      if (!section) {
        return null;
      }

      switch (section.Type) {
        case 'EMBED_PDF':
          return (
            <DxDocReader
                key={section.SectionGUID}
                source={`${fileBaseLink}${section.Pdf}.pdf`}
                isCompleted={section.isCompleted}
                isRecommended={section.IsRecommended}
            />
          );

        case 'EDITOR':
          return (
            <DxHtmlReader
                key={section.SectionGUID}
                source={`${fileBaseLink}${section.Html}.html`}
            />
          );

        case 'VIDEO':
          return (
            <DxVideoPlayer
                key={section.SectionGUID}
                source={section.VideoUrl}
            />
          );
        case 'TEXT':
          return (
            <DxTextContent
                key={section.SectionGUID}
                content={section.Content}
            />
          );
        case 'IMAGE':
          return (
            <DxImageContent
                key={section.SectionGUID}
                source={`${imageBaseLink}${section.Img}`}
            />
          );
        case 'LINK':
          return (
            <DxLink
              key={section.SectionGUID}
              link={section.Link}
              linkLabel={section.LinkLabel}
              linkColor={section.LinkColor}
            />
          );

        default:
          return null;
      }
    }

     handleLoadContent = (height) => {
       const {
         current_level_section,
       } = this.props;

       const isCompleted = current_level_section.IsCompleted;
       let totalHeight; let layoutHeight; let offset; let completion; let
         isBottom = false;
       // auto scroll
       totalHeight = height;
       layoutHeight = this.props.height;
       offset = 0;

       if (totalHeight > layoutHeight) {
         if (offset > 0) {
           completion = Number(((layoutHeight + offset) / totalHeight).toFixed(2));
         } else {
           completion = 0;
         }
       } else {
         completion = 1;
       }

       if (completion === 1) {
         isBottom = true;
       }
       if (!isCompleted) {
         completion = Math.min(0.9, completion);
       }

       // scroll to top
       if (this.state.isRefresh) {
         const clearId = setTimeout(() => {
           this.refs._scrollView.scrollTo({ y: 0 });
         }, 100);
         this.setState({
           isRefresh: false,
           clearId,
         });
       }

       // progress bar scroll
       this.props.dx_scroll(completion, isBottom);
       // total height
       this.setState({
         height,
       });
     }

    handleScrollView = (event) => {
      const {
        current_level_section,
      } = this.props;

      const isCompleted = current_level_section.IsCompleted;
      let totalHeight; let layoutHeight; let offset; let completion; let isBottom = false;
      totalHeight = this.state.height;
      layoutHeight = this.props.height;
      offset = event.nativeEvent.contentOffset.y;

      if (totalHeight > layoutHeight) {
        if (offset > 0) {
          completion = Number(((layoutHeight + offset) / totalHeight).toFixed(2));
        } else {
          completion = 0;
        }
      } else {
        completion = 1;
      }

      if (completion >= 1) {
        isBottom = true;
      }
      if (!isCompleted) {
        completion = Math.min(0.9, completion);
      }

      // clear auto scroll to top
      clearTimeout(this.state.clearId);

      this.props.dx_scroll(completion, isBottom);
    }

    render() {
      const { section_data: { Sections = [] } } = this.props;

      return (
        <View style={{ paddingTop: 12, paddingBottom: 12, backgroundColor: colors.bgColor }}>

            <ScrollView
                ref='_scrollView'
                onContentSizeChange={(width, height) => this.handleLoadContent(height)}
                onScroll={e => this.handleScrollView(e) }>

                {
                  Sections.length > 0 ? (
                    (Sections || [])
                    && Sections.map((section, index) => <SwipeRow
                                                          key={index}
                                                          style={styles.swipeRowContainer}
                                                          stopLeftSwipe
                                                          rightOpenValue={-100}
                                                          onPress={() => this.handleNavigate()}
                                                          body={
                                                                  section.IsContent
                                                                    ? (
                                                                      this.renderContent(section)
                                                                    )
                                                                    : (
                                                                      this.renderListItem(section)
                                                                    )
                                                                }
                                                          right={
                                                            <Button light onPress={() => console.log('Clicked')}>
                                                              <Icon active name="bookmark" />
                                                            </Button>
                                                          }
                                                        />)
                  )
                    : null
                }
            </ScrollView>
        </View>
      );
    }
}

const styles = {
  swipeRowContainer: {
    paddingRight: 0,
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 3,
    borderBottomWidth: 0,
  },
};

const stateToProps = state => ({
  document: state.feed.document,
  current_level_section: state.feed.current_level_section,
  current_suggest_section: state.feed.current_suggest_section,
});

const dispatchToProps = dispatch => ({
  dx_section_browser: current_level_section => dispatch(actions.dx_section_browser(current_level_section)),
  dx_scroll: (completion, isBottom) => dispatch(actions.dx_scroll(completion, isBottom)),
});

export default connect(stateToProps, dispatchToProps)(SectionList);
