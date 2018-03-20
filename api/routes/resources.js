const { getResources, getResource } = require('../dal')

module.exports = app => {
  app.get('/resources', (req, res) => {
    getResources({
      include_docs: true,
      startkey: 'resource_',
      endkey: 'resource_\ufff0'
    })
      .then(resources => res.send(resources))
      .catch(err => console.log(err))
  })
  app.get('/resources/:id', (req, res) => {
    getResource(req.params.id).then(resource => res.send(resource))
  })
  app.post('/resources', (req, res) => {
    getResource(req.params.id).then(resource => res.send(resource))
  })
}
