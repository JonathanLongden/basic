angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ, $rootScope) {


        $scope.signOut = function() { //logs a you out and redirects them to the home page
            // console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        };


        //self-invoking function that responses to whether a user is log in or not
        (function() {
            mainServ.getKnownUser()
                .then(function(response) {
                    console.log(response); //{user:"anonymous"}
                    console.log(response.data);
                    console.log(response.data.local);
                    console.log(response.data.user);
                    console.log(response.user);
                    console.log(response.data.userName)
                    var user = response.data;

                    var local = response.data;
                    console.log(local) //undefined for anoymous

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