angular.module('basic').controller('graphicCtrl', ['$scope', '$state', '$location', 'mainServ', '$rootScope',
    function($scope, $state, $location, mainServ, $rootScope) {
        $scope.MyCards = null;
        $scope.pieChartConfig = {
            graphData: []
        };
        //$scope.load = $state.reload();

        function personsCards(data) {
            var persondata = data;
            try {
                if (persondata) {
                    try {
                        var riskCategory = [];
                        for (var i = 0; i < persondata.length; i++) {
                            var category = persondata[i].riskCategory;
                            if (category != null) {
                                //if not null added to list
                                riskCategory.push(category);
                            }
                        }
                        var count = {};

                        riskCategory.forEach(function(i) { count[i] = (count[i] || 0) + 1; });

                        var txt = "";
                        for (var x in count) {
                            txt += x + "," + count[x] + ",";

                        }
                        var datalist = [];
                        datalist = txt.split(",");
                        var len = datalist.length;

                        var alldata = {};
                        for (var j = 0; j < len; j++) {
                            if ((j % 2) == 0) {
                                if (alldata[j] == "" || datalist[j + 1] == undefined) {
                                    //do nothing
                                } else {
                                    alldata[j] = ({ name: datalist[j], value: datalist[j + 1] });
                                    $scope.pieChartConfig.graphData.push(alldata[j]);
                                }

                            }

                        }

                        return true;

                    } catch (err) {
                        console.log(err);
                    }

                } else {

                    return null;

                }
            } catch (err) {

                console.log(err);
            }

        }
        //self-invoking function
        //(function() {
        // code
        // })()
        (function() {
            // $scope.getMyCards = function() {
            mainServ.getAllCards()
                .then(function(response) {
                    $scope.MyCards = response;
                    //var data = response;
                    try {
                        var cards = personsCards(response);
                        if (cards) {
                            //true Display Grapch
                        } else {
                            //false Show a Sign?
                        }
                    } catch (err) {
                        console.log(err);
                    }

                });
        })();

        $scope.deleteCard = function(id) {
            mainServ.deleteCard(id)
                .then(function(response) {
                    //$location.path(/summary);
                    //$window.location.reload();
                    //$state.reload();
                    //$route.reload();
                    $state.reload();

                    // $state.transitionTo($state.current, $stateParams, {
                    //     reload: true,
                    //     inherit: false,
                    //     notify: true
                    // });
                    $scope.getAllCards();

                });
        };





    }
]);