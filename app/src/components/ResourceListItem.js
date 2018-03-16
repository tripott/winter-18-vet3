import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import {
  toLower,
  split,
  head,
  compose,
  toUpper,
  slice,
  join,
  drop,
  contains
} from 'ramda'
import { Link } from 'react-router-dom'

const ResourceListItem = props => {
  const { name, shortDesc, _id } = props.resource

  const removeArticles = arrWords => {
    return contains(head(arrWords), ['the', 'a', 'an'])
      ? drop(1, arrWords)
      : arrWords
  }

  const avatarLetter = compose(
    toUpper,
    slice(0, 1),
    join(' '),
    removeArticles,
    split(' '),
    toLower
  )(name)

  return (
    <Link
      to={`/resources/${_id}`}
      style={{
        textDecoration: 'none',
        color: 'black'
      }}
    >
      <ListItem>
        <Avatar>{avatarLetter}</Avatar>
        <ListItemText primary={name} secondary={shortDesc} />
      </ListItem>
      <Divider />
    </Link>
  )
}

export default ResourceListItem
