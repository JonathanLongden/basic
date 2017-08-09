angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ) {


        // (function() {
        //     mainServ.getKnownUser()
        //         .then(function(response) {
        //             console.log(response);
        //             var verify = response.data;
        //             console.log($scope.userId);
        //             if (verify.local) {
        //                 $scope.userId = response.data._id;
        //             } else {
        //                 $location.path('/landingPage');
        //                 //$location.url('/landingPage');
        //             }

        //         });
        // })()


        (function() { //self-invoking function that responses to whether a user is log in or not
            mainServ.getKnownUser()
                .then(function(response) {
                    console.log(response);
                    var userID = response.data;
                    var user;
                    if (userID.facebook) {
                        console.log(userID);
                    } else if (userID.local) {
                        console.log(userID);
                    } else {
                        $location.path('/landingPage');
                        // logoutIcon = false;
                    }
                    $scope.logOutStuff = logoutIcon;
                });
        })()

        $scope.signOut = function() { //logs a you out and redirects them to the home page
            // console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        }

    });