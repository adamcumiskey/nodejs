var express = require('express')
var app = express()
app.listen(process.argv[2])

app.use(express.static(process.argv[3]))
