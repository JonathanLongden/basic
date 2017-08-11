angular.module("basic", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("landingPage", {
                url: "/landingPage",
                templateUrl: "./../templates/landingPage.html"
            })
            .state("/", {
                url: "/home",
                templateUrl: "./templates/home.html", // or template: '<h1>Home Page</h1>' 
                controller: "mainCtrl"
            })
            .state("forms", {
                url: "/forms",
                templateUrl: "./templates/forms.html", // or template: '<h1>Home Page</h1>' 
                controller: "mainCtrl"
            })
            .state("login", {
                url: "/login",
                templateUrl: "./templates/login.html", // or template: '<h1>Home Page</h1>' 
                controller: "loginCtrl"
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "./templates/signup.html", // or template: '<h1>Home Page</h1>' 
                controller: "loginCtrl"
            })
            .state("qasubmittal", {
                url: "/qasubmittal",
                templateUrl: "./templates/qasubmittal.html", // or template: '<h1>Home Page</h1>' 
                controller: "qaCtrl"
            })
            .state("mitigation", {
                url: "/mitigation",
                templateUrl: "./templates/mitigation.html", // or template: '<h1>Home Page</h1>' 
                controller: "qaCtrl"
            })
            .state("summary", {
                url: "/summary",
                templateUrl: "./templates/summary.html", // or template: '<h1>Home Page</h1>' 
                controller: "summaryCtrl"
            })
            .state("admitsummaryreports", {
                url: "/admitsummaryreports",
                templateUrl: "./templates/admitsummaryreports.html", // or template: '<h1>Home Page</h1>' 
                controller: "summaryCtrl"
            })
            .state("usersummaryreports", {
                url: "/usersummaryreports",
                templateUrl: "./templates/usersummaryreports.html", // or template: '<h1>Home Page</h1>' 
                controller: "summaryCtrl"
            })
            .state("graphic", {
                url: "/graphic",
                templateUrl: "./templates/graphic.html", // or template: '<h1>Home Page</h1>' 
                controller: "gaphicCtrl.js"
            })





        $urlRouterProvider.otherwise("/landingPage");


    });