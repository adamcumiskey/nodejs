var bl = require('bl')
const http = require('http')

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err) {
			console.log(err)
			return
		}

		console.log(data.toString().length)
		console.log(data.toString())
	}))
})
