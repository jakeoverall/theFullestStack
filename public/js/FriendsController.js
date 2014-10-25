var app = angular.module('fullestStack');

app.controller('FriendsController', function($scope, friendsService) {

  $scope.getFriends = function() {
    friendsService.getFriends().then(function(friends) {
      $scope.friends = friends;
      console.log($scope.friends);
    });
  };

  $scope.addFriend = function() {
    friendsService.addFriend($scope.friend).then(function(res) {
      $scope.getFriends();
      })
  };

  $scope.getFriends();

  $scope.unFriend = function(friend){
    friendsService.unFriend(friend).then(function(res){
      $scope.getFriends();
    });
  }


});
