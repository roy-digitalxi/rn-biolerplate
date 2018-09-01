import React, { Component } from 'react';
import {
  Image,
} from 'react-native';
import {
  Content, Header, Body, Icon, Container, ListItem, Left, Badge, Right, Text,
} from 'native-base';
import PropTypes from 'prop-types';

import * as colors from '../styles/variables';

const styles = {
  drawerHeader: {
    height: 200,
    marginBottom: 24,
    borderBottomWidth: 0,
    elevation: 0,
  },
  drawerHeaderImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 0,
  },
  drawerItemName: {
    marginLeft: 30,
    fontSize: 18,
  },
  drawerLeftContent: {
    alignItems: 'center',
  },
  drawerItemIcon: {
    fontSize: 26,
    width: 28,
  },
  drawerBadge: {
    marginRight: 10,
  },
};

class SideBar extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func,
  }

  render() {
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body>
            <Image style={styles.drawerHeaderImage} source={require('../assets/images/logo_placeholder.png')} />
          </Body>
        </Header>
        <Content>
          <ListItem
            Icon
            button
            noBorder
            onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Home' })}>
            <Left style={styles.drawerLeftContent}>
              <Icon style={styles.drawerItemIcon} name="person" />
              <Text style={styles.drawerItemName}>Home</Text>
            </Left>
          </ListItem>

          <ListItem
            Icon
            button
            noBorder
            onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Download' })}>
            <Left style={styles.drawerLeftContent}>
              <Icon style={styles.drawerItemIcon} name="cloud-download" />
              <Text style={styles.drawerItemName}>Downloads</Text>
            </Left>
          </ListItem>

          {/* <ListItem
            Icon
            button
            noBorder
            onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'MainScreen' })}>
            <Left style={styles.drawerLeftContent}>
              <Image style={{ width: 20, height: 20, marginRight: 8 }} source={require('../assets/images/Icons/bell.png')} />
              <Text style={styles.drawerItemName}>Notifications</Text>
            </Left>
          </ListItem> */}

          {/* <ListItem
            Icon
            button
            noBorder
            onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'MainScreen' })}>
            <Left style={styles.drawerLeftContent}>
              <Icon style={styles.drawerItemIcon} name="add" />
              <Text style={styles.drawerItemName}>Invitations</Text>
            </Left>

             <Right>
                <Badge style={styles.drawerBadge}>
                  <Text>2</Text>
                </Badge>
              </Right>

          </ListItem> */}

          {/* <ListItem
            Icon
            button
            noBorder
            onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Preference' })}>
            <Left style={styles.drawerLeftContent}>
              <Icon style={styles.drawerItemIcon} name="hammer" />
              <Text style={styles.drawerItemName}>Preferences</Text>
            </Left>
          </ListItem> */}

          {/* <ListItem
            Icon
            button
            noBorder
            onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'MainScreen' })}>
            <Left style={styles.drawerLeftContent}>
              <Icon style={styles.drawerItemIcon} name="settings" />
              <Text style={styles.drawerItemName}>Settings</Text>
            </Left>
          </ListItem> */}

          <ListItem
            Icon
            button
            noBorder
            onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'MainScreen' })}>
            <Left style={styles.drawerLeftContent}>
              <Icon style={styles.drawerItemIcon} name="log-out" />
              <Text style={styles.drawerItemName}>Sign Out</Text>
            </Left>
          </ListItem>

        </Content>
      </Container>

    // <View>
    //   <TouchableHighlight
    //     onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'MainScreen' })}
    //   >
    //     <Text style={{ marginTop: 32 }}>Home</Text>
    //   </TouchableHighlight>
    //   <TouchableHighlight
    //     onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Page1Screen' })}
    //   >
    //     <Text>Go To 1 page</Text>
    //   </TouchableHighlight>
    //   <TouchableHighlight
    //     onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Page2Screen' })}
    //   >
    //     <Text>Go To 2 page</Text>
    //   </TouchableHighlight>
    //   <TouchableHighlight
    //     onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Page3Screen' })}
    //   >
    //     <Text>Go To 3 page</Text>
    //   </TouchableHighlight>
    //   <TouchableHighlight
    //     onPress={() => this.props.navigation.dispatch({ type: 'Navigation/NAVIGATE', routeName: 'Page4Screen' })}
    //   >
    //     <Text>Go To 4 page</Text>
    //   </TouchableHighlight>
    // </View>
    );
  }
}

export default SideBar;
