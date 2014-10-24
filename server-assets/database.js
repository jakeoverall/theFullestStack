// var friends = [
//   {
//     name: 'Jess',
//     age: 65,
//     yearMet: 2014
//   },
//   {
//     name: 'Jake',
//     age: 28,
//     yearMet: 2014
//   },
//   {
//     name: 'Patrick Jargon',
//     age: 25,
//     yearMet: 2014
//   }
// ];

module.exports.getFriends = function() {
  return friends;
}

module.exports.addFriend = function(friendObj) {
  friends.push(friendObj);
}
