var friends = [
	{
		name: "Joe Stewart",
		age: 28,
		yearMet: 2004
	},
	{
		name: "Will Smith",
		age: 45,
		yearMet: 2002
	},
	{
		name: "Mark Wallberg",
		age: 34,
		yearMet: 2012
	}
];

module.exports.getFriends = function(){
	return friends;
}

module.exports.addFriend = function(friendObj){
	friends.push(friendObj);	
}