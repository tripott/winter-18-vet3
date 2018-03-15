const { allDocs } = require('./lib/dal-helper')

const getResources = options => allDocs(options || { include_docs: true })

const dal = {
  getResources
}

module.exports = dal
