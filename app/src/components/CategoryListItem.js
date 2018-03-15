import React from 'react'
import Icon from 'material-ui/Icon'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'

const CategoryListItem = props => {
  const { name, shortDesc, icon } = props.category

  return (
    <div>
      <ListItem>
        <Icon>{icon}</Icon>
        <ListItemText primary={name} secondary={shortDesc} />
      </ListItem>
      <Divider />
    </div>
  )
}

export default CategoryListItem
