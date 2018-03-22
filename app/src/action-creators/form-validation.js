import {
  CHG_VALIDATION_FORM_DATA,
  CLEAR_VALIDATION_FORM_DATA
} from '../constants'

export const changeFormValidation = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_VALIDATION_FORM_DATA, payload: { [field]: value } })
}

export const clearFormValidation = (dispatch, getState) => {
  dispatch({ type: CLEAR_VALIDATION_FORM_DATA })
}
