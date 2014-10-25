var app = angular.module('fullestStack');

app.service('friendsService', function($http, $q) {

  this.getFriends = function() {
    return $http({
      method: 'GET',
      url: 'http://localhost:3000/friends'
    }).then(function(res){
      return res.data;
    });
  }

  this.addFriend = function(friend) {
    return $http({
      method: 'POST',
      url: 'http://localhost:3000/friends',
      data: {
        name: friend.name,
        age: friend.age,
        yearMet: friend.yearMet
      }
    })
  };

  this.unFriend = function(friend) {
    return $http({
      method: 'DELETE',
      url: 'http://localhost:3000/friends/' + friend._id,
    });
  };

});