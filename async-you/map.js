var http = require('http')
var async = require('async')

async.map(process.argv.slice(2), function(item, done) {
  http.get(item, function(res) {
    var body = ''
    res.on('data', function(chunk) {
      body += chunk
    })
    res.on('end', function() {
      return done(null, body)
    })
  }).on('error', function(err) {
    return done(err)
  })
},
function(err, results) {
  if (err) return console.error(err)
  console.log(results);
})
