var app = angular.module('devChallenge', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider){

      $stateProvider
        .state('home', {
          url: '/'
          , templateUrl: './router-views/home-view.html'
        })


  })
