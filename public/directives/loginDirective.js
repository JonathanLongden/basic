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
    .directive('qasubmittalDirective', function() {
        return {
            templateUrl: 'qasubmittal.html',
            restrict: "AE"
        };
    })
    .directive("summaryDirective", function() {

        return {
            templateUrl: './../template/summary.html',
            restrict: "AE"
        }

    })
    .directive("admitsummaryreportsDirective", function() {

        return {
            templateUrl: './../template/admitsummaryreports.html',
            restrict: "AE"
        }

    })
    .directive("usersummaryreportsDirective", function() {

        return {
            templateUrl: './../template/usersummaryreports.html',
            restrict: "AE"
        }

    })