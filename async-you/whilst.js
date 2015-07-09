var http = require('http')
  , async = require('async')
  , url = process.argv[2]

var current = ''
async.whilst(function () {
    return current != 'meerkat'
  }, function (callback) {
    callback()
  }, function (err) {
    http.get(url, function(res) {
      var body = ''
      res.on('data', function(chunk) {
        body += chunk
      })
      res.on('end', function() {
      })
    })
  }
)
