angular.module("basic", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("/", {
                url: "/",
                templateUrl: "./templates/home.html", // or template: '<h1>Home Page</h1>' 
                controller: "mainCtrl"
            })
            .state("login", {
                url: "/login",
                templateUrl: "./templates/login.html" // or template: '<h1>Home Page</h1>' 
                    //controller: "contactCtrl"
            })




        $urlRouterProvider.otherwise("/");


    });