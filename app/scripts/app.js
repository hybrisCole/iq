'use strict';

angular.module('sprintMobile', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'angular-gestures',
    'sprintMobile.controllers',
    'sprintMobile.services',
  ]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/main.html', controller: 'IndexCtrl'});
    $routeProvider.when('/swipeTest', {templateUrl: 'partials/swipeTest.html', controller: 'SwipeTestCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);