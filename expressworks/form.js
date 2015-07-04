var express = require('express')
var app = express()
app.listen(process.argv[2])

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
app.post('/form', function (req, res) {
  res.end(reverse(req.body.str))
})

function reverse(str) {
  return str.split('').reverse().join('')
}
