angular.module("basic").directive("loginDirective", function() {

        return {
            templateUrl: './../templates/home.html',
            restrict: "E"
        };
    })
    // .directive("signupDirective", function() {


//     return {
//         templateUrl: './../templates/signup.html',
//         restrict: "E"
//     }

// })
// .directive("createSaleDirective", function() {

//     return {
//         templateUrl: './../templates/createSale.html',
//         restrict: "E"
//     }

// })
// .directive("contentDirective", function() {

//     return {
//         templateUrl: './../template/saleContent.html',
//         restrict: "E"
//     }

//})