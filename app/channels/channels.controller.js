/**
 * Created by Shuriken on 04.02.2016.
 */

'use strict';

(function(angular) {

    angular.module('angularfireSlackApp')
        .controller('ChannelsController', function($state, Auth, Users, profile, channels) {

        var channelsCtrl = this;

        channelsCtrl.profile = profile;
        channelsCtrl.channels = channels;
        channelsCtrl.getDispayName = Users.getDisplayName;
        channelsCtrl.getGravatar = Users.getGravatar;

        channelsCtrl.logout = function() {
            Auth.$unauth();
            $state.go('home');
        };

        channelsCtrl.newChannel = {
            name: ''
        };

        channelsCtrl.createChannel = function() {
            channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref) {
                //channelsCtrl.newChannel = {
                //    name: ''
                //}
                $state.go('channels.messages', {channelId: ref.key()});
            });
        }

    });

})(angular);