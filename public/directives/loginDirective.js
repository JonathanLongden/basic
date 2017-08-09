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
    .directive('qasubmittal', function() {
        return {
            templateUrl: 'qasubmittal.html',
            restrict: "AE"
        };
    })
    .directive("summary", function() {

        return {
            templateUrl: './../template/summary.html',
            restrict: "AE"
        }

    })