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

class DiscoveryCard extends Component {
    static propTypes = {
      isPrivate: PropTypes.bool,
      channelName: PropTypes.string,
      channelPercentage: PropTypes.string,
      channelViews: PropTypes.string,
      channelLastView: PropTypes.string,
      channelDescription: PropTypes.string,
    }

    renderTruncatedFooter = handlePress => (
        <Text style={{ color: colors.btnBlue }} onPress={handlePress}>
        Read more
        </Text>
    )

    renderRevealedFooter = handlePress => (
        <Text style={{ color: colors.btnBlue }} onPress={handlePress}>
        Show less
        </Text>
    )

    render() {
      const {
        isPrivate,
        channelName,
        channelPercentage,
        channelViews,
        channelLastView,
        channelDescription,
        openModal,
        titleColor,
        feedPage,
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
        btnItemStyle,
        textContainerStyle,
        channelNameStyle,
        innviteImageStyle,
        cardStyle,
        imageIconStyle,
        channelDescriptionStyle,
        channelDescContainerStyle,
      } = styles;

      return (
        
        <Card style={cardStyle}>
          {
            isPrivate && <DxModal modalOpen={modalOpen} closeModal={ () => closeModal()}>
            <InvitationModal />
            </DxModal>
          }
            <CardItem
                button
                onPress={openModal || feedPage}
                style={Object.assign({}, cardItemStyle, topContainerStyle)}>
                <Left>
                    <Text style={[channelNameStyle, { color: titleColor }]}>#{channelName}</Text>
                    {isPrivate ? <Icon
                                    style={[titleIconStyle, { color: titleColor }]}
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
            <CardItem button onPress={openModal || feedPage} style={Object.assign({}, cardItemStyle, subContainerStyle, textContainerStyle)}>
                <View style={channelDescContainerStyle}>
                    <ReadMore
                        numberOfLines={2}
                        renderTruncatedFooter={this.renderTruncatedFooter}
                        renderRevealedFooter={this.renderRevealedFooter}>
                        <Text style={channelDescriptionStyle}>
                            {channelDescription}
                        </Text>
                    </ReadMore>
                </View>
            </CardItem>
        </Card>
      );
    }
}

const styles = {
  cardStyle: {
    borderColor: 'transparent',
    shadowColor: colors.btnBlue,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
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
    right: -12,
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

export default DiscoveryCard;
