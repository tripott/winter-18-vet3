import React from 'react'
import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import MenuAppBar from '../../components/MenuAppBar'
import { FormControl } from 'material-ui/Form'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeCategory } from '../../action-creators/categories'
/* need to add in each of the following PROPS
{
  name: '',
  shortName: '',
  desc:'',
  icon: '',
  type: '',
}
WE WILL HARD CODE THE ID =  _id: 'category_basic-needs-assistance'
*/

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
})
/*
- need back arrow
-
*/
export const AddCategory = props => {
  const { classes } = props
  return (
    <div style={{ marginTop: '56px' }}>
      <MenuAppBar title="Add a Category" showBackArrow={true} {...props} />
      <form>
        <FormControl
          className={classes.container}
          noValidate
          autoComplete="off"
          // onSubmit={e => props.onSubmit(props.history, props.currentCategory)}
          {...props.currentCategory}
        >
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            margin="normal"
            onChange={props.onChange}
          />
          <TextField
            id="shortName"
            label="Short Name"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="desc"
            label="Description"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="icon"
            label="Icon"
            className={classes.textField}
            margin="normal"
          />
        </FormControl>
        <Link to="/categories">
          <Button className={classes.button}>Cancel</Button>
        </Link>
        <Button variant="raised" className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    category: state.category
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => dispatch(changeCategory(field, value))
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(AddCategory))
