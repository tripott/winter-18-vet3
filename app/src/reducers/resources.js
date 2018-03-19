import { SET_RESOURCES, GET_RESOURCE, CHG_CURRENT_RESOURCE } from '../constants'
import { merge } from 'ramda'

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
    default:
      return state
  }
}

export const currentResource = (state = '', action) => {
  switch (action.type) {
    case CHG_CURRENT_RESOURCE:
      return merge(state, action.payload)
    default:
      return state
  }
}
