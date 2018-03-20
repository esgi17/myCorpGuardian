'use strict';

angular.module('myCorpGuardian', [
  'ngRoute',
  'myCorpGuardian.home'
]).
config(['$routeProvider', function($routeProvider) {
     // Routes will be here
     $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);
