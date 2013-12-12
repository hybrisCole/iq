'use strict';

angular.module('sprintMobile.controllers').controller('IndexCtrl', ['$scope', 'PhoneFactory', function ($scope, PhoneFactory) {
  $scope.slide = '';
  $scope.phoneCategories = PhoneFactory.phoneCategories();
  console.log($scope.phoneCategories);
}]);