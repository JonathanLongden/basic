angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ, $rootScope) {


        $scope.signOut = function() { //logs a you out and redirects them to the home page
            // console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        };



        // $scope.Test = function() { //self-invoking function that responses to whether a user is log in or not

        //     mainServ.getKnownUser()
        //         .then(function(response) {
        //             console.log(response);
        //             var user = response.data;

        //             if (user.userName) {
        //                 //do nothing
        //             } else {
        //                 //do something
        //                 $location.path('/landingPage');
        //             }

        //         });


        // };
        //self-invoking function that responses to whether a user is log in or not
        (function() {
            mainServ.getKnownUser()
                .then(function(response) {
                    console.log(response);
                    var user = response.data;
                    var local = response.data;
                    console.log(local)
                    console.log(local.userName)
                    if (user == "anonymous") {
                        //do something
                        $location.path('/landingPage');

                    } else if (local != null) {
                        //do nothing

                    } else {
                        //do something
                        $location.path('/landingPage');
                    }

                });


        })()




    });