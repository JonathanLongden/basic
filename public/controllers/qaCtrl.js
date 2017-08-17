angular.module('basic').controller('qaCtrl', function($scope, $location, mainServ) {


    $scope.userId = null;
    // $scope.success;
    $scope.addButton = "Add Quality Risk Card";
    $scope.addmButton = "Add Mitigation Discussion Card";
    $scope.MyCards = null;


    this.myDate = new Date();
    this.isOpen = false;
    $scope.riskReportedBy = 'Web Site has Crashed';
    $scope.memberPresent = 'User';

    function formatDate(date) {
        console.log(date);
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        return [year, month, day].join('-');
    }

    $scope.riskCategory = {
        model: null,
        availableOptions: [
            { id: '1', name: 'Sample Contaminations/Bias Potential' },
            { id: '2', name: 'Environment/Field Conditions' },
            { id: '3', name: 'Training' },
            { id: '4', name: 'Documentation/Communication' },
            { id: '5', name: 'Data Validation' },
            { id: '6', name: 'Data Import' },
            { id: '7', name: 'Data Storage' },
            { id: '8', name: 'Data Export/Display' },
            { id: '9', name: 'Data Evaluations/Calculations' },
            { id: '10', name: 'Documentation/Communication' },
            { id: '11', name: 'Design/Calculations' },
            { id: '12', name: 'Deliverables' }
        ]
    };

    $scope.postCard = function(card) {
        console.log(card);
        card.riskReportedBy = $scope.riskReportedBy;
        card.riskCategory = card.riskCategory.model;
        card.riskObservationDate = formatDate(card.riskObservationDate);


        //console.log(card);
        mainServ.qcCardPost(card)
            .then(function(response) {
                //console.log("You Created a Card");
                var verify = response;
                //console.log(verify)
            });
    };


    function real(data) {
        var personemail = data.data.local.userName;
        try {
            if (personemail) {
                try {
                    $scope.riskReportedBy = data.data.local.userName;
                    $scope.memberPresent = data.data.local.userName;
                    return true;
                } catch (err) {
                    console.log(err);
                }

            } else {
                $location.path('/landingPage');
                return null;

            }
        } catch (err) {
            $location.path('/landingPage');
            console.log(err);
        }

    }

    //self-invoking function that responses to whether a user is log in or not
    (function() {
        mainServ.getKnownUser()
            .then(function(response) {
                var data = response;
                try {
                    var user = real(data);
                    if (user) {
                        $scope.userId = response.data._id;
                    } else {
                        $location.path('/landingPage');
                    }
                } catch (err) {
                    $location.path('/landingPage');
                    console.log(err);
                }

            });


    })();

    //getting Cards
    $scope.getMyCards = function() {
        mainServ.getAllCards()
            .then(function(response) {
                $scope.MyCards = response;
            });
    };

    $scope.deleteCard = function(id) {
        //console.log(id);
        mainServ.deleteCard(id)
            .then(function(response) {
                $scope.getMyCards();
            });
    };




});