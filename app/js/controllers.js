// Acquire a handle to the controllers module
var swmpControllers = angular.module('swmpControllers', []);

// Register the controller to list the projects
swmpApp.controller('projectListController', ['$scope', '$http', function($scope, $http) {

    // Make an http request to acquire the phones mock data resource
    $http.get('data/projects.json').success(function(data) {
        $scope.projects = data;
    });

    // Define the default sorting order for listing projects
    $scope.sortOrder = 'name';

}]);

// Register the controller to show project details
swmpControllers.controller('projectDetailController', ['$scope', '$routeParams', function($scope, $routeParams) {

    // Grab the projet id from the route parameter and store it in the model
    $scope.projectId = $routeParams.projectId;

}]);