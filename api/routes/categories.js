const {
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  bulkUpdate
} = require('../lib/dal-helper')
const { getCategories, getResources } = require('../dal')
const slugify = require('slugify')
const { map, filter, compose, set, lensProp } = require('ramda')

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
    //updateResourceNull(req.params.id)
    deleteDoc(req.params.id).then(doc =>
      getResources({
        include_docs: true,
        startkey: 'resource_',
        endkey: 'resource_\ufff0'
      })
        .then(resources => res.send(resources))
        .then(doc =>
          compose(
            map(doc => set(lensProp('categoryId'), null, doc), data),
            filter(doc => doc.categoryId === req.params.id)
          )(doc)
        )
        .then(docs => bulkUpdate(docs))
    )
  })
  app.put('/categories/:id', (req, res) => {
    console.log('REQ BODY IS', req.body)
    return updateDoc(req.body).then(doc => res.send(doc))
  })
}
