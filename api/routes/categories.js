const { getDoc } = require('../lib/dal-helper')
const { getCategories } = require('../dal')

module.exports = app => {
  app.get('/categories', (req, res) => {
    getCategories({
      include_docs: true,
      startkey: 'category_',
      endkey: 'category_\ufff0'
    }).then(categories => res.send(categories))
  })
  app.get('/categories/:id', (req, res) => {
    getDoc(req.params.id).then(doc => res.send(doc))
  })
  app.post('/categories', (req, res) => {
    addDoc(req.body).then(doc => res.send(doc))
  })
}
