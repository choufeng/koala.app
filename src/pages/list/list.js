import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Category } from '../../components'
import ItemTabs from '../../components/itemtabs'
import './list.styl';

class List extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor (props) {
    super(props)
    this.state = {
      list: [
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '美食天地'
        },
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '休闲娱乐'
        },
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '生活服务'
        },
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '家居建材'
        },
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '婚庆服务'
        },
        {
          image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
          value: '周边旅游'
        }
      ],
      list2: [
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '美食天地'
        },
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '休闲娱乐'
        },
        {
          image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
          value: '生活服务'
        }
      ]
    }
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const data = [this.state.list, this.state.list2]
    console.log(data)
    const tabs = [{title: '热门'}, {title: '新加入'}]
    return (
      <View className='list'>
        <Category isRoot={false} data={this.state.list} />
        <ItemTabs data={data} tabs={tabs} />
      </View>
    )
  }
}

export default List
