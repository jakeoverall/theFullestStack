'use strict';

var app = angular.module('fullestStack', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/friends', {
      templateUrl: 'views/friends.html',
      controller: 'FriendsController'
    })
    .otherwise({
      redirectTo: '/friends'
    });
});
