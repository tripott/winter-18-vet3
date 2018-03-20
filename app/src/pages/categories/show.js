import React from 'react'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import { getCategory } from '../../action-creators/categories'
import CategoryListItem from '../../components/CategoryListItem'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from 'material-ui/Dialog'
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

    return (
      <div style={{ marginTop: '56px' }}>
        <MenuAppBar {...this.props} showBackArrow={true} title="Category" />
        <CategoryListItem category={props.category} />
        <p>{props.category.desc}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.category
  }
}
const mapActionsToProps = dispatch => {
  return {
    getCategory: id => dispatch(getCategory(id))
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Category)
