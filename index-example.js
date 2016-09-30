

var myApp = angular.module('myApp', []);
// the $scope is the same as objects, we are passing in object when we say scope. 

myApp.factory( "TopSpotService", function( $http, $log, $rootScope )
{
	this.retrieveTopSpotData = function()
	{
		console.log( 'inside retrieveTopSpotData');
		$http.get('topspots.json').success( function( data )
		{
			$rootScope.$broadcast('topspotDataRetrieved', data);
		});
	};

	return this;
});

myApp.controller('MainController', function($scope, $http, $log, $window, TopSpotService )
{
	$scope.topspots= [];

	$scope.name = 'My Name';

	// $http.get( 'topspots.json' ).success( function( data ) 
	// { 
	//     $scope.topspots = data.topspots;
	// 	console.log(data.topspots);
	// });

	$scope.changeName = function()
	{
		$log.info('The value of name is now : ' + $scope.name );
	};

	$scope.changeLocation = function( url ) 
	{ 
		$window.location.href = url;
	};

	$scope.$on( 'topspotDataRetrieved', function( msg, data )
	{
		$log.info("Inside topspotDataRetrieved message listener -- " + msg );
		$scope.topspots = data.topspots;
	});

	TopSpotService.retrieveTopSpotData();
});    
