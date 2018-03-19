import React from 'react'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import { Link } from 'react-router-dom'
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

const ResourceListItem = props => {
  console.log('proooops', props)
  const { name, shortDesc } = props.resource

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
    <div>
      <ListItem>
        <Link to={`/resources/${props.resource._id}`}>
          <Avatar>{avatarLetter}</Avatar>
          <ListItemText primary={name} secondary={shortDesc} />
        </Link>
      </ListItem>
      <Divider />
    </div>
  )
}

export default ResourceListItem
