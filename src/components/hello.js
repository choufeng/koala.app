import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Swiper, SwiperItem } from 'taro-ui';

class Hello extends Component {
  render () {
    return (
      <View>
        <Swiper
          className='swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular='true'
          autoplay='true'
        >
          <SwiperItem>
            <View>1</View>
          </SwiperItem>
          <SwiperItem>
            <View>2</View>
          </SwiperItem>
          <SwiperItem>
            <View>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default Hello
