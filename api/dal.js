const { allDocs, getDoc } = require('./lib/dal-helper')

const getResources = options => allDocs(options || { include_docs: true })

const getResource = resourceId => getDoc(resourceId)

const getCategories = options => allDocs(options || { include_docs: true })

const dal = {
  getResource,
  getResources,
  getCategories
}

module.exports = dal
