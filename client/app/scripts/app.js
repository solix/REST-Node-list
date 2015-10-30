'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngRoute',
    'restangular'

  ])
  .config(function ($routeProvider, RestangularProvider) {
    //set base url
    RestangularProvider.setBaseUrl('https://evening-river-8589.herokuapp.com');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
    })
      .factory('MovieRestAngular', function (Restangular) {
        
      
        return Restangular.withConfig(function(RestangularConfigurer){
          RestangularConfigurer.setRestangularFields({
            id: '_id'
          });
        }); 
      })
      .factory('Movie', function(MovieRestAngular) {
        return MovieRestAngular.service('movie');
      });
      
