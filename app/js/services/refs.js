angular.module('myapp.services')
  .factory('Refs', ['$cookies', '$firebase',
    function($cookies, $firebase) {
      var rootRef = new Firebase($cookies.rootRef || 'https://oefenwedstrijd.firebaseio.com');

      // define every standard ref used application wide
      return {
        root: rootRef,
        users: rootRef.child('users'),
      };
    }
  ]);
