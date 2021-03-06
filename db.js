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

module.exports.createProgram = function(programName, programType, programAge) {

	models.Program.create({
		name: programName,
		type: programType,
		age: programAge
	})

}

module.exports.createEvent = function(programName, location, eventType, age, date, start, end) {
	models.Event.create({
		name: programName,
		location: location,
		eventType: eventType,
		age: age,
		date: date,
		time: start,
		end: end
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