var models = require('./schemas/schemas')

module.exports.findEventsFromProgramName = function(programName, callback) {

	models.Event.find({'name': programName}, function(err, events) {
		if (err) {
			return callback("Big time error")
		}
		callback(null, events)
	})

}

module.exports.findProgramFromName = function(programName, callback) {

	models.Program.findOne({'name': programName}, function(err, program) {
		if (err) {
			return callback("Big time error")
		}
		callback(null, program)
	})

}

module.exports.createEvent = function(programName, location, eventType, age) {
	models.Event.
}

module.exports.updateProgramWithNewEventInstance = function(programName, eventID) {

}