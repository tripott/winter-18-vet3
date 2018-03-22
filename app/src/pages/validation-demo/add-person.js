import React from 'react'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import {
  FormControl,
  FormHelperText,
  FormGroup,
  FormLabel,
  FormControlLabel
} from 'material-ui/Form'

import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import { is, not } from 'ramda'
import Switch from 'material-ui/Switch'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit
  }
})

const AddFormValidation = props => {
  const { classes } = props

  return (
    <div style={{ marginTop: '56px' }}>
      <MenuAppBar
        {...this.props}
        showBackArrow={true}
        title="Form Validation Demo"
      />
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="name-simple">Last Name</InputLabel>
        <Input id="name-simple" />
        <FormHelperText id="addressStreet-helper-text">
          Enter your last name
        </FormHelperText>
      </FormControl>
      <FormControl
        className={classes.formControl}
        aria-describedby="name-helper-text"
      >
        <InputLabel htmlFor="addressStreet-helper">Street</InputLabel>
        <Input id="addressStreet-helper" />
        <FormHelperText id="addressStreet-helper-text">
          Enter your street address
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="email-disabled">Email</InputLabel>
        <Input id="email-disabled" type="email" />
        <FormHelperText>Enter a valid email address</FormHelperText>
      </FormControl>
      <div>
        <FormControl className={classes.formControl}>
          <FormLabel component="legend">Superhero?</FormLabel>

          <FormControlLabel control={<Switch value="isSuperHero" />} label="" />
          <FormHelperText>Toggle this if you have superpowers.</FormHelperText>
        </FormControl>
      </div>
      <div>
        <Button
          onClick={this.clearForm}
          variant="raised"
          color="secondary"
          className={classes.button}
        >
          Clear
        </Button>

        <Button
          type="submit"
          variant="raised"
          color="primary"
          className={classes.button}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

// const mapStateToProps = state => {
//   return {
//     formValidationData: state.formValidationData
//   }
// }

// const mapActionsToProps = dispatch => {
//   return {
//     onChange: (field, value) => dispatch(changeFormValidation(field, value))
//     // ,
//     // onSubmit: (history, formData) => e => {
//     //   e.preventDefault()
//     //   dispatch(someActionCreateor(history, formData))
//     // }
//   }
// }

export default withStyles(styles)(AddFormValidation)
