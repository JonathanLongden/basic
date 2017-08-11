angular.module("basic").directive("loginDirective", function() {

        return {
            templateUrl: "./../templates/login.html",
            restrict: "AE"
        };
    })
    .directive("signupDirective", function() {


        return {
            templateUrl: "./../templates/signup.html",
            restrict: "AE"
        }

    })
    .directive("adminreportDirective", function() {

        return {
            templateUrl: './../templates/adminreport.html',
            restrict: "AE"
        }

    })
    .directive("reportsDirective", function() {

        return {
            templateUrl: './../templates/reports.html',
            restrict: "AE"
        }

    })
    .directive("graphicDirective", function() {

        return {
            templateUrl: './../templates/graphic.html',
            restrict: "AE"
        }

    })