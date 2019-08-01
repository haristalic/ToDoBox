'use strict';

/**
 * @ngdoc overview
 * @name todoboxApp
 * @description
 * # todoboxApp
 *
 * Main module of the application.
 */
angular
  .module('todoboxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage',
    'ngDragDrop'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
     
      }).when('/todo', {
        templateUrl: 'views/todo.html',
     
      })
     
      .otherwise({
        redirectTo: '/'
      });
  });
