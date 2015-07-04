var http = require('http')
var bl = require('bl')

for (i = 2; i < process.argv.length; i++) {
	httpGet(i)
}

function httpGet(index) {
	http.get(process.argv[index], function (response) {
		response.pipe(bl(processResponse(index)))
	})
}

var responses = []
var count = 0
function processResponse(index) {
	return function (err, data) {
		if (err)
			console.error(err)

		responses[index-2] = data.toString()
		count++

		if (count == 3) {
			printResponses()
		}
	}
}

function printResponses() {
	responses.forEach(function (response) {
		console.log(response)
	})
}
