import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './join.styl'

class Join extends Component {
  render () {
    return (
      <View className='join'>
        <AtButton type='primary'>我要加入商圈</AtButton>
      </View>
    )
  }
}

export default Join
