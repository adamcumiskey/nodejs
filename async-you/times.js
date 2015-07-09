var http = require('http')
var async = require('async')

var options = {
  host: process.argv[2],
  port: process.argv[3],
}

var createUser = function(id, callback) {
  var user = {
    user_id: id
  }

  options.path = '/users/create'
  options.method = 'POST'

  var request = http.request(options, function(res) {
    res.on('data', function() {
    })
    res.on('end', function() {
      callback(null, user)
    })
  }).on('err', function(err) {
    callback(err)
  })
  request.write(JSON.stringify(user))
  request.end()
}

async.series({
  post: function(callback) {
    async.times(5, function(n, next) {
      createUser(++n, function(err, data) {
        next(err, data)
      })
    },
    function(err, users) {
      callback(err, null)
    })
  },

  get: function(callback) {
    options.path = '/users'
    options.method = 'GET'
    var request = http.request(options, function(res) {
      var body = ''
      res.on('data', function(chunk) {
        body += chunk
      })
      res.on('end', function() {
        callback(null, body)
      })
    }).on('error', function(err) {
      callback(err)
    })
    request.end()
  }
},
function(err, results) {
  if (err) throw err
  console.log(results.get);
})
