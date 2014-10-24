var Friend = require('./friendModel');

module.exports = {
	getFriends: function(req, res){
		Friend.find().exec(err, freinds){
			res.send(friends);
		}
	},
	addFriend: function(req, res){
		var newFriend = FriendModel(req.body);
		newFriend.save(function(err){
			if(err){
				res.send(err);
			} else {
				res.status(200).send(req.body.name + ' was successfully added to your friends list.')
			}
		});
	}
}