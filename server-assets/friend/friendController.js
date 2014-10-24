var FriendModel = require('./friendModel');


module.exports = {
  getFriends: function (req, res) {
    FriendModel.find().exec(err, friends){
      res.send(friends);
    }
  },
  addFriend: function (req, res) {
    var newFriend = new FriendModel(req.body);
    newFriend.save(function (err) {
      if(err){
        res.send(err);
      } else {
        res.status(200).send(req.body.name + ' was successfully added to your friends list');
      }
    });
  }
}