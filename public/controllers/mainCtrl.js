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
                    try {
                        console.log(response); //{user:"anonymous"}
                        console.log(response.data);
                        console.log(response.results);
                        console.log(response.results.local);
                        //console.log(reponse.user);//undefined

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
                    } catch (err) {
                        console.log(err);
                    }

                });


        })()




    });