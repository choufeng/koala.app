import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtCard } from 'taro-ui';
import './cardlist.styl'

class CardList extends Component {
  constructor(props) {
    super(props)
  }

  onClickItem (item) {
    Taro.navigateTo({
      url: '/pages/content/content'
    })
  }

  render() {
    const list = this.props.data
    return (
      <View>
        {
          list.map(item => (
            <View  className='cardlist-item' key={item}>
              <AtCard
                title='这里是标题'
                note='一个小测试'
                thumb={item.image}
                extra='额外信息'
                onClick={this.onClickItem.bind(this, item)}
              >
              {item.value}
              </AtCard>
            </View>
          ))
        }
      </View>
    )
  }
}

export default CardList
