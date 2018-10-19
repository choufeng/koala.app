import Taro, { Component } from '@tarojs/taro';
import { View, WebView } from '@tarojs/components';

class VrView extends Component {
  config = {
    navigationBarTitleText: 'VR全景'
  }

  render () {
    return (
      <View>
        <WebView src='http://www.baidu.com'></WebView>
      </View>
    )
  }
}

export default VrView