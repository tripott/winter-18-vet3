const { getDoc, addDoc, deleteDoc, updateDoc } = require('../lib/dal-helper')
const { getCategories } = require('../dal')
const slugify = require('slugify')

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
    req.body.type = 'category'
    req.body._id = `${req.body.type}_${slugify(req.body.shortName, {
      lower: true
    })}`
    addDoc(req.body).then(doc => res.send(doc))
  })
  app.delete('/categories/:id', (req, res) => {
    deleteDoc(req.params.id).then(doc => res.send(doc))
  })
  app.put('/categories/:id', (req, res) => {
    updateDoc(req.body).then(doc => res.send(doc))
  })
}
