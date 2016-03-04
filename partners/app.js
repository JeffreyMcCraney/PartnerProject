'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'firebase',
  'angular-loading-bar',
  'myApp.home',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'
]).
config(['$routeProvider','cfpLoadingBarProvider', function($routeProvider, cfpLoadingBarProvider) {
  cfpLoadingBarProvider.latencyThreshold = 1;
  
  $routeProvider
  .when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/:company', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  })
  .when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  })
  .otherwise({redirectTo: '/view1'});
}]);
