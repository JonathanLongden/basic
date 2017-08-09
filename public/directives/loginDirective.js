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
    //     .directive('myCustomer', function() {
    //   return {
    //     templateUrl: 'my-customer.html'
    //   };
    // });
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