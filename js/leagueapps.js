angular.module('leagueApps.services', ['leagueApps.config'])
    .factory('$leagueApps', function ($http, $q, $config) {
        return {
            getSite: function () {
                var deferred = $q.defer();
                var url = $config.domain + '/' + $config.siteId + '?x-api-key=' + $config.apiKey + '&callback=JSON_CALLBACK';
                $http.jsonp(url)
                    .then(function (data) {
                        deferred.resolve(data.data);
                    });

                return deferred.promise;
            },
            getAnnouncements: function () {
                var deferred = $q.defer();
                var url = $config.domain + '/' + $config.siteId + '/announcements?x-api-key=' + $config.apiKey + '&callback=JSON_CALLBACK';
                $http.jsonp(url)
                    .then(function (data) {
                        deferred.resolve(data.data);
                    });

                return deferred.promise;
            },
            getPrograms: function () {
                var deferred = $q.defer();
                var url = $config.domain + '/' + $config.siteId + '/programs/current?x-api-key=' + $config.apiKey + '&callback=JSON_CALLBACK';
                $http.jsonp(url)
                    .then(function (data) {
                        deferred.resolve(data.data);
                    });

                return deferred.promise;
            },
            getSchedule: function (programId) {
                var deferred = $q.defer();
                var url = $config.domain + '/' + $config.siteId + '/programs/' + programId + '/schedule?x-api-key=' + $config.apiKey + '&callback=JSON_CALLBACK';
                $http.jsonp(url)
                    .then(function (data) {
                        deferred.resolve(data.data);
                    });

                return deferred.promise;
            }
        };
    });
