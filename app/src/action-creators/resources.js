import fetch from 'isomorphic-fetch'
import { SET_RESOURCES } from '../constants'
const url = 'http://localhost:5000'

/*
getResources()
- use fetch to make a GET to /resources
- take array of resource documents and turn them into json
- dispatch an action containing the resources as a payload:
	dispatch({type: SET_RESOURCES, payload: resources})
*/
export const getResources = async (dispatch, getState) => {
  const resources = await fetch(`${url}/resources`).then(res => res.json())
  dispatch({ type: SET_RESOURCES, payload: resources })
}
