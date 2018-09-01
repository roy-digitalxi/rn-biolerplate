import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, WebView } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  Content, H2, Button, Text, Left, Container,
} from 'native-base';
import RNFS from 'react-native-fs';
import DxCarousel from '../../../../components/DxCarousel';
// components
import * as colors from '../../../../styles/variables';
import fonts from '../../../../styles/fonts';
import SpinnerLoader from '../../../../components/DxSpinner';

const styles = {
  pageContent: {
    backgroundColor: colors.bgColor,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 6,
  },
  continueReadingStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerStyle: {
    fontFamily: fonts.bold,
    letterSpacing: 2,
    fontSize: 20,
  },
  totalCountStyle: {
    marginLeft: 15,
    fontSize: 14,
    fontFamily: fonts.light,
    color: colors.gray,
    marginTop: 2,
  },
  seeAllButtonStyle: {
    marginTop: 3,
  },
  seeAllButtonTextStyle: {
    fontFamily: fonts.light,
    letterSpacing: 2,
    fontSize: 12,
  },
};

class Slides extends Component {
  static propTypes = {
    featured: PropTypes.array,
    mostPopular: PropTypes.array,
    newReleases: PropTypes.array,
    trending: PropTypes.array,
    isLoading: PropTypes.bool,
    navigate: PropTypes.func,
    navigation: PropTypes.object,
    downloadsDirectory: PropTypes.array,
  }

  render() {
    const {
      continueReadingStyle,
      headerContainer,
      totalCountStyle,
      seeAllButtonStyle,
      headerStyle,
      seeAllButtonTextStyle,
      sliderContainer,
      pageContent,
    } = styles;

    const {
      newReleases, trending, downloadsDirectory, mostPopular, featured, isLoading, navigation: {
        navigate,
      },
    } = this.props;

    return (
      <Container style={pageContent}>
        <Content padder >
          <View style={sliderContainer} >
            <View style={headerContainer}>
              <View style={continueReadingStyle}>
                <H2 style={headerStyle}>Continue Reading</H2>
                {
                  downloadsDirectory
                    ? <Text style={totalCountStyle}>{downloadsDirectory.length}</Text>
                    : null
                }
              </View>
              <Button
                iconRight
                transparent
                small
                style={seeAllButtonStyle}
                onPress={() => navigate('Download')}
              >
                <Text style={seeAllButtonTextStyle}>See All</Text>
              </Button>
            </View>
            <Left>

            </Left>
          </View>

          {/* Featured Content */}
          {
            featured && featured.length > 0
            && (<View style={sliderContainer}>
              <View style={headerContainer}>
                <View style={continueReadingStyle}>
                  <H2 style={headerStyle}>Featured</H2>
                  <Text style={totalCountStyle}>{featured.length}</Text>
                </View>
              </View>
              <Left>
                {isLoading ? <SpinnerLoader /> : <DxCarousel slideData={featured} />}
              </Left>
            </View>)
          }

          {/* Most popular */}
          {
            mostPopular && mostPopular.length > 0
            && (<View style={sliderContainer}>
              <View style={headerContainer}>
                <View style={continueReadingStyle}>
                  <H2 style={headerStyle}>Most Popular</H2>
                  <Text style={totalCountStyle}>{mostPopular.length}</Text>
                </View>
              </View>
              <Left>
                {isLoading ? <SpinnerLoader /> : <DxCarousel slideData={mostPopular} />}
              </Left>
            </View>)
          }

          {/* New Releases */}
          {
            newReleases && newReleases.length > 0
            && (<View style={sliderContainer}>
              <View style={headerContainer}>
                <View style={continueReadingStyle}>
                  <H2 style={headerStyle}>New Releases</H2>
                  <Text style={totalCountStyle}>{newReleases.length}</Text>
                </View>
              </View>
              <Left>
                {isLoading ? <SpinnerLoader /> : <DxCarousel slideData={newReleases} />}
              </Left>
            </View>)

          }

          {/* Trending */}
          {
            trending && trending.length > 0
            && (<View style={sliderContainer}>
              <View style={headerContainer}>
                <View style={continueReadingStyle}>
                  <H2 style={headerStyle}>Trending</H2>
                  <Text style={totalCountStyle}>{trending.length}</Text>
                </View>
              </View>
              <Left>
                {isLoading ? <SpinnerLoader /> : <DxCarousel slideData={trending} />}
              </Left>
            </View>)
          }
        </Content>
      </Container>
    );
  }
}

export default withNavigation(Slides);
