/*global getLocale:false*/
'use strict';

/**
 * @ngdoc function
 * @name alejandrofhesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alejandrofhesApp
 */
angular.module('alejandrofhesApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.lang = getLocale();
 }]);
