const slugify = require('slugify')
const { toLower } = require('ramda')

module.exports = doc => {
  console.log('DOCS: ', doc)
  return `${toLower(doc.type)}_${slugify(doc.name.replace(/^a|^the/i, ''), {
    lower: true
  })}`
}
