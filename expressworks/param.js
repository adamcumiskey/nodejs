var express = require('express')
var app = express()

app.put('/message/:id', function (req, res) {
  res.end(hash(req.params.id))
})
app.listen(process.argv[2])

function hash(id) {
  return require('crypto')
          .createHash('sha1')
          .update(new Date().toDateString() + id)
          .digest('hex')
}
