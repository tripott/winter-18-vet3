<<<<<<< HEAD
const { getDoc } = require('../lib/dal-helper')
=======
const { getDoc, addDoc, deleteDoc } = require('../lib/dal-helper')
>>>>>>> 6a4419f... delete workin kinda
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
<<<<<<< HEAD
=======
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
>>>>>>> 6a4419f... delete workin kinda
}
