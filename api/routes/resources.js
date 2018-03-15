const { getResources } = require('../dal')

module.exports = app => {
  app.get('/resources', (req, res) => {
    console.log('GET /resources')

    getResources({
      include_docs: true,
      startkey: 'resource_',
      endkey: 'resource_\ufff0'
    }).then(resources => res.send(resources))
  })
}
