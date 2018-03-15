const { getCategories } = require('../dal')

module.exports = app => {
  app.get('/categories', (req, res) => {
    getCategories({
      include_docs: true,
      startkey: 'category_',
      endkey: 'category_\ufff0'
    }).then(categories => res.send(categories))
  })
}
