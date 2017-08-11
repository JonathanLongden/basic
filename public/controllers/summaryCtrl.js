angular.module('basic').controller('summaryCtrl', function($scope, $location, mainServ) {
    $scope.personemail = 'Hello';
    $scope.Admistration = true; //true hides, false shows
    $scope.piechart = true;

    function real(data) {
        var person = data.data.local.userName;
        try {
            if (person) {
                try {
                    $scope.personemail = data.data.local.userName;
                    return true;
                } catch (err) {
                    console.log(err);
                }

            } else {
                $location.path('/landingPage');
                return null;

            };
        } catch (err) {
            $location.path('/landingPage');
            console.log(err);
        }

    };

    //self-invoking function that responses to whether a user is log in or not
    (function() {
        mainServ.getKnownUser()
            .then(function(response) {
                var data = response;
                try {
                    // console.log(response); //{user:"anonymous"}
                    // console.log(response.data);
                    // console.log(response.data.local); //undefined for user anonymous
                    // console.log(response.data.local.userName); //Cannot read property userName of undefined

                    var user = real(data);
                    if (user) {
                        //true
                    } else {
                        $location.path('/landingPage');
                    }
                } catch (err) {
                    $location.path('/landingPage');
                    console.log(err);
                }

            });


    })()
});