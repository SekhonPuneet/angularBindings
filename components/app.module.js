// creating a module
// there are two ways of creating a module

// you can create or chain as many as controllers you want in this single file
/**
 * Definition [Scope]:- is the binding part between ___ and ___
 * is an {} with properties and methods
 * is available to both view and controller
 */

/**
 * Module :- is a container for different parts of your app - containing controllers, services, filters, directives
 */

/**
 * controllers:- controls the data of AngularJS application
 * are regular JS objects
 */

angular
	.module('myApp', [])
	.controller('appController', ['$scope', function($scope) {
		$scope.name = 'My first controller';
	}]);