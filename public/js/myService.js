var app = angular.module('fullStack');

app.service('myService', function($http, $q){
	this.getFriends = function(){
		return $http({
			method: 'GET',
			url: 'http://localhost:8888/friends',
		});
	}

	this.addFriend = function(friend){
		return $http({
			method: 'POST',
			url: 'http://localhost:8888/friends/new',
			data: {
				name: friend.name,
				age: friend.age,
				yearMet: friend.yearMet
			}	
		}).then(function(res){
			return res.data;
		})
	};
});