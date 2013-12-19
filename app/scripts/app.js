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
    $routeProvider.when('/mapaReporte', {templateUrl: 'partials/mapaReporte.html', controller: 'MapaReporteCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);
