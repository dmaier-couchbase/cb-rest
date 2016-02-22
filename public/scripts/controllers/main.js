'use strict';

/**
 * @ngdoc function
 * @name cbrest.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cbDemoQaApp
 */
var app = angular.module('cbrest');

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
