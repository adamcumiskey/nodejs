var http = require('http')
  , async = require('async')
  , url = process.argv[2]
  , data = ['one', 'two', 'three']

async.reduce(data, 0, function(memo, item, callback) {
  var queryURL = url + '/?number=' + item
  http.get(queryURL, function(res) {
    var body = ''
    res.on('data', function(chunk) {
      body += chunk
    })
    res.on('end', function() {
      callback(null, memo + Number(body))
    }).on('error', callback)
  })
}, function(err, result) {
  if (err) throw err
  console.log(result);
})
