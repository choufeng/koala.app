import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';

class Join extends Component {
  render () {
    return (
      <View>
        <AtButton type='primary'>我要加入商圈</AtButton>
      </View>
    )
  }
}

export default Join
