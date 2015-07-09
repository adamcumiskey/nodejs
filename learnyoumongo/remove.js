var mongodb = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/learnyoumongo"
mongodb.connect(url, function(err, db) {
  if (error) throw err
  var collection = db.collection(process.argv[2])
  collection.remove({
    _id: process.argv[3]
  }, function(err) {
    if (err) throw err
    db.close()
  })
})
