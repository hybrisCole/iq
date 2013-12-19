'use strict';

angular.module('iqRadioMobile.controllers', []).controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
  $scope.slideClass = 'gr';
  $rootScope.back = function() {
    $scope.slideClass = 'slide-right';
    $window.history.back();
  };

  $rootScope.go = function(path){
    $scope.slideClass = 'slide-left';
    $location.url(path);
  };

}]);
