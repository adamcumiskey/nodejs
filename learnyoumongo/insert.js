var mongodb = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/learnyoumongo"

var person = {
  firstName: process.argv[2].toString(),
  lastName:  process.argv[3].toString()
}

mongodb.connect(url, function(err, db) {
  if (err) throw err
  var docs = db.collection('docs')
  docs.insert(person, {w:1}, function(err, records) {
    if (err) throw err
    console.log(JSON.stringify(person))
    db.close()
  })
})
