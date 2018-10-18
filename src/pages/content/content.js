import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';

class Content extends Component {
  config = {
    navigationBarTitleText: '商家介绍'
  }

  render () {
    return (
      <View>商家内容</View>
    )
  }
}

export default Content
