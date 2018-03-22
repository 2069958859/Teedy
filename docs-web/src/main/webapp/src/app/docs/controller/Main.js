'use strict';

/**
 * Main controller.
 */
angular.module('docs').controller('Main', function($scope, $rootScope, $state, User) {
  User.userInfo().then(function(data) {
    if (!data.anonymous) {
      $state.go('document.default', {}, {
        location: 'replace'
      });
    }
  });
});