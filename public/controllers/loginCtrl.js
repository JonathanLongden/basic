angular.module('basic').controller('loginCtrl', function($scope, $location, mainServ, $rootScope) {

    console.log($rootScope.user);
    console.log($scope.user);
    console.log($rootScope.user.data);
    console.log($scope.user.data);
    $scope.wrongCred = true;
    $scope.userName;

    $scope.postLogin = function(loginEmail, secret) {
        var userLogin = {
            userName: loginEmail,
            password: secret
        };
        mainServ.loginPostLogin(userLogin)
            .then(function(response) {
                var verify = response;
                if (verify.user) {
                    //guiding user to forms
                    $location.path('forms');
                    $scope.userLogin = "";
                } else {
                    $location.path('/landingPage');
                    $scope.wrongCred = false;
                }
            })
    };
    // $scope.forgotPassword = function(lostPassword){
    //   var reSetting = {
    //     userName: lostPassword
    //        };
    //   mainServ.getforgotPassword(reSetting)
    //   .then(function(response){
    //     console.log(response);

    //   })
    // };
    $scope.postSignUp = function(signUpEmail, password) {
        var userSignUp = {
            userName: signUpEmail,
            password: password
        };
        mainServ.signupPostSignUp(userSignUp)
            .then(function(response) {
                console.log(response);
                if (response.user.local) {
                    //guiding user to forms
                    $location.path('forms');
                    //console.log(response.user.local.userName)
                } else {
                    $location.path('/landingPage');
                }
            })
    };



});