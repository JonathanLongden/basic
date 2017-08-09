angular.module('basic').controller('qaCtrl', function($scope, $location, mainServ) {

    this.myDate = new Date();
    this.isOpen = false;

    $scope.category = {
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


    $scope.formInfo = {};
    $scope.qaCard = function(mmddyyyy, person, category, description, mitigration) {
        var qaCardData = {
            riskObservationDate: mmddyyyy,
            riskReportedBy: person,
            riskCategory: category,
            riskDescription: description,
            riskMitigration: mitigration

        };
        console.log(qaCardData);
        mainServ.qcCardPost(qaCardData)
            .then(function(response) {
                //console.log("You have Signed in like a champ!");
                var verify = response;
                //console.log(response.data)
                //  if (verify.user){
                //     $location.path('map');
                //     $scope.userLogin = "";
                //   } else {
                //     $scope.wrongCred = false;
                //   }
            })
    };
    this.myDate = new Date();
    this.isOpen = false;

    $scope.category = {
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


    $scope.formInfo = {};
    $scope.qaCard = function(mmddyyyy, person, category, description, mitigration) {
        var qaCardData = {
            riskObservationDate: mmddyyyy,
            riskReportedBy: person,
            riskCategory: category,
            riskDescription: description,
            riskMitigration: mitigration

        };
        console.log(qaCardData);
        mainServ.qcCardPost(qaCardData)
            .then(function(response) {
                //console.log("You have Signed in like a champ!");
                var verify = response;
                //console.log(response.data)
                //  if (verify.user){
                //     $location.path('map');
                //     $scope.userLogin = "";
                //   } else {
                //     $scope.wrongCred = false;
                //   }
            })
    };



});