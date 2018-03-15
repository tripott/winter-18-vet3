import React from 'react'
import { connect } from 'react-redux'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import MenuAppBar from '../../components/MenuAppBar'
import { getCategory } from '../../action-creators/categories'

class Category extends React.Component {
  componentDidMount() {
    console.log('PROPS asdfasdfsadf', this.props)
    const id = this.props.match.params.id
    console.log('ID', id)
    this.props.getCategory(id)
  }
  render() {
    console.log('*** RENDER ***')
    const props = this.props
    console.log('PROPS', props)
    return (
      <div>
        <MenuAppBar />
        <div>
          <ListItem />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    category: state.category
  }
}
const mapActionsToProps = dispatch => {
  return {
    getCategory: id => dispatch(getCategory(id))
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Category)
