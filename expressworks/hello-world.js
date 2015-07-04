var express = require('express')
var app = express()

app.listen(process.argv[2])
app.get('/home', function(req, res) {
  res.end('Hello World!')
})
