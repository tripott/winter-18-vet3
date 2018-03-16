import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import List from 'material-ui/List'
import CategoryListItem from '../../components/CategoryListItem'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed !important',
    right: '15px !important',
    bottom: '15px !important',
    margin: 0,
    padding: 0
  }
})

const Categories = props => {
  const { classes, categories } = props
  return (
    <div style={{ marginTop: '56px' }}>
      <MenuAppBar title="Categories" />
      <List>{map(c => <CategoryListItem category={c} />, categories)}</List>
      <Link to="/resources/new">
        <Button
          className={classes.button}
          variant="fab"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Button>
      </Link>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    categories: state.categories
  }
}

const connector = connect(mapStateToProps)

export default withDrawer(connector(withStyles(styles)(Categories)))
