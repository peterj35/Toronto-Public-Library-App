var models = require('./schemas/schemas')

module.exports.findEventsFromProgramName = function(programName, callback) {

	models.Event.find({'name': programName}, function(err, events) {
		if (err) {
			return callback("Big time error")
		}
		callback(null, events)
	})

}