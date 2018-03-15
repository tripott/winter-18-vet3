import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import List from 'material-ui/List'
import CategoryListItem from '../../components/CategoryListItem'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'

const Categories = props => {
  // props.categories
  return (
    <div style={{ marginTop: '56px' }}>
      <MenuAppBar title="Categories" />
      <List>
        {map(c => <CategoryListItem category={c} />, props.categories)}
      </List>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('state in index.js', state)
  return {
    categories: state.categories
  }
}

const connector = connect(mapStateToProps)

export default withDrawer(connector(Categories))
