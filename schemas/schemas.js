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
	time: String,
	end: String,
	location: String,
	eventType: String,
	age: String,
	description: String,
	attendance: [userSchema]
});

var programSchema = mongoose.Schema({
	name: String,
	type: String,
	age: String,
	events: [String]
});

exports.User = mongoose.model('User', userSchema),
exports.Event = mongoose.model('Event', eventSchema),
exports.Program = mongoose.model("Program", programSchema)