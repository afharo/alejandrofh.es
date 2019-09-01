/*global getLocale:false*/
/*global initFullPage:false*/
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
    // Setting timeout so it goes to the next tick in the scheduler
    setTimeout(function () {
      initFullPage();
    }, 0);
 }]);
