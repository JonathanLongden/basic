angular.module("basic", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "./templates/home.html" // or template: '<h1>Home Page</h1>' 
                    //controller: "contactCtrl"
            })
            .state("login", {
                url: "/login",
                templateUrl: "./templates/login.html" // or template: '<h1>Home Page</h1>' 
                    //controller: "contactCtrl"
            })
            // .when("/red", {
            //     templateUrl : "red.htm"
            // })
            // .when("/green", {
            //     templateUrl : "green.htm"
            // })
            // .when("/blue", {
            //     templateUrl : "blue.htm"
            // });
            //$stateProvider
            // .state("/", {
            //     // url: "/home",
            //     templateUrl: "./../templates/home.html",
            //     //controller: "mainCtrl"
            // })
            // .state("login", {
            //     // url: "/login",
            //     templateUrl: "./../templates/login.html",
            //     controller: "loginCtrl"
            // })



        $urlRouterProvider.otherwise("/");


    });