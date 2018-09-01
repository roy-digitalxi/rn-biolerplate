import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

// Libraries
import {
  ListItem,
} from 'react-native-elements';

class DxListItem extends Component {
    handlePress = () => {
      this.props.handlePress();
    }

    render() {
      const {
        itemContainerStyle,
        tagStyle,
      } = styles;

      const {
        chevron,
        isCompleted,
        isRecommended,
        btnContent,
      } = this.props;

      let leftElement = <View />;
      if (isCompleted) {
        leftElement = <View style={Object.assign({}, tagStyle, { backgroundColor: '#5BB99E' })} />;
      } else if (isRecommended) {
        leftElement = <View style={Object.assign({}, tagStyle, { backgroundColor: '#000000' })} />;
      }

      return (
            // <ListItem
            //     containerStyle={itemContainerStyle}
            //     chevron={chevron}
            //     leftElement={leftElement}
            //     onPress={() => { this.handlePress(); }}
            //     title={btnContent}
            // />
            <View>
              <Text>{btnContent}</Text>
            </View>

      );
    }
}

const styles = {

  itemContainerStyle: {
    position: 'relative',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#DCE0E4',
  },
  tagStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 48,
    width: 5,
  },
};

export default DxListItem;
