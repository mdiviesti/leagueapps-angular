angular.module('leagueApp', ['leagueApps.services'])
    .controller('Demo', ['$scope', '$q', '$leagueApps', function ($scope, $q, $leagueApps) {
        $scope.getSite = function () {
            $leagueApps.getSite().then(function (data) {
                $scope.site = data;
            });
        };

        $scope.getAnnouncements = function () {
            $leagueApps.getAnnouncements().then(function (data) {
                $scope.announcements = data;
            });
        };

        $scope.getPrograms = function () {
            $leagueApps.getPrograms().then(function (data) {
                $scope.programs = data;
            });
        };

        $scope.getSchedule = function (programId) {
            $leagueApps.getSchedule(programId).then(function (data) {
                $scope.schedule = data;
            });
        };

    }]);