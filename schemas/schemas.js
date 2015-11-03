var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	card: String,
	firstname: String,
	lastname: String,
	address: String,
	postcode: String,
	phone: String,
	birthday: String,
	email: String,
	notifymethod: String,
	language: String,
	fundraiser: String
});

var eventSchema = mongoose.Schema({
	name: String,
	date: String,
	start: String,
	end: String,
	location: String,
	age: String,
	description: String,
	finished: Boolean
	attendance: [userSchema]
});

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Event', eventSchema);