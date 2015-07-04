const net = require('net')
const strftime = require('strftime')

var server = net.createServer(function (socket) {
  socket.end(currentDate())
})
server.listen(process.argv[2])

function currentDate() {
  return strftime("%Y-%m-%d %H:%M")
}
