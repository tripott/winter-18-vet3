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
import { changeCategory, addCategory } from '../../action-creators/categories'
import Icon from 'material-ui/Icon'
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
  },
  button: {
    margin: theme.spacing.unit
  }
})
/*
- need back arrow
-
*/
export const AddCategory = props => {
  const { classes } = props
  const icons = [{ value: 'call end' }, { value: 'pets' }, { value: 'email' }]
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
            value={props.category.name}
            onChange={e => props.onChange('name', e.target.value)}
          />
          <TextField
            id="shortName"
            label="Short Name"
            className={classes.textField}
            margin="normal"
            value={props.category.shortName}
            onChange={e => props.onChange('shortName', e.target.value)}
          />
          <TextField
            id="shortDesc"
            label="Description"
            className={classes.textField}
            margin="normal"
            value={props.category.desc}
            onChange={e => props.onChange('shortDesc', e.target.value)}
          />
          <TextField
            id="shortDesc"
            label="Short Description"
            className={classes.textField}
            margin="normal"
            value={props.category.shortDesc}
            onChange={e => props.onChange('shortDesc', e.target.value)}
          />
          <TextField
            id="icon"
            select={true}
            label="Icon"
            className={classes.textField}
            margin="normal"
            value={props.category.icon}
            onChange={e => props.onChange('icon', e.target.value)}
            ///
            SelectProps={{
              native: true,
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select an icon"
            margin="normal"
          >
            {icons.map(option => (
              <option key={option.value} value={option.value}>
                <Icon>{option.value}</Icon>
              </option>
            ))}
          </TextField>
        </FormControl>
        <Button
          variant="raised"
          component="span"
          // color="primary"
          className={classes.button}
          onClick={props.onSubmit(props.history, props.category)}
        >
          Submit
        </Button>
        <Link to="/categories">
          <Button className={classes.button}>Cancel</Button>
        </Link>
      </form>
    </div>
  )
}

/* <Button>Submit</Button>*/

const mapStateToProps = state => {
  return {
    category: state.addCategoryForm
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => dispatch(changeCategory(field, value)),
    onSubmit: (history, category) => e => {
      e.preventDefault()
      dispatch(addCategory(category, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(AddCategory))
