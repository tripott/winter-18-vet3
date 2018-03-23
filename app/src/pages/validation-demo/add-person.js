import React from 'react'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  FormControlLabel
} from 'material-ui/Form'

import MenuAppBar from '../../components/MenuAppBar'
import Button from 'material-ui/Button'
import Switch from 'material-ui/Switch'
import { connect } from 'react-redux'
import { changeFormValidation } from '../../action-creators/form-validation'
import { is, not } from 'ramda'

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
  const {
    lastName,
    addressStreet,
    email,
    isSuperHero,
    isFormValid
  } = props.formValidationData

  const { errors } = props.formValidationData

  return (
    <div style={{ marginTop: '56px' }}>
      <MenuAppBar
        {...this.props}
        showBackArrow={true}
        title="Form Validation Demo"
      />

      <FormControl className={classes.formControl} error={errors.lastName}>
        <InputLabel htmlFor="name-simple">Last Name</InputLabel>
        <Input
          id="name-simple"
          value={lastName}
          onChange={e => props.onChange('lastName', e.target.value)}
        />
        <FormHelperText id="addressStreet-helper-text">
          {errors.lastName
            ? 'Required'
            : lastName ? '' : 'Enter your last name'}
        </FormHelperText>
      </FormControl>

      <FormControl
        className={classes.formControl}
        aria-describedby="name-helper-text"
        error={errors.addressStreet}
      >
        <InputLabel htmlFor="addressStreet-helper">Street</InputLabel>
        <Input
          id="addressStreet-helper"
          value={addressStreet}
          onChange={e => props.onChange('addressStreet', e.target.value)}
        />
        <FormHelperText id="addressStreet-helper-text">
          {errors.addressStreet
            ? 'Required'
            : addressStreet ? '' : 'Enter your street address'}
        </FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl} error={errors.email}>
        <InputLabel htmlFor="email-disabled">Email</InputLabel>
        <Input
          id="email-disabled"
          type="email"
          value={email}
          onChange={e => props.onChange('email', e.target.value)}
        />
        <FormHelperText>
          {errors.email ? 'Required' : email ? '' : 'Enter your email address'}
        </FormHelperText>
      </FormControl>

      <div>
        <FormControl className={classes.formControl} error={errors.isSuperHero}>
          <FormLabel component="legend">Superhero?</FormLabel>
          <FormControlLabel
            control={
              <Switch
                value="isSuperHero"
                checked={isSuperHero}
                onChange={e => props.onChange('isSuperHero', e.target.checked)}
              />
            }
            label=""
          />
          <FormHelperText>
            {errors.isSuperHero
              ? 'Required'
              : isSuperHero ? '' : 'toggle if youre awesome'}
          </FormHelperText>
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
          disabled={not(isFormValid)}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    formValidationData: state.formValidationData
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => dispatch(changeFormValidation(field, value))
    // ,
    // onSubmit: (history, formData) => e => {
    //   e.preventDefault()
    //   dispatch(someActionCreateor(history, formData))
    // }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(withStyles(styles)(AddFormValidation))
