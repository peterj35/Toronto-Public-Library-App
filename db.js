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
	models.Event.create({
		name: programName,
		location: location,
		eventType: eventType,
		age: age
	}, function(err, event) {
		models.Program.findOne({'name': event.name}, function(err, program) {
			if (!err) {
				if (program) {
					program.events.push(event._id)
					program.save()
				}
			}
		})
	})
}