// Get a handle to the application module and it's dependencies
var swmpApp = angular.module('swmpApp',
    [
        'ngRoute',
        'swmpControllers'
    ]);

// Define the route provider for the application
swmpApp.config(
    ['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/projects',
            {
                templateUrl: 'partials/project-list.html',
                controller: 'projectListController'
            }).
            when('/projects/:projectId',
            {
                templateUrl: 'partials/project-detail.html',
                controller: 'projectDetailController'
            }).
            otherwise(
            {
                redirectTo: '/projects'
            });
    }]);