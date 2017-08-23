angular.module("basic", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("landingPage", {
                url: "/landingPage",
                templateUrl: "./../templates/landingPage.html"
            })
            .state("/", {
                url: "/home",
                templateUrl: "./templates/home.html", // or template: //'<h1>Home Page</h1>' 
                controller: "mainCtrl",
            })
            .state("forms", {
                url: "/forms",
                templateUrl: "./templates/forms.html",
                controller: "mainCtrl",
            })
            .state("login", {
                url: "/login",
                templateUrl: "./templates/login.html",
                controller: "loginCtrl",
            })
            .state("signup", {
                url: "/signup",
                templateUrl: "./templates/signup.html",
                controller: "loginCtrl",
            })
            .state("riskcard", {
                url: "/riskcard",
                templateUrl: "./templates/riskcard.html",
                controller: "qaCtrl",
            })
            .state("mitigation", {
                url: "/mitigation",
                templateUrl: "./templates/mitigation.html",
                controller: "qaCtrl",
            })
            .state("summary", {
                url: "/summary",
                templateUrl: "./templates/summary.html",
                controller: "summaryCtrl",
            })
            .state("admitsummaryreports", {
                url: "/admitsummaryreports",
                templateUrl: "./templates/admitsummaryreports.html",
                controller: "summaryCtrl",
            })
            .state("usersummaryreports", {
                url: "/usersummaryreports",
                templateUrl: "./templates/usersummaryreports.html",
                controller: "summaryCtrl",
            })
            .state("graphic", {
                url: "/graphic",
                templateUrl: "./templates/graphic.html",
                controller: "graphicCtrl.js",
            });





        $urlRouterProvider.otherwise("/landingPage");


    });