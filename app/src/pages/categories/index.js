import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'
import List from 'material-ui/List'
import CategoryListItem from '../../components/CategoryListItem'
import withDrawer from '../../components/Drawer'
import MenuAppBar from '../../components/MenuAppBar'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import { withStyles } from 'material-ui/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    display: 'inlineBlock',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
    padding: 0
  },
  pageMargin: { marginTop: '56px' }
})

const Categories = props => {
  const { categories, classes } = props
  return (
    <div className={classes.pageMargin}>
      <MenuAppBar title="Categories" />
      <List>{map(c => <CategoryListItem category={c} />, categories)}</List>
      <Link to="/categories/new">
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
