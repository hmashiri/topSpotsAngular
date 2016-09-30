

var myApp = angular.module('myApp', []);
// the $scope is the same as objects, we are passing in object when we say scope. 
myApp.controller('MainController', function($scope, $http)
{
	$scope.topspots= [];
	$scope.name = "Name";
    $scope.description = "Description";
    $scope.link = "Links"

	$http.get( 'topspots.json' ).then( function( response ) 
	{ 
	    $scope.topspots = response.data.topspots;

	    //testing
	    console.log($scope.topspots);
	    console.log($scope.topspots[0].location[1])
	});

});    
