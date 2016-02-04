/**
 * Created by Shuriken on 02.02.2016.
 */

angular.module('angularfireSlackApp')
    .factory('Auth', function($firebaseAuth, FirebaseUrl) {
        var ref = new Firebase(FirebaseUrl);
        var auth = $firebaseAuth(ref);

        return auth;
    });