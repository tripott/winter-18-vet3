import React from 'react'
import { withStyles } from 'material-ui/styles'
import MenuItem from 'material-ui/Menu/MenuItem'
import TextField from 'material-ui/TextField'
import PropTypes from 'prop-types'
import MenuAppBar from '../../components/MenuAppBar'
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
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          margin="normal"
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
      </form>
    </div>
  )
}

export default withStyles(styles)(AddCategory)
