var fs = require('fs')
var file = fs.readFileSync(process.argv[2])
var fileAsString = file.toString()

var lines = fileAsString.split("\n")
console.log(lines.length-1)
