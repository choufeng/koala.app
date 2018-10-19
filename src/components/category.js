import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid } from 'taro-ui'

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onChooseCategory = this.onChooseCategory.bind(this)
  }

  onChooseCategory (item, index) {
    console.log(item, index)
    Taro.navigateTo({
      url: `/pages/list/list`
    })
  }

  isSquare (t) {
    return t ? 'square' : 'rect'
  }

  render () {
    return (
      <View>
        <AtGrid data={this.props.data} mode={this.isSquare(this.props.isRoot)} onClick={this.onChooseCategory} />
      </View>
    )
  }
}

export default Category
