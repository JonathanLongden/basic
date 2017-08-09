angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ) {


        $scope.names = {};


        $scope.getUsername = function(name) {
            $scope.userName = name;
            console.log(name)
        }
        $scope.userId;


        $scope.signOut = function() { //logs a you out and redirects them to the home page
            // console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        }

        (function(userId) { //self-invoking function that responses to whether a user is log in or not
            mainServ.getKnownUser(userId)
                .then(function(response) {
                    console.log(response);
                    var userID = response.data;
                    var user;
                    console.log(userID);
                    console.log($scope.userId)
                    console.log($userd)
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
        })();



    });