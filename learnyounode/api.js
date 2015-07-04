const http = require('http')
const url = require('url')

var server = http.createServer(function (req, res) {
  var parser = url.parse(req.url, true)
  var date = new Date(parser.query.iso)
  var result

  if (parser.pathname === "/api/parsetime") {
    result = parsetime(date)
  }
  if (parser.pathname === "/api/unixtime") {
    result = unixtime(date)
  }

  if (result) {
    res.writeHead(200, { "Content-Type": "application/json."})
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))

function parsetime(date) {
    return {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    }
}

function unixtime(date) {
  return {
    "unixtime": date.getTime()
  }
}
