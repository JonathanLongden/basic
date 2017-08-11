angular.module('basic').controller('qaCtrl', function($scope, $location, mainServ) {


    $scope.userId;
    // $scope.success;
    $scope.addButton = "Add Quality Risk Card";
    // $scope.mySales;

    // (function(userInfo) {
    //     console.log(userInfo)
    //     mainServ.getKnownUser(userInfo)
    //         .then(function(response) {
    //             //console.log(response);
    //             var verify = response.data;
    //             // console.log($scope.userId);
    //             if (verify.local) {
    //                 $scope.userId = response.data._id;
    //             } else if (verify.facebook) {
    //                 $scope.userId = response.data._id;
    //             }

    //         });

    // })()

    // var geocoder = new google.maps.Geocoder();



    // $scope.postSale = function(sale) {

    //         var addObj = {
    //             address: sale.address + " Bozeman"
    //         };

    //         console.log(addObj);

    //         geocoder.geocode(addObj, function(results, status) {
    //             var temp = results[0].geometry.viewport;


    //             sale.lat = temp.b.b;
    //             sale.lng = temp.f.f;
    //             mainServ.postSale(sale)
    //             $scope.getMySales();
    //         })

    //     }
    //   $scope.getMySales = function(){
    //     mainServ.getMySales()
    //     .then(function(response){
    //       $scope.mySales = response;
    //     })
    //   }

    //   $scope.deleteSale = function(id){
    //     console.log(id);
    //     mainServ.deleteSale(id)
    //     .then(function(response){
    //       $scope.getMySales();
    //     })
    //   }
    this.myDate = new Date();
    this.isOpen = false;
    $scope.riskReportedBy = 'Hello';

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
    // $scope.postSale = function(sale) {
    //(mmddyyyy, person, category, description, mitigration)
    $scope.formInfo = {};
    $scope.postCard = function(card) {
        card.riskReportedBy = $scope.riskReportedBy;
        card.riskCategory = card.riskCategory.model;
        // var qacard = {
        //     riskObservationDate: mmddyyyy,
        //     riskReportedBy: person,
        //     riskCategory: category,
        //     riskDescription: description,
        //     riskMitigration: mitigration

        // };
        console.log(card);
        mainServ.qcCardPost(card)
            .then(function(response) {
                console.log("You Created a Card");
                var verify = response;
                console.log(verify)
            })
    };


    function real(data) {
        var personemail = data.data.local.userName;
        try {
            if (personemail) {
                try {
                    $scope.riskReportedBy = data.data.local.userName;
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
                        $scope.userId = response.data._id;
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