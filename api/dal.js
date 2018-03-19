const { allDocs, getDoc, postDoc } = require('./lib/dal-helper')

const getResources = options => allDocs(options || { include_docs: true })

const getResource = resourceId => getDoc(resourceId)

const getCategories = options => allDocs(options || { include_docs: true })

const postDoc = doc => postDoc(doc)

const dal = {
  getResource,
  getResources,
  getCategories
}

module.exports = dal
