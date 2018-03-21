import React from 'react'
import { connect } from 'react-redux'
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import MenuAppBar from '../../components/MenuAppBar'
import { getCategory, deleteCategory } from '../../action-creators/categories'
import CategoryListItem from '../../components/CategoryListItem'
<<<<<<< HEAD
=======
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
import { TOGGLE_DELETE } from '../../constants'
>>>>>>> 6a4419f... delete workin kinda
class Category extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getCategory(id)
  }

  render() {
    console.log('*** RENDER ***')
    const props = this.props
    console.log('PROPS', props)
    return (
<<<<<<< HEAD
      <div style={{ marginTop: '56px' }}>
        <MenuAppBar title="Category" />
        <CategoryListItem category={props.category} />
        <p>{props.category.desc}</p>
=======
      <div>
        <div style={{ marginTop: '56px' }}>
          <MenuAppBar {...this.props} showBackArrow={true} title="Category" />
          <CategoryListItem category={props.category} />
          <p>{props.category.desc}</p>
        </div>
        <Button color="primary">Edit</Button>
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
              Confirming delete will probably delete
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
>>>>>>> 6a4419f... delete workin kinda
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  return {
    category: state.category
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

export default connector(Category)
