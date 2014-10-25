var app = angular.module('fullStack');

app.service('friendsService', function($http, $q){
	this.getFriends = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:8888/friends',
		}).then(function(res){
			return res.data;
		});
	}

	this.addFriend = function(friend){
		return $http({
			method: 'POST',
			url: 'http://localhost:8888/friends',
			data: friend	
		}).then(function(res){
			return res.data;
		})
	};

	this.unFriend = function(friend){
		return $http({
			method: 'DELETE',
			url: 'http://localhost:8888/friends/' + friend._id,
		})
	};
});