angular.module('basic').controller('loginCtrl', function($scope, $location, mainServ, $rootScope) {

    $scope.CorrectLogin = true;
    $scope.wrongpw = true;
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
                    $scope.wrongpw = false;
                    $location.path('/landingPage');

                }
            })
    };

    function email(useremail) {
        var email = useremail;
        var test = useremail.toString().includes("woodardcurran.com");
        if (test) {
            $scope.CorrectLogin = true;
            return email;
        } else {
            $scope.CorrectLogin = false;
            return null;

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