import {
  CHG_VALIDATION_FORM_DATA,
  CLEAR_VALIDATION_FORM_DATA
} from '../constants'

import { merge } from 'ramda'

import personValidationErrors from './validations/person'
import isValid from './validations/is-valid'

const defaultState = {
  lastName: '',
  isSuperHero: false,
  email: 'tom@tacobell.com',
  addressStreet: '111 Chalupa Circle',
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
      return merge(state, action.payload)

    case CLEAR_VALIDATION_FORM_DATA:
      return {}
    default:
      return state
  }
}
