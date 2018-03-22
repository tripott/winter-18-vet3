import {
  CHG_VALIDATION_FORM_DATA,
  CLEAR_VALIDATION_FORM_DATA
} from '../constants'

import { merge } from 'ramda'
import personValidationErrors from '../validations/person'
import isValid from '../validations/is-valid'

const defaultState = {
  lastName: 'Addams',
  addressStreet: '1313 Mockingbird Lane',
  email: 'gomez@addamsfamily.com',
  isSuperHero: false,
  isFormValid: false,
  errors: {
    lastName: null,
    addressStreet: null,
    email: null,
    isSuperHero: null
  }
}

const initialErrors = personValidationErrors(defaultState)
const validForm = isValid(initialErrors)

const initialState = merge(defaultState, {
  errors: initialErrors,
  isFormValid: validForm
})

export default (state = initialState, action) => {
  switch (action.type) {
    case CHG_VALIDATION_FORM_DATA:
      // get the form input change merged into existing state
      const newState = merge(state, action.payload)

      // check for validation errors which produces a new error object.
      //   merge new error object into new state before emitting new state.
      const initialErrors = personValidationErrors(newState)

      // see if form is valid.
      const validForm = isValid(initialErrors)
      console.log('validForm', validForm)
      return merge(newState, { errors: initialErrors, isFormValid: validForm })

    case CLEAR_VALIDATION_FORM_DATA:
      return {}
    default:
      return state
  }
}
