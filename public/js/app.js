angular.module("basic", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state("screenone", {
			url: "/",
			templateUrl: "./templates/screenone.html", // or template: '<h1>Home Page</h1>' 
			controller: "mainCtrl"
		})
		.state("screentwo", {
			url: "/screentwo",
			templateUrl: "./templates/screentwo.html"
		})
		.state("summary", {
			url: "/summary",
			templateUrl: "./templates/summary.html"
		})
 


 	$urlRouterProvider.otherwise("/");


});