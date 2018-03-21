const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
PouchDB.plugin(require('pouchdb-find'))
const HTTPError = require('node-http-error')
const { pluck } = require('ramda')

console.log(`The db is ${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

const allDocs = options => {
  console.log('dalHelper allDocs() options', options)

  return db.allDocs(options).then(result => pluck('doc', result.rows))
}

const getDoc = id => db.get(id)
<<<<<<< HEAD

const dalHelper = {
  allDocs,
  getDoc
=======
const addDoc = doc => db.put(doc)
const deleteDoc = id => db.get(id).then(doc => db.remove(doc))
const dalHelper = {
  allDocs,
  getDoc,
  addDoc,
  deleteDoc
>>>>>>> 6a4419f... delete workin kinda
}

module.exports = dalHelper
