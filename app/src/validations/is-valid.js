import { all, values } from 'ramda'

export default function isValid(errors) {
  return all(v => v === false, values(errors))
}
