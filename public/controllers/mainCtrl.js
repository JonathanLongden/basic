angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ) {

        (function(userInfo) {
            mainServ.getKnownUser(userInfo)
                .then(function(response) {
                    console.log(response);
                    var verify = response.data;
                    console.log($scope.userId);
                    if (verify.local) {
                        $scope.userId = response.data._id;
                    } else {
                        $location.url('/landingPage');
                    }

                });
        })()


        // (function() { //self-invoking function that responses to whether a user is log in or not
        //     mainServ.getKnownUser()
        //         .then(function(response) {
        //             var userID = response.data;
        //             var user;
        //             if (userID.facebook) {
        //                 logoutIcon = true;
        //             } else if (userID.local) {
        //                 logoutIcon = true;
        //             } else {
        //                 logoutIcon = false;
        //             }
        //             $scope.logOutStuff = logoutIcon;
        //         });
        // })()

        $scope.signOut = function() { //logs a you out and redirects them to the home page
            console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        }

    });