import fetch from 'isomorphic-fetch'
import { SET_RESOURCES, GET_RESOURCE, CHG_CURRENT_RESOURCE } from '../constants'
const url = 'http://localhost:5000'

/*
getResources()
- use fetch to make a GET to /resources
- take array of resource documents and t  urn them into json
- dispatch an action containing the resources as a payload:
	dispatch({type: SET_RESOURCES, payload: resources})
*/
export const getResources = async (dispatch, getState) => {
  const resources = await fetch(`${url}/resources`).then(res => res.json())
  dispatch({ type: SET_RESOURCES, payload: resources })
}

export const getResource = id => async (dispatch, getState) => {
  const resource = await fetch(`${url}/resources/${id}`).then(res => res.json())
  dispatch({ type: GET_RESOURCE, payload: resource })
}

export const addResource = (resource, history) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(resource)

  const result = await fetch(url, {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(getResource)
    history.push('/resources')
  }
}

export const chgResource = (field, value) => async (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_RESOURCE, payload: { [field]: value } })
}
