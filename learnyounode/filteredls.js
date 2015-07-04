var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
	if (err)
		console.error(err)	
	list.filter(function (element) {
			return path.extname(element.toString()) == "." + process.argv[3] 
	}).forEach(function (element) {
		console.log(element) 
	})
})
