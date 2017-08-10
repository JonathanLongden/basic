angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ, $rootScope) {


        $scope.signOut = function() { //logs a you out and redirects them to the home page
            // console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        };

        function real(reponse) {
            var person = response.data.local.userName;
            try {
                if (person) {
                    return true
                } else {
                    return null
                };
            } catch (err) {
                console.log(err);
            } finally {
                if (person) {
                    return true
                } else {
                    return null

                };
            };
        };

        //self-invoking function that responses to whether a user is log in or not
        (function() {
            mainServ.getKnownUser()
                .then(function(response) {
                    try {
                        // console.log(response); //{user:"anonymous"}
                        // console.log(response.data);
                        // console.log(response.data.local); //undefined for user anonymous
                        // console.log(response.data.local.userName); //Cannot read property userName of undefined

                        var user = real(reponse);
                        if (user) {
                            //true
                        } else {
                            $location.path('/landingPage');
                        }
                    } catch (err) {
                        console.log(err);
                    } finally {
                        var user = real(reponse);
                        if (user) {
                            //true
                        } else {
                            $location.path('/landingPage');
                        }

                    }

                });


        })()




    });