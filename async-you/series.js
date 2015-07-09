var async = require('async')
var http = require('http')

async.series({
  requestOne: function(done) {
    httpGet(process.argv[2], done)
  },
  requestTwo: function(done) {
    httpGet(process.argv[3], done)
  }
},
function(err, results) {
  if (err) console.error(err)
  console.log(results);
})

function httpGet(url, done) {
  var body = ''
  http.get(url, function (res) {
    res.on('data', function(chunk) {
      body += chunk
    })
    res.on('end', function() {
      done(null, body)
    })
  }).on('error', function(err) {
    done(err)
  })
}
