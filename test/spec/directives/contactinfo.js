'use strict';

describe('Directive: contactInfo', function () {

  // load the directive's module
  beforeEach(module('alejandrofhesApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<contact-info></contact-info>');
    element = $compile(element)(scope);
    // expect(element.text()).toBe('this is the contactInfo directive');
  }));
});
