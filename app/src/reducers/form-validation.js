import {
  CHG_VALIDATION_FORM_DATA,
  CLEAR_VALIDATION_FORM_DATA
} from '../constants'

import { merge } from 'ramda'

export default (state = {}, action) => {
  switch (action.type) {
    case CHG_VALIDATION_FORM_DATA:
      return merge(state, action.payload)

    case CLEAR_VALIDATION_FORM_DATA:
      return {}
    default:
      return state
  }
}
