import Taro, { Component } from '@tarojs/taro';
import { View, WebView } from '@tarojs/components';

class Content extends Component {
  config = {
    navigationBarTitleText: '商家介绍'
  }

  render () {
    return (
      <View>
        <View>商家内容</View>
        <WebView src='http://www.baidu.com'></WebView>
      </View>
    )
  }
}

export default Content
