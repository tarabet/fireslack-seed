/**
 * Created by Shuriken on 04.02.2016.
 */

'use strict';

(function(angular) {

    angular.module('angularfireSlackApp')
        .factory('Messages', function($firebaseArray, FirebaseUrl) {

        var channelMessagesRef = new Firebase(FirebaseUrl + 'channelMessages');

        return {
            forChannel: function(channelId) {
                return $firebaseArray(channelMessagesRef.child(channelId));
            }
        };
    });

})(angular);