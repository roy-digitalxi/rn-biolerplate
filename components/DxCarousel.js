import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import SlideItem from '../screens/Home/components/container/SlideItem';

class DxCarousel extends Component {
  static propTypes = {
    slideData: PropTypes.array,
  }

  renderItem = slideItem => (
    <SlideItem slide={slideItem} />
  )

  render() {
    const { slideData } = this.props;
    // Screen Width
    const screenWidth = Dimensions.get('window').width;
    // 75% width of the screenwidth
    const itemValueInPercentage = (75 * screenWidth) / 100;
    // Rounding of the value
    const itemWidth = Math.round(itemValueInPercentage);
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={slideData || []}
        renderItem={this.renderItem}
        sliderWidth={ screenWidth }
        itemWidth={itemWidth + 20 * 2}
        parallax={false}
        layout={'default'}
      />
    );
  }
}

export default DxCarousel;
