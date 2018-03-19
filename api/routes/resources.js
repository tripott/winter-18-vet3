const { getResources, getResource } = require('../dal')
const pkGen = require('./pkGen')

module.exports = app => {
  app.get('/resources', (req, res) => {
    console.log('GET /resources')

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
    const newResource = propOr(null, 'body', req)
    if (newResource) {
      res.send({
        id: `resource_${newName}`,
        name: req.body.name,
        value: req.body.value
      })
    } else {
      res.status(400).send({ ok: false })
    }
  })
}
