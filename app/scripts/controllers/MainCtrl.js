'use strict';

angular.module('iqRadioMobile.controllers', []).controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
  $scope.slideClass = 'gr';
  $rootScope.back = function() {
    $scope.slideClass = 'slide-right';
    console.log($scope.slideClass);
    $window.history.back();
  };

  $rootScope.go = function(path){
    $scope.slideClass = 'slide-left';
    console.log($scope.slideClass);
    $location.url(path);
  };

}]);
