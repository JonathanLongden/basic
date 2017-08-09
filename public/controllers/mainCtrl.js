angular.module("basic")
    .controller("mainCtrl", function($scope, $location, mainServ) {
        this.myDate = new Date();
        this.isOpen = false;

        //$scope.mmddyyyy = myDate;

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
        // (function (){                   //self-invoking function that responses to whether a user is log in or not
        //     mainServ.getKnownUser()
        //     .then(function(response){
        //         var userID = response.data;
        //         var user;
        //         if (userID.facebook){
        //         logoutIcon = true;
        //         } else if (userID.local) {
        //         logoutIcon = true;
        //         } else {
        //         logoutIcon = false;
        //         }
        //         $scope.logOutStuff = logoutIcon;
        //     });
        //     })()

        $scope.signOut = function() { //logs a you out and redirects them to the home page
            console.log("SignOut");
            mainServ.getSignOut()
                .then(function(response) {})
        }

    });