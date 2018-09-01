import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';

// constants
import {
  Header as Head,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Item,
  Input,
  Badge,
  Text,
} from 'native-base';
import * as colors from '../styles/variables';
import fonts from '../styles/fonts';
import constants from '../screens/Login/constants';

// helper
import { imageBaseLink } from '../helpers';

class Header extends Component {
    static propTypes = {
      drawerOpen: PropTypes.func,
      title: PropTypes.string,
      channelColor: PropTypes.string,
      totalCount: PropTypes.string,
      color: PropTypes.string,
      experienceCount: PropTypes.number,
      isSplash: PropTypes.bool,
      splashContent: PropTypes.string,
      splashImg: PropTypes.string,
      splashColor: PropTypes.string,
      handleBackIconPress: PropTypes.func,
    }

    state = {
      isSearch: false,
    }

    handleBackIconPress = () => {
      this.props.handleBackIconPress();
    }

    handleSearchIconPress = () => {
      this.setState(prevState => ({
        isSearch: !prevState.isSearch,
      }));
    }

    render() {
      const {
        title,
        channelColor,
        experienceCount,
        isSearchIcon,
        isSplash,
        splashContent,
        splashImg,
        splashColor,
      } = this.props;

      const {
        headerContainerStyle,
        headerImageContainerStyle,
        topContainerStyle,
        leftContainerStyle,
        titleContainerStyle,
        rightContainerStyle,
        iconContainerStyle,
        iconFontStyle,
        bottomContainerStyle,
        descStyle,
        searchBarContainerStyle,
        backIconWrapperStyle,
        backIconStyle,
        userIconStyle,
        badgeStyle,
        badgeTextStyle,
        totalCountStyle,
        titleStyle,
        inputStyle,
      } = styles;

      const fontColor = { color: splashColor || colors.blackColor };

      const headerWithImage = (
            <View style={headerContainerStyle}>
                <ImageBackground
                    style={headerImageContainerStyle}
                    resizeMode='stretch'
                    source={{ uri: `${imageBaseLink}${splashImg}` }}>
                    <View style={topContainerStyle}>
                        {
                            this.state.isSearch
                              ? null
                              : <View style={leftContainerStyle}>
                                    <View style={iconContainerStyle}>
                                        {
                                            this.props.isBackIcon
                                              ? <Button
                                                    onPress={() => this.handleBackIconPress()}
                                                    transparent
                                                    dark
                                                >
                                                    <Icon
                                                        name="ios-arrow-back-outline"
                                                        style={Object.assign({}, fontColor, iconFontStyle)} />
                                                </Button>
                                              : null
                                        }
                                    </View>
                                </View>
                        }
                        {/* {
                            this.state.isSearch
                              ? null
                              : <View style={titleContainerStyle}>
                                    <Title style={fontColor}>{this.props.title}</Title>
                                </View>
                        } */}
                        {
                            this.state.isSearch
                              ? <Item style={searchBarContainerStyle}>
                                    <Icon name="ios-search" />
                                    <Input placeholder="Search" />
                                </Item>
                              : null
                        }

                        <View style={rightContainerStyle}>
                            <View style={iconContainerStyle}>
                                {
                                    this.props.isSearchIcon
                                      ? (
                                            <Button transparent dark>
                                                <Icon
                                                    onPress={() => this.handleSearchIconPress()}
                                                    name={this.state.isSearch ? 'ios-close' : 'search'}
                                                    style={Object.assign({}, fontColor, iconFontStyle)} />
                                            </Button>
                                      )
                                      : (
                                        null
                                      )
                                }
                                {
                                    this.props.isHamburgerIcon
                                      ? (
                                            <Button transparent dark>
                                                <Icon
                                                    name="md-more"
                                                    style={Object.assign({}, fontColor, iconFontStyle)} />
                                            </Button>
                                      )
                                      : (
                                        null
                                      )
                                }


                            </View>
                        </View>
                    </View>
                    <View style={bottomContainerStyle}>
                        <Text style={[Object.assign({}, fontColor, descStyle), { color: splashColor }]}>
                            {splashContent}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
      );

      const headerWithoutImage = (
            <Head
                style={{
                  backgroundColor: 'white',
                  borderBottomColor: 'transparent',
                  shadowColor: colors.greyColor,
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 0.4,
                  shadowRadius: 4,
                  elevation: 1,
                }}
                searchBar={this.state.isSearch}
                rounded>
                {
                    this.state.isSearch
                      ? null
                      : <Left>
                            {
                                this.props.isBackIcon
                                  ? <Button
                                        onPress={() => this.props.handleBackIconPress()}
                                        transparent
                                        dark
                                        style={backIconWrapperStyle}
                                    >
                                        <Icon
                                            style={backIconStyle}
                                            name="ios-arrow-back-outline"
                                        />
                                    </Button>
                                  : <View>
                                      <Button
                                          onPress={() => this.props.drawerOpen()}
                                          transparent
                                          dark
                                          badge
                                          iconLeft
                                      >
                                          <Icon style={userIconStyle}
                                              name="ios-contact"
                                          />
                                          {/* <Badge style={badgeStyle}>
                                              <Text style={badgeTextStyle}>2</Text>
                                          </Badge> */}
                                      </Button>
                                  </View>
                            }
                        </Left>
                }
                {
                    this.state.isSearch
                      ? null
                      : <Body>
                            <Title style={[titleStyle, channelColor && { color: channelColor }]}>{title}</Title>
                            {
                              experienceCount && <Text style={totalCountStyle}>{experienceCount} posts</Text>
                            }
                        </Body>
                }
                {
                    this.state.isSearch
                      ? <Item style={{
                        backgroundColor: 'white', borderWidth: 1, borderRightWidth: 1, borderColor: '#000',
                      }}>
                            <Input style={inputStyle} placeholder="Search a channel" />
                            <Icon name="ios-search" />
                        </Item>
                      : null
                }
                <Right>
                    {
                        this.props.isSearchIcon
                          ? (
                                <Button transparent dark>
                                    <Icon
                                      style={{ fontSize: 30, fontWeight: 'bold' }}
                                        name={this.state.isSearch ? 'ios-close' : 'search'}
                                        onPress={() => this.handleSearchIconPress()}
                                    />
                                </Button>
                          )
                          : (
                            null
                          )
                    }
                    {
                        this.props.isHamburgerIcon
                          ? (
                                <Button transparent dark>
                                    <Icon name="md-more" />
                                </Button>
                          )
                          : (
                            null
                          )
                    }
                    {
                        this.props.isAddIcon
                          ? (
                                <Button transparent dark>
                                    <Icon name="ios-add-circle-outline" />
                                </Button>
                          )
                          : (
                            null
                          )
                    }
                    {
                        this.props.isDownloadIcon
                          ? (
                                <Button transparent dark>
                                    <Icon name="ios-cloud-download-outline" />
                                </Button>
                          )
                          : (
                            null
                          )
                    }
                </Right>
            </Head>
      );

      return isSplash
        ? headerWithImage
        : headerWithoutImage;
    }
}

