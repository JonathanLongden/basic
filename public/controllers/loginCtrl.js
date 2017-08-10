angular.module('basic').controller('loginCtrl', function($scope, $location, mainServ, $rootScope) {

    $scope.CorrectLogin = false;
    $scope.wrongCred = true;
    $scope.userName;

    $scope.postLogin = function(loginEmail, secret) {
        var userLogin = {
            userName: email(loginEmail),
            password: secret
        };
        mainServ.loginPostLogin(userLogin)
            .then(function(response) {
                //console.log(response);
                var verify = response;
                if (verify.user) {
                    //guiding user to forms
                    $location.path('forms');
                } else {
                    $location.path('/landingPage');
                    $scope.CorrectLogin = false;
                }
            })
    };

    function email(useremail) {
        var email = useremail;
        var test = useremail.toString().includes("woodardcurran.com");
        if (test) {
            $scope.CorrectLogin = false;
            return email
        } else {
            console.log("fail to login or signup");
            return null
            $scope.CorrectLogin = true;
        };
    };
    $scope.postSignUp = function(signUpEmail, password) {
        var userSignUp = {
            userName: email(signUpEmail),
            password: password
        };
        if (userSignup.userName == null) {
            $scope.HideNames = true;
        }
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