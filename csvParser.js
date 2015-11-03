var csv = require('csv')
var fs = require('fs')

module.exports.parseData = function(filePath, callback) {
	fs.readFile(filePath, function(err, data) {
		if (err) {
			return callback(err)
		}
		console.log(data.toString())
		csv.parse(data.toString(), function(err, data) {
			if (err) {
				return callback(err)
			}
			callback(null, data)
		})
	})
}
