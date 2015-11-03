var csv = require('csv')
var fs = require('fs')
var models = require('./schemas/schemas')

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

module.exports.check = function(eventName, eventID, eventType, callback) {
	models.Program.findOne({'name': eventName}, function(err, programData) {
		if (err) {
			console.log(err)
		}

		else {
			console.log(programData)
			models.Program.findOne({name: eventName}, function(err, program) {
				program.events.push(eventID)
				program.save()
			})
		}
	})
}