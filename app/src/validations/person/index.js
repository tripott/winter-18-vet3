import { personAttributeValidators } from './personAttributeValidators'

export default function personValidationErrors(person) {
  return Object.keys(personAttributeValidators).reduce((errors, validator) => {
    errors[validator] = !personAttributeValidators[validator](person)
    return errors
  }, {})
}
