'use strict';

/**
 * @ngdoc directive
 * @name alejandrofhesApp.directive:contactInfo
 * @description
 * # contactInfo
 */
angular.module('alejandrofhesApp')
  .directive('contactInfo', function () {
    return {
      templateUrl: 'views/contact-info.html',
      restrict: 'E'
    };
  });
