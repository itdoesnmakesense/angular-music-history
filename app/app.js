var app = angular.module("MusicApp", ['ngRoute','angular.filter','ui.bootstrap','firebase']);

app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
     .when('/player',{
        templateUrl : "partials/player.html",
        controller : "SongCtrl"
      })
      .when('/about',{
        templateUrl : "partials/specific_album.html",
        controller : "SongCtrl"
      })
      .otherwise({
        redirectTo: '/'
      });
  }
  ]);