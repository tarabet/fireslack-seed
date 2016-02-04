/**
 * Created by Shuriken on 02.02.2016.
 */

'use strict';

(function(angular) {

    angular.module('angularfireSlackApp')
        .factory('Users', function($firebaseArray, $firebaseObject, FirebaseUrl) {

            var refUsers = new Firebase(FirebaseUrl+'slack-users');
            var users = $firebaseArray(refUsers);

            var Users = {
                getProfile: function(uid) {
                    return $firebaseObject(refUsers.child(uid));
                },
                getDisplayName: function(uid) {
                    return users.$getRecord(uid).displayName;
                },
                getGravatar: function(uid) {
                    return '//www.gravatar.com/avatar/' + users.$getRecord(uid).emailHash;
                },
                all: function() {
                    return users;
                }
            };

            return Users;
        })

})(angular);