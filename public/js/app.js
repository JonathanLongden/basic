angular.module("basic", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "./templates/home.html", // or template: '<h1>Home Page</h1>' 
                controller: "mainCtrl"
            })
            .state("login", {
                url: "/login",
                templateUrl: "./templates/login.html",
                controller: "loginCtrl"
            })
            .state("screenone", {
                url: "/screenone",
                templateUrl: "./templates/screenone.html", // or template: '<h1>Home Page</h1>' 
                controller: "addAnswers"
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