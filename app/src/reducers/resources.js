import {
  SET_RESOURCES,
  GET_RESOURCE,
  CONFIRM_DELETE_RESOURCE
} from '../constants'
import { merge, not } from 'ramda'

/*
A reducer named "resources" would be responsible
for managing the list of resources.
*/

export const resources = (state = [], action) => {
  switch (action.type) {
    case SET_RESOURCES:
      return action.payload
    default:
      return state
  }
}

export const resource = (state = {}, action) => {
  switch (action.type) {
    case GET_RESOURCE:
      return action.payload
    case CONFIRM_DELETE_RESOURCE:
      return merge(state, { confirmDelete: not(state.confirmDelete) })
    default:
      return state
  }
}
