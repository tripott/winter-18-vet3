export const personAttributeValidators = {
  lastName: lastNameValid,
  addressStreet: addressStreetValid,
  email: emailValid,
  isSuperHero: isSuperHeroValid
}

function lastNameValid(person) {
  return person.lastName && person.lastName.length > 0
}

function addressStreetValid(person) {
  return person.addressStreet && person.addressStreet.length > 0
}

function emailValid(person) {
  return person.email && person.email.split('@')[1] === 'widgets.com'
}

function isSuperHeroValid(person) {
  return person.isSuperHero === true || person.isSuperHero === false
}
