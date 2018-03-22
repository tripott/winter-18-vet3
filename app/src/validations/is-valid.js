import { all, values } from 'ramda'

export default function isValid(errors) {
  return all(v => v === false, values(errors))
}

/* native JS implementation
export default function isValid(errors) {
  return !Object.values(errors).some(err => err)
}
*/
