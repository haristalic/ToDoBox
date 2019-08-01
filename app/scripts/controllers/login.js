'use strict';

angular.module('todoboxApp')
  .controller('loginCtrl', function ($scope,$location) {
    
   
    $scope.signIn = function () {

   $location.path('/todo');
  
    };


 
  });
