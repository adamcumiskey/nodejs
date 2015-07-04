module.exports = function (dir, filter, callback) {
	var fs = require('fs')
	var path = require('path')

	fs.readdir(dir, function (err, list) {
		if (err) {
			return callback(err)
		}
		
		var matches = list.filter(function(element) {
			return path.extname(element.toString()) === "." + filter.toString()
		})
		return callback(null, matches)
	})
}