const headerContainerHeight = 180;
const headerHeight = 72;

const styles = {
  headerContainerStyle: {
    height: headerContainerHeight,
    margin: 0,
    padding: 0,
  },
  headerImageContainerStyle: {
    width: Dimensions.get('window').width,
    height: headerContainerHeight,
  },
  topContainerStyle: {
    height: headerHeight,
    flexDirection: 'row',
  },
  leftContainerStyle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainerStyle: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  iconContainerStyle: {
    flexDirection: 'row',
  },
  iconFontStyle: {
    fontSize: 30,
  },
  bottomContainerStyle: {
    height: headerContainerHeight - headerHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  descStyle: {
    textAlign: 'center',
  },

  searchBarContainerStyle: {
    flex: 2,
  },
  backIconWrapperStyle: {
    width: 48,
  },
  backIconStyle: {
    marginLeft: 12,
    marginTop: -6,
  },
  userIconStyle: {
    color: colors.greyColor,
  },
  badgeTextStyle: {
    lineHeight: 16,
    marginLeft: -1,
    fontSize: 12,
  },
  badgeStyle: {
    right: 7,
    top: -3,
    height: 22,
    width: 22,
    padding: 0,
  },
  totalCountStyle: {
    fontSize: 10,
    fontFamily: fonts.light,
    color: colors.gray,
  },
  titleStyle: {
    fontSize: 16,
  },
  inputStyle: {
    fontFamily: fonts.light,
    letterSpacing: 2,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 14,
  },
};

export default Header;
