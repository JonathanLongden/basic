angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ) {

        $scope.signOut = function() { //logs a you out and redirects them to the home page
            console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        }

    });