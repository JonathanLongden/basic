angular.module("basic", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("/", {
                url: "/home",
                templateUrl: "./templates/home.html", // or template: '<h1>Home Page</h1>' 
                controller: "mainCtrl"
            })
            .state("forms", {
                url: "/forms",
                templateUrl: "./templates/forms.html", // or template: '<h1>Home Page</h1>' 
                //controller: "mainCtrl"
            })
            .state("login", {
                url: "/login",
                templateUrl: "./templates/login.html" // or template: '<h1>Home Page</h1>' 
                    //controller: "contactCtrl"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "./templates/signup.html" // or template: '<h1>Home Page</h1>' 
                    //controller: "contactCtrl"
            })




        $urlRouterProvider.otherwise("/");


    });