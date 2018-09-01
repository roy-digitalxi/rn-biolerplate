import React from 'react';
import { View } from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  Icon,
  Input,
  Item,
} from 'native-base';
import PropTypes from 'prop-types';

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
  consentQuestionStyle: {
    fontWeight: 'bold',
    lineHeight: 23,
  },
  inputItemStyle: {
    marginTop: 20, 
    borderColor: 'transparent',
    backgroundColor: colors.bgColor,
  },
  inputStyle: { 
    fontFamily: fonts.light 
  },
  invitationFooterStyle: {
    backgroundColor: colors.bgColor,
  },
  FooterContentStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  submitButton: {
    color: 'green',
    fontWeight: 'bold',
  },
};

const PromoModal = ({ closeModal }) => (
  <Content contentContainerStyle={styles.containerContentStyle}>
    <Card transparent >

      <CardItem style={styles.headerCardItemStyle}>
        <Button transparent onPress={() => closeModal()} style={styles.closeButtonStyle}>
            <Text style={styles.closeButtonTextStyle}><Icon name="ios-close" /></Text>
          </Button>
        <View style={styles.headerContentStyle}>
          <Text style={styles.mainHeadingStyle}>PROMO CODE</Text>
        </View>
      </CardItem>

      <CardItem>
        <Body style={styles.invitationBodyStyle}>
          <Text style={styles.consentQuestionStyle}>Enter your promo code to unlock the protected channel</Text>
          <Item regular style={styles.inputItemStyle}>
            <Input placeholder='Enter Promo Code Here' placeholderTextColor={colors.black} style={styles.inputStyle}/>
          </Item>
        </Body>
      </CardItem>

      <CardItem style={styles.invitationFooterStyle}>
        <View style={styles.FooterContentStyle}>
          <Button style={styles.footerButton} >
            <Text style={styles.submitButton}>Submit</Text>
          </Button>
        </View>
      </CardItem>

    </Card>
  </Content>
);

PromoModal.propTypes = {
  closeModal: PropTypes.func,
};

export default PromoModal;
