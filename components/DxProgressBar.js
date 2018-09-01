import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

// constants
import * as Progress from 'react-native-progress';
import colors from '../constants/colors';

// Libraries

class DxProgressBar extends Component {
  static propTypes = {
    progress: PropTypes.number,
    isbottom: PropTypes.bool,
    record: PropTypes.number,
  }

  render() {
    const {
      hintWrapper,
      hintContainer,
      hint,
      container,
      scrollbar,
    } = styles;

    const scrolPosition = this.props.progress * Dimensions.get('window').width - 36 > 0 ? { left: this.props.progress * Dimensions.get('window').width - 36 } : { left: 0 };
    return (
            <View>
                {
                    !this.props.isbottom
                      ? (
                            <View style={hintWrapper}>
                                <View style={hintContainer}>
                                    <Text style={hint}>SCROLL DOWN TO VIEW MORE</Text>
                                </View>
                            </View>
                      )
                      : null
                }
                <View style={container}>
                    <View style={Object.assign({}, scrollbar, scrolPosition)} />
                    <Progress.Bar
                        color={colors.activeColor}
                        unfilledColor={colors.inactiveColor}
                        borderColor="transparent"
                        progress={this.props.record}
                        width={Dimensions.get('window').width}
                        height={4}
                        borderRadius={3}
                    />
                </View>
            </View>
    );
  }
}

const styles = {

  hintWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 18,
    marginBottom: 6,
  },
  hintContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 6,
    width: 200,
    height: 18,
  },
  hint: {
    color: colors.whiteColor,
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 18,
  },
  container: {
    position: 'relative',
  },
  scrollbar: {
    backgroundColor: colors.opacityColor,
    width: 36,
    height: 5,
    borderRadius: 3,
    position: 'absolute',
    top: 0,
    zIndex: 999,
  },
};

export default DxProgressBar;
