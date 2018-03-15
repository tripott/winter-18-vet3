import React from 'react'
import { connect } from 'react-redux'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import MenuAppBar from '../../components/MenuAppBar'

const Category = props => {
  console.log('props', props)
  return (
    <div>
      <MenuAppBar />
      <div>
        <ListItem>
          //{' '}
          <ListItemAvatar>
            // <Avatar />
            <ListItemText
              primary={props.category.shortName}
              secondary={props.category.shortDesc}
            />
            //{' '}
          </ListItemAvatar>
        </ListItem>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    category: state.categories
  }
}

const connector = connect(mapStateToProps)

export default connector(Category)
