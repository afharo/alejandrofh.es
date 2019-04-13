'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('alejandrofhesApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach the lang to the scope', function () {
    expect(scope.lang).toBe('en');
  });
});
