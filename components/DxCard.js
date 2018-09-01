import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

// Libraries
import {
  Content, Card, CardItem, Text,
} from 'native-base';

import {
  BackgroundImageText, BackgroundText, VideoCard, ImageCard, LeftImage, RightImage,
} from './CardTypes';

import fonts from '../styles/fonts';
import * as colors from '../styles/variables';
import { truncate } from '../helpers/index';

class DxCard extends Component {
  static propTypes = {
    experience: PropTypes.object,
    handlePressCard: PropTypes.func,
    channelColor: PropTypes.string,
    channelName: PropTypes.string,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    channelGUID: PropTypes.string,
    handleChannelNameClick: PropTypes.func,
  };

  handlePressCard = () => {
    const { handlePressCard, experience } = this.props;
    handlePressCard(experience.ExperienceStreamGUID, experience.Experience.ExperienceGUID, experience);
  };

  // Handling the channel name click

  handleChannelNameClick = () => {
    const {
      handleChannelNameClick, experience: { ChannelName, ChannelColor, ExperienceChannelGUID },
    } = this.props;
    const channel = {
      ChannelName,
      ChannelColor,
      ExperienceChannelGUID,
    };
    handleChannelNameClick(channel);
  }

  // Handling the types of cards
  handleCardType = (ExperienceCard) => {
    switch (ExperienceCard.Type) {
      case 'BACKGROUND_TEXT':
        return <BackgroundText experienceCard={ExperienceCard} handlePressCard={() => this.handlePressCard()}/>;
      case 'BACKGROUND_IMAGE_TEXT':
        return <BackgroundImageText experienceCard={ExperienceCard} handlePressCard={() => this.handlePressCard()}/>;
      case 'LEFT_IMAGE_TEXT':
        return <LeftImage experienceCard={ExperienceCard} handlePressCard={() => this.handlePressCard()}/>;
      case 'RIGHT_IMAGE_TEXT':
        return <RightImage experienceCard={ExperienceCard} handlePressCard={() => this.handlePressCard()}/>;
      case 'VIDEO':
        return <VideoCard experienceCard={ExperienceCard} handlePressCard={() => this.handlePressCard()}/>;
      case 'IMAGE':
        return <ImageCard experienceCard={ExperienceCard} handlePressCard={() => this.handlePressCard()}/>;
      default:
        return <LeftImage experienceCard={ExperienceCard} handlePressCard={() => this.handlePressCard()}/>;
    }
  }

  render() {
    const {
      cardContainerStyle,
      cardItemStyle,
      topContainerStyle,
      dateWrapperStyle,
      iconLableStyle,
      postedByStyle,
      channelNameStyle,
      headerCardStyle,
    } = styles;

    const {
      handleChannelNameClick,
      experience: {
        ChannelName = '',
        ChannelColor = '',
        CreatedAt = '',
        Experience: {
          ExperienceCard,
        },
      },
    } = this.props;

    // Put ... for longer names
    const truncatedName = ChannelName.length > 30 ? truncate(ChannelName, 30) : ChannelName;

    return (
      <Content>
        <Card style={cardContainerStyle}>
          <CardItem style={Object.assign({}, cardItemStyle, topContainerStyle)}>
            <View style={headerCardStyle}>
              <Text style={postedByStyle}>
                Posted by
              </Text>
              <TouchableOpacity onPress={handleChannelNameClick ? (() => this.handleChannelNameClick()) : (() => this.handlePressCard())}>
                <Text style = {
                  [channelNameStyle,
                    ChannelColor ? { color: ChannelColor } : null,
                  ]
                }>
                  {truncatedName}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={dateWrapperStyle}>
              <Moment element={Text} fromNow parse="YYYY-MM-DD HH:mm" style={iconLableStyle}>{CreatedAt}</Moment>
              <Text style={iconLableStyle}>at</Text>
              <Moment element={Text} format="h:m a" style={iconLableStyle}>{CreatedAt}</Moment>
            </View>
          </CardItem>

          {
            this.handleCardType(ExperienceCard)
          }
        </Card>
      </Content>
    );
  }
}

const styles = {
  cardContainerStyle: {
    borderColor: 'transparent',
    shadowColor: colors.btnBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
    marginBottom: 9,
    paddingBottom: 4,
  },
  cardItemStyle: {},
  topContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerCardStyle: {
    flexDirection: 'row',
    paddingRight: 12,
  },
  postedByStyle: {
    fontSize: 14,
    fontFamily: fonts.light,
    letterSpacing: 2,
  },
  dotContainerStyle: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
  },
  channelNameStyle: {
    color: 'blue',
    fontSize: 14,
    fontFamily: fonts.bold,
    marginLeft: 3,
  },
  subContainerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  dateWrapperStyle: {
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 14,
    width: 12,
    marginRight: 4,
    color: '#85909A',
  },
  iconLableStyle: {
    textAlign: 'left',
    fontSize: 10,
    color: '#85909A',
    paddingRight: 3,
    fontFamily: fonts.light,
  },
};

export default DxCard;
