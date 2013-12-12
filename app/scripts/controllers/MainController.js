'use strict';

angular.module('sprintMobile.controllers', []).controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
  $scope.slideClass = 'slide-right';
  $rootScope.back = function() {
    $scope.slideClass = 'slide-right';
    $window.history.back();
  };

  $rootScope.go = function(path){
    $scope.slideClass = 'slide-left';
    $location.url(path);
  };

}]);