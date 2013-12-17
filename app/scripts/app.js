'use strict';
angular.module('iqRadioMobile', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'angular-gestures',
    'swiper',
    'iqRadioMobile.controllers'
  ]).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
    //$routeProvider.when('/swipeTest', {templateUrl: 'partials/swipeTest.html', controller: 'SwipeTestCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
