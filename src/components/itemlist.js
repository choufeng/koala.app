import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';

class ItemList extends Component {
  constructor(props) {
    super(props)
  }

  onClickItem = (item, e) => {
    console.log(`item`, item)
    console.log(`e`, e)
  }

  render () {
    const list = this.props.data
    return (
      <View>
        <AtList>
          {
            list.map(item => (
              <AtListItem title={item.value} thumb={item.image} key={item.value} onClick={this.onClickItem.bind(this, item)} arrow='right' />
            ))
          }
        </AtList>
      </View>
    )
  }
}

export default ItemList
