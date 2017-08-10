angular.module('basic').controller('loginCtrl', function($scope, $location, mainServ, $rootScope) {

    $scope.CorrectLogin = false;
    $scope.wrongCred = true;
    $scope.userName;

    $scope.postLogin = function(loginEmail, secret) {
        try {
            var userLogin = {
                userName: email(loginEmail),
                password: secret
            };
            if (userLogin.userName == null) {
                $scope.HideNames = true;
            }
        } catch (err) {
            console.log(err);
        }

        mainServ.loginPostLogin(userLogin)
            .then(function(response) {
                //console.log(response);
                var verify = response;
                if (verify.user) {
                    //guiding user to forms
                    $location.path('forms');
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
    function email(useremail) {
        var email = useremail;
        var test = useremail.toString().includes("woodardcurran.com");
        if (test) {
            return email
        } else {
            return null
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