'use strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	port = 8888,
	mongoose = require('mongoose');
	// database = require('./server-assets/database');

//mongoose setup
var databaseRefrence = 'mongodb://localhost/fullStack';
var connection = mongoose.connection;
//Friend = { getFriends: function(){ ... } }
var Friend = require('./server-assets/Friend/friendCtrl');


//express, bodyParser, cors setup
var app = express();
app.use(bodyParser.json());
app.use(cors());	//this is security. npm cors

//ties in the index.html
app.use(express.static(__dirname + '/public'));

//requests
app.get('/friends', Friend.getFriends);
app.post('/friends', Friend.addFriend); 
app.delete('/friends/:id', Friend.unFriend);


mongoose.connect(databaseRefrence);
connection.once('open', function(){
	app.listen(port, function(){
		console.log('Connection Success on mongoDB & http://localhost: ' + port)
	});	
});