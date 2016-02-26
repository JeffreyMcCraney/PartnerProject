'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:company', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', '$routeParams', '$firebaseObject','$window',function($scope, $routeParams, $firebaseObject, $window) {
	
  console.log($routeParams.company);

  $scope.url = $routeParams.company;

	var ref = new Firebase("https://gosolarperks.firebaseio.com/urls/" + $scope.url);

  $scope.data = $firebaseObject(ref);

  $scope.data.$loaded()
  .then(function() {
    console.log($scope.data);
    if($scope.data.url == $scope.url){
      console.log("true");
    }else{
      $window.location.href = '#/home';
    }
  });





}]);