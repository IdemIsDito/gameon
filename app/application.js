/* define our modules */
angular.module('myapp.services', ['firebase','ngCookies']);
angular.module('myapp.filters', []);
angular.module("myapp.directives", ['monospaced.elastic']);
angular.module('myapp.controllers', []);

/* load services */
require('./js/services/authentication.js');
require('./js/services/refs.js');
require('./js/services/toast.js');
require('./js/services/users.js');

/* load filters */
require('./js/filters/reverse.js');

/* load directives */

/* load controllers */
require('./js/controllers/home.js');
require('./js/controllers/login.js');
require('./js/controllers/menu.js');
require('./js/controllers/users.js');

window.MyApp = angular.module("MyApp", [
  'ui.router',
  'myapp.controllers',
  'myapp.directives',
  'myapp.filters',
  'myapp.services',
  'ngAnimate',
  'ngMaterial'
]);

MyApp.run(['$rootScope', '$state', 'Authentication', 'Refs', 'Toast',
  function($rootScope, $state, Authentication, Refs, Toast) {
  $rootScope._ = window._;
  $rootScope.moment = window.moment;
  $rootScope.authCallback = function(authData) {
    Authentication.auth(authData, function(user) {
      if(user) {
        Toast('Welcome, ' + user.name + '!');
      }
      else {
        // logged out
        Authentication.logout();
        $state.go('login');
      }
    });
  };

  Refs.root.onAuth($rootScope.authCallback);
}]);

/* application routes */
MyApp.config(['$stateProvider','$locationProvider',
 function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: ['Authentication', function(Authentication) {
        Authentication.logout();
      }]
    })
    .state('default', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'views/users.html',
      controller: 'UsersCtrl'
    })
    .state('users/id', {
      url: '/users/:userId',
      templateUrl: 'views/users.html',
      controller: 'UsersCtrl'
    });
}]);
