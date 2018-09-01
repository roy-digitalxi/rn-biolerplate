import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';

// library
import {
  Icon,
  Card,
  CardItem,
  Left,
  Right,
} from 'native-base';
import ReadMore from 'react-native-read-more-text';

// Modal
import DxModal from '../../../../components/DxModal';
import InvitationModal from './InvitationModal';

// constants
import * as colors from '../../../../styles/variables';
import fonts from '../../../../styles/fonts';

const styles = {
  cardStyle: {
    borderColor: 'transparent',
    shadowColor: colors.btnBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    padding: 6,
    marginBottom: 9,
  },
  cardItemStyle: {
    paddingLeft: 9,
    paddingRight: 9,
    flex: 1,
  },
  topContainerStyle: {
    flexDirection: 'row',
  },
  subContainerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  channelNameStyle: {
    fontFamily: fonts.bold,
    fontSize: 20,
    lineHeight: 22,
  },
  titleIconStyle: {
    fontSize: 18,
    width: 14,
    marginLeft: 16,
    marginTop: -5,
  },
  iconWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageIconStyle: {
    width: 16,
    height: 12,
    marginRight: 4,
  },
  iconStyle: {
    fontSize: 14,
    width: 12,
    marginRight: 4,
    color: '#85909A',
  },
  innviteImageStyle: {
    width: 60,
    height: 13,
    position: 'absolute',
    right: -18,
    top: -10,
  },
  iconLableStyle: {
    textAlign: 'left',
    fontSize: 12,
    paddingRight: 12,
    color: '#85909A',
  },
  btnItemStyle: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: -3,
  },
  textContainerStyle: {
    marginTop: 6,
  },
  channelDescriptionStyle: {
    fontFamily: fonts.light,
    fontSize: 16,
    paddingBottom: 12,
  },
  channelDescContainerStyle: {
    paddingTop: 6,
    paddingBottom: 9,
  },
};

class DiscoveryCard extends Component {
    static propTypes = {
      UserGUID: PropTypes.string,
      channelName: PropTypes.string,
      channelPercentage: PropTypes.string,
      channelViews: PropTypes.string,
      channelLastView: PropTypes.string,
      channelDescription: PropTypes.string,
      channelType: PropTypes.string,
      isSubscribed: PropTypes.string,
      openModal: PropTypes.func,
      channelColor: PropTypes.string,
      navigation: PropTypes.func,
      modalOpen: PropTypes.bool,
      closeModal: PropTypes.func,
      handleSubscribe: PropTypes.func,
    }

    renderTruncatedFooter = handlePress => (
        <Text style={{ color: colors.btnBlue, paddingTop: 5 }} onPress={handlePress}>
        Read more
        </Text>
    )

    renderRevealedFooter = handlePress => (
        <Text style={{ color: colors.btnBlue, paddingTop: 5 }} onPress={handlePress}>
        Show less
        </Text>
    )

    handleChannelPress = () => {
      const {
        handleSubscribe, isSubscribed, navigation,
      } = this.props;
      if (isSubscribed === '0') {
        handleSubscribe();
      }
      navigation();
    }

    render() {
      const {
        UserGUID,
        channelName,
        channelPercentage,
        channelViews,
        channelLastView,
        channelDescription,
        isSubscribed,
        channelType,
        openModal,
        channelColor,
        navigation,
        modalOpen,
        closeModal,
      } = this.props;

      const {
        cardItemStyle,
        topContainerStyle,
        subContainerStyle,
        titleIconStyle,
        iconWrapperStyle,
        iconStyle,
        iconLableStyle,
        textContainerStyle,
        channelNameStyle,
        innviteImageStyle,
        cardStyle,
        imageIconStyle,
        channelDescriptionStyle,
        channelDescContainerStyle,
      } = styles;

      // Invited Privtae channel check
      const isPrivate = (channelType === '2');

      return (

        <Card style={cardStyle}>

          {/* Modal popup for private channels */}
          {/* {
            isPrivate && <DxModal modalOpen={modalOpen} closeModal={ () => closeModal()}>
              <InvitationModal UserGUID={UserGUID} />
            </DxModal>
          } */}

            <CardItem
                button
                onPress={openModal === true || this.handleChannelPress}
                style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                <Left>
                    <Text style={[channelNameStyle, { color: channelColor }]}>#{channelName}</Text>
                    {isPrivate ? <Icon
                                    style={[titleIconStyle, { color: channelColor }]}
                                    name="ios-lock"
                                    /> : null}
                </Left>
                    {
                        isPrivate
                          ? (
                            <Right>
                                <Image style={innviteImageStyle} source={require('../../../../assets/images/Icons/inviteIcon.png')} />
                            </Right>
                          )
                          : null
                    }
            </CardItem>
            <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle)}>
                <View style={iconWrapperStyle}>
                    <Image
                        style={imageIconStyle}
                        source={require('../../../../assets/images/Icons/channelPercentage.png')}
                    />
                    <Text style={iconLableStyle}>{channelPercentage}%</Text>
                </View>
                <View style={iconWrapperStyle}>
                    <Icon
                        style={iconStyle}
                        name="md-eye"
                    />
                    <Text style={iconLableStyle}>{channelViews}K</Text>
                </View>
                <View style={iconWrapperStyle}>
                    <Icon
                        style={iconStyle}
                        name="ios-navigate"
                    />
                    <Text style={iconLableStyle}> {channelLastView}</Text>
                </View>
            </CardItem>
            <CardItem button onPress={openModal === true || this.handleChannelPress} style={Object.assign({}, cardItemStyle, subContainerStyle, textContainerStyle)}>
                <View style={channelDescContainerStyle}>
                    <ReadMore
                        numberOfLines={2}
                        renderTruncatedFooter={this.renderTruncatedFooter}
                        renderRevealedFooter={this.renderRevealedFooter}>
                        <Text style={channelDescriptionStyle}>
                            {
                              channelDescription || 'No description'
                            }
                        </Text>
                    </ReadMore>
                </View>
            </CardItem>
        </Card>
      );
    }
}

export default DiscoveryCard;
