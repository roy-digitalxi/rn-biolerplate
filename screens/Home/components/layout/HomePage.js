import React, { Component } from 'react';

// redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../../actions';

// components
import { DxContainer } from '../../../../styles/grid';
import HeaderNavigator from '../container/HeaderNavigator';
import SlideList from '../container/SlideList';
import FeedEmptyPage from '../../FeedEmptyPage';
import { deleteFile } from '../../../../utils/fileSystem';

class HomePage extends Component {
  static propTypes = {
    drawerOpen: PropTypes.func.isRequired,
    getDownloadsDirectoryRequest: PropTypes.func.isRequired,
    explorePage: PropTypes.func,
    getFeaturedCardsRequest: PropTypes.func.isRequired,
    getNewReleaseRequest: PropTypes.func.isRequired,
    getMostPopularRequest: PropTypes.func.isRequired,
    getTrendingRequest: PropTypes.func.isRequired,
    explore: PropTypes.object,
    featured: PropTypes.array,
    newReleases: PropTypes.array,
    mostPopular: PropTypes.array,
    trending: PropTypes.array,
    isLoading: PropTypes.bool,
    downloadsDirectory: PropTypes.array,
  }

  componentDidMount = () => {
    // Check on content
    this.props.getDownloadsDirectoryRequest('downloadFeeds');

    // Get featured content
    this.getFeaturedContent();

    // Get New releases
    this.getNewReleasesContent();

    // Get most Popular
    this.getMostpopularContent();

    // Get Trending content
    this.getTrendingContent();

    // deleteFile('5b7ae7ce94e8a60c561d93da.html', 'downloadFeeds');
  }

  getFeaturedContent = () => {
    // Static data
    const UserGUID = '1231232131';
    const featuredParameters = {
      UserGUID,
      Limit: '5',
      Offset: '0',
      Extra: {
        SearchType: 'CHANNEL_TYPE',
        SearchField: 'GENERAL',
      },
    };
    this.props.getFeaturedCardsRequest(featuredParameters);
  }

  getNewReleasesContent = () => {
    // Static data
    const UserGUID = '1231232131';
    const newReleasesParameters = {
      UserGUID,
      Limit: '5',
      Offset: '0',
      Extra: {
        SearchType: '',
        SearchField: '',
        SortType: 'NEW_RELEASE',
      },
    };
    this.props.getNewReleaseRequest(newReleasesParameters);
  }

  getMostpopularContent = () => {
    // Static data
    const UserGUID = '1231232131';
    const mostPopularParameters = {
      UserGUID,
      Limit: '5',
      Offset: '0',
      Extra: {
        SearchType: '',
        SearchField: '',
        SortType: 'POPULAR',
      },
    };
    this.props.getMostPopularRequest(mostPopularParameters);
  }

  getTrendingContent = () => {
    // Static data
    const UserGUID = '1231232131';
    const trendingParameters = {
      UserGUID,
      Limit: '5',
      Offset: '0',
      Extra: {
        SearchType: 'TIME_RANGE',
        SearchField: 'LAST_10_DAYS',
        SortType: 'POPULAR',
      },
    };
    this.props.getTrendingRequest(trendingParameters);
  }

  render() {
    const {
      explorePage, drawerOpen, explore: {
        featured, newReleases, mostPopular, trending, isLoading, downloadsDirectory,
      },
    } = this.props;

    return (
          <DxContainer>
              <HeaderNavigator
                  isSearchIcon={true}
                  isAddIcon={true}
                  drawerOpen={drawerOpen}
              />

              <SlideList
                      downloadsDirectory={downloadsDirectory}
                      featured={featured}
                      newReleases={newReleases}
                      mostPopular={mostPopular}
                      trending={trending}
                      isLoading={isLoading}
                    />

              {/* {
                downloadsDirectory.length > 0
                  ? <SlideList
                      downloadsDirectory={downloadsDirectory}
                      featured={featured}
                      newReleases={newReleases}
                      mostPopular={mostPopular}
                      trending={trending}
                      isLoading={isLoading}
                    />
                  : <FeedEmptyPage explorePage={() => explorePage()} />
              } */}
          </DxContainer>
    );
  }
}

const mapStateToProps = state => ({
  explore: state.explore,
});

const mapDispatchToProps = dispatch => ({
  getDownloadsDirectoryRequest: directoryName => dispatch(actions.getDownloadsDirectoryRequest(directoryName)),
  getFeaturedCardsRequest: featuredParameters => dispatch(actions.getFeaturedCardsRequest(featuredParameters)),
  getNewReleaseRequest: newReleasesParameters => dispatch(actions.getNewReleaseRequest(newReleasesParameters)),
  getMostPopularRequest: mostPopularParameters => dispatch(actions.getMostPopularRequest(mostPopularParameters)),
  getTrendingRequest: trendingParameters => dispatch(actions.getTrendingRequest(trendingParameters)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
