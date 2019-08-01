'use strict';


angular.module('todoboxApp')
  .controller('MainCtrl', function ($scope) {
 $scope.todos=[];
 $scope.doneHide=true;

 $scope.removeTodo=function(todo){
   var removedTodo = $scope.todos.indexOf(todo);
   $scope.todos.splice(removedTodo,1);
 }
 $scope.addTodo=function(){
   $scope.todos.push({'titel':$scope.newtodo,'done':false});
   $scope.newtodo="";
   $scope.show=false;
   $scope.doneHide=true;

 } 
 $scope.deleteAll=function(){
$scope.doneHide=false;
}

 $scope.imageSrc = "";
    
 $scope.$on("fileProgress", function(e, progress) {
   $scope.progress = progress.loaded / progress.total;
 });
  });
