const slugify = require('slugify')
const { compose, toLower } = require('ramda')

const newName = x => {
  compose(slugify, toLower)(x)
}

module.exports = newName
