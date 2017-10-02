// creating a module
// there are two ways of creating a module

// you can create or chain as many as controllers you want in this single file
/**
 * Scope is an object that refers to the application model.
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
		console.log($scope); // shit loads of properties in the $scope object, similar to your window object
		$scope.name = 'parent container';
		$scope.text = 'You always need a parent container/module and there will always be one parent container so that you can link it to the html using ng-app attribute';

		$scope.subtext= "However you split parent container/module into any number of discreet sub modules/container."

		$scope.scenario = "consider an application with one CMS part and cusomer facing application."
	}]);