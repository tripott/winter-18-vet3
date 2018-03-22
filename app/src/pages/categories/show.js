import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import { getCategory, deleteCategory } from '../../action-creators/categories'
import CategoryListItem from '../../components/CategoryListItem'
import ResourceListItem from '../../components/ResourceListItem'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import { compose, filter, map } from 'ramda'
import List from 'material-ui/List'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import { TOGGLE_DELETE } from '../../constants'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: theme.spacing.unit * 3
  }),
  cleaned: {
    textDecoration: 'none'
  }
})

class Category extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCategory(id)
  }

  render() {
    const props = this.props
    if (props.category._id !== props.match.params.id) {
      return <h1>Loading Category...</h1>
    }
    const { classes } = props
    return (
      <div>
        <div>
          <MenuAppBar {...this.props} showBackArrow={true} title="Category" />
          <Paper className={classes.root} elevation={2}>
            <CategoryListItem category={props.category} />
            <Typography style={{ paddingTop: '8px' }} component="p">
              {props.category.desc}
            </Typography>
          </Paper>
        </div>
        <List>
          {compose(
            map(r => <ResourceListItem resource={r} />),
            filter(r => props.category._id == r.categoryId)
          )(props.resources)}
        </List>
        <Link
          style={{ textDecoration: 'none' }}
          to={`/categories/${props.category._id}/edit`}
        >
          <Button color="primary">Edit</Button>
        </Link>
        <Button color="secondary" onClick={props.toggleDelete}>
          Delete
        </Button>
        <Dialog
          open={props.category.toggleDelete}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Are you sure you want to delete?!'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Confirm Delete
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.toggleDelete} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() =>
                props.deleteCategory(props.category._id, props.history)
              }
              color="primary"
              autoFocus
            >
              Confirm Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.category,
    resources: state.resources
  }
}
const mapActionsToProps = dispatch => {
  return {
    getCategory: id => dispatch(getCategory(id)),
    toggleDelete: () => dispatch({ type: TOGGLE_DELETE }),
    deleteCategory: (id, history) => dispatch(deleteCategory(id, history))
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(Category))
