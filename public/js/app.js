'use strict';
var app = angular.module('fullStack', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/friends', {
			templateUrl: 'views/friends.html',
			controller: 'friendsCtrl'
		})
		  .otherwise({
		  	redirectTo: '/friends'
		  })
});