'use strict';

/**
 * @ngdoc directive
 * @name alejandrofhesApp.directive:contactInfoExtended
 * @description
 * # contactInfoExtended
 */
angular.module('alejandrofhesApp')
  .directive('contactInfoExtended', function () {
    return {
      templateUrl: 'views/contact-info-extended.html',
      restrict: 'E'
    };
  });
