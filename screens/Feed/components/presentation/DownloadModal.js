import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
} from 'native-base';
import PropTypes from 'prop-types';
import DxCard from '../../../../components/DxCard';
import * as colors from '../../../../styles/variables';
import fonts from '../../../../styles/fonts';

const styles = {
  containerContentStyle: {
    backgroundColor: colors.bgColor,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
  },
  headerCardItemStyle: {
    flexDirection: 'column',
    marginBottom: 2,
    paddingTop: 25,
    paddingBottom: 25,
  },
  headerContentStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 0,
  },
  closeButtonTextStyle: {
    color: colors.black,
    fontWeight: 'bold',
  },
  mainHeadingStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  dateStyle: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.light,
    marginTop: 2,
  },
  invitationBodyStyle: {
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bodyContentStyle: {
    textAlign: 'justify',
    lineHeight: 23,
    fontFamily: fonts.light,
  },
  senderNameStyle: {
    fontWeight: 'bold',
    lineHeight: 23,
    margin: 0,
    padding: 0,
  },
  channelNameStyle: {
    fontWeight: 'bold',
    color: colors.btnBlue,
  },
  consentQuestionStyle: {
    fontWeight: 'bold',
    marginTop: 20,
    lineHeight: 23,
  },
  invitationFooterStyle: {
    backgroundColor: colors.bgColor,
  },
  FooterContentStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 16,
    paddingBottom: 16,
  },
  footerButton: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 0,
  },
  declineButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  acceptButton: {
    color: 'green',
    fontWeight: 'bold',
  },
};

class DownloadModal extends Component {

  render() {
    return (
      <Content contentContainerStyle={styles.containerContentStyle}>
        <Card transparent >

          <CardItem style={styles.headerCardItemStyle}>
            {/* <Button transparent onPress={() => closeModal()} style={styles.closeButtonStyle}>
                <Text style={styles.closeButtonTextStyle}><Icon name="ios-close" /></Text>
              </Button> */}
            <View style={styles.headerContentStyle}>
              <Text style={styles.mainHeadingStyle}>LOADING CONTENT</Text>
              <Text style={styles.dateStyle}>430 MB</Text>
            </View>
          </CardItem>


          <CardItem style={[styles.headerCardItemStyle, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
            {/* <DxCard /> */}
            <Image style={{ width: 100, height: 100, marginTop: 20 }} source={require('../../../../assets/images/downloadProgress.png')} />
          </CardItem>

          <CardItem>
            <Body style={styles.invitationBodyStyle}>
              <Text style={styles.bodyContentStyle}>Some sections in this content requires <Text style = {styles.senderNameStyle}>Internet Access</Text></Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

DownloadModal.propTypes = {
  closeModal: PropTypes.func,
};

export default DownloadModal;
