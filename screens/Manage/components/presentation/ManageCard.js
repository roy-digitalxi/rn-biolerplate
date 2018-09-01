import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

// Libraries
import {
  Card,
  CardItem,
  Text,
  Icon,
} from 'native-base';

class ManageCard extends Component {
    static propTypes = {

    }

    handlePressCard = () => {
    }

    render() {
      const {
        cardComponentStyle,
        cardItemStyle,
        topContainerStyle,
        subContainerStyle,
        iconWrapperStyle,
        iconStyle,
        iconLableStyle,
      } = styles;

      return (
            <TouchableOpacity onPress={() => console.log('the touchabloe opacity works')}>
            <Card style={cardComponentStyle} pointerEvents="none">
                <View style={{ flex: 12 }}>
                <CardItem style={Object.assign({}, cardItemStyle, topContainerStyle)} onPress={() => { console.log('hey there'); }}>
                    <Text>{this.props.channelTitle}</Text>
                    {
                        this.props.isLockIcon
                          ? (
                            <Icon style={{ fontSize: 18, width: 14, marginLeft: 4 }}
                                name= "ios-lock"
                            />
                          )
                          : (
                            null
                          )
                    }
                </CardItem>
                <CardItem style={Object.assign({}, cardItemStyle, subContainerStyle)}>
                    <View style={iconWrapperStyle}>
                        <Icon style={iconStyle} name="ios-pie" />
                        <Text style={iconLableStyle}>25%</Text>
                    </View>
                    <View style={iconWrapperStyle}>
                        <Icon style={iconStyle} name="md-eye" />
                        <Text style={iconLableStyle}>14K</Text>
                    </View>
                    <View style={iconWrapperStyle}>
                        <Icon style={iconStyle} name="ios-navigate" />
                        <Text style={iconLableStyle}>Last accessed: Yesterday at 07:00 PM</Text>
                    </View>
                </CardItem>
                </View>
                <View style={{ flex: 1, alignSelf: 'center', backgroundColor: 'white' }}>
                        <Icon style={{ fontSize: 18, width: 14, marginLeft: 4 }} name= "ios-arrow-forward"
                        />
                </View>
            </Card>
        </TouchableOpacity>
      );
    }
}

const styles = {
  cardComponentStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardItemStyle: {
    paddingLeft: 9,
    paddingRight: 9,
    backgroundColor: 'white',
  },
  topContainerStyle: {
    flexDirection: 'row',
  },
  subContainerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  iconWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 6,
  },
  iconStyle: {
    fontSize: 14,
    width: 12,
    marginRight: 4,
    color: '#85909A',
  },
  iconLableStyle: {
    textAlign: 'left',
    fontSize: 11,
    paddingRight: 11,
    color: '#85909A',
  },
};

export default ManageCard;