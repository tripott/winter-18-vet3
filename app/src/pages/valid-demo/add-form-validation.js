import React from 'react'
import { withStyles } from 'material-ui/styles'
import Input, { InputLabel } from 'material-ui/Input'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { connect } from 'react-redux'
import MenuAppBar from '../../components/MenuAppBar'
import { changeFormValidation } from '../../action-creators/form-validation'
import Button from 'material-ui/Button'
import { is, not } from 'ramda'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    margin: theme.spacing.unit
  },
  submitButton: {
    margin: theme.spacing.unit,
    disabled: true
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

  const errors = props.formValidationData.errors

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
          value={email}
          type="email"
          onChange={e => props.onChange('email', e.target.value)}
        />
        <FormHelperText>
          {errors.email
            ? 'Required - must end in @widgets.com'
            : email ? '' : 'Enter a valid email address'}
        </FormHelperText>
      </FormControl>

      <FormControl
        className={classes.formControl}
        error={errors.isSuperHero}
        aria-describedby="name-error-text"
      >
        <InputLabel htmlFor="isSuperHero-error">
          Are you a superhero?
        </InputLabel>
        <Input
          id="isSuperHero-error"
          value={isSuperHero}
          onChange={e => props.onChange('isSuperHero', e.target.value)}
        />
        <FormHelperText id="isSuperHero-error-text">
          {errors.isSuperHero
            ? 'Required'
            : is(Boolean, isSuperHero) ? '' : 'select toggle'}
        </FormHelperText>
      </FormControl>
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
          className={classes.submitButton}
          disabled={not(isFormValid)}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

/*
<Button
  type="submit"
  variant="raised"
  color="primary"
  disabled
  className={classes.button}
>
  Submit
</Button>
*/
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

// <div className={classes.container}>
