friendModel.js'use-strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var friend =  new Schema({
	name: {type: String, required: true},
	age: {type: Number, required: true},
	yearMet: {type: Date, required: true}
});

module.exports = mongoose.model('Friend', friend);