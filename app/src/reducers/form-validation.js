import {
  CHG_VALIDATION_FORM_DATA,
  CLEAR_VALIDATION_FORM_DATA
} from '../constants'

import { merge } from 'ramda'

import personValidationErrors from '../validations/person'
import isValid from '../validations/is-valid'

const defaultState = {
  lastName: '',
  isSuperHero: false,
  email: '',
  addressStreet: '',
  isFormValid: null,
  errors: {
    lastName: null,
    isSuperHero: null,
    email: null,
    addressStreet: null
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
      const newState = merge(state, action.payload)
      const initialErrors = personValidationErrors(newState)
      const validForm = isValid(initialErrors)
      return merge(newState, { errors: initialErrors, isFormValid: validForm })

    case CLEAR_VALIDATION_FORM_DATA:
      return {}
    default:
      return state
  }
}
