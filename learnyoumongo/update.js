var mongodb = require('mongodb').MongoClient

var url = "mongodb://localhost:27017/learnyoumongo"
mongodb.connect(url, function (err, db) {
  if (err) throw err

  var users = db.collection('users')
  users.update({
    username: "tinatime"
  }, {
    $set {
      age: 40
    }
  }, function (err) {
    if (error) throw err
    db.close()
  })
})
