import React from 'react'
import Icon from 'material-ui/Icon'
import { ListItem, ListItemText } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'

const CategoryListItem = props => {
  const { name, shortDesc, icon, _id } = props.category

  return (
    <div>
      <Link
        to={`/categories/${_id}`}
        style={{
          textDecoration: 'none',
          color: 'black'
        }}
      >
        <ListItem>
          <Icon>{icon}</Icon>
          <ListItemText primary={name} secondary={shortDesc} />
        </ListItem>
        <Divider />
      </Link>
    </div>
  )
}

export default CategoryListItem
