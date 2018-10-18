import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import ItemList from './itemlist'
import CardList from './cardlist'

class ItemTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 0
    }
  }
  onChooseTab = (e) => {
    console.log(e)
    this.setState({
      current: e
    })
  }
  render () {
    const { tabs, data } = this.props
    return (
      <View>
        <AtTabs
          current={this.state.current}
          tabList={tabs}
          onClick={this.onChooseTab}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <CardList data={data[0]} />
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <ItemList data={data[1]}></ItemList>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default ItemTabs