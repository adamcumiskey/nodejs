const http = require('http')
const map = require('through2-map')

var server = http.createServer(function (req, res) {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase()
    })).pipe(res)
})
server.listen(Number(process.argv[2]))
