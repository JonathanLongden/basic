angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ, $rootScope) {


        $scope.signOut = function() { //logs a you out and redirects them to the home page
            // console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        };



        $scope.Test = function() { //self-invoking function that responses to whether a user is log in or not

            userId = $scope._id;
            mainServ.getKnownUser()
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

                });


        };



    });