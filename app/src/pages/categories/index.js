import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import List from 'material-ui/List'
import CategoryListItem from '../../components/CategoryListItem'

const Categories = props => {
  // props.categories
  return (
    <div>
      <List>
        {map(c => <CategoryListItem category={c} />, props.categories)}
      </List>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

const connector = connect(mapStateToProps)

export default connector(Categories)
