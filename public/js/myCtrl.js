var app = angular.module('fullStack');

app.controller('myCtrl', function($scope, myService){
	$scope.getFriends = function(){
		myService.getFriends().then(function(res){
			$scope.friends = res.data;
			console.log($scope.friends);
		});
	}

	$scope.addFriend = function(){
		myService.addFriend($scope.friend).then(function(res){
			$scope.getFriends();
			
		});
	}
	$scope.getFriends();
});