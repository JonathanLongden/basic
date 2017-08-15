angular.module('basic').controller('graphicCtrl', function($scope, $location, mainServ, $rootScope) {


    $scope.pieChartConfig = {
        graphData: []
    };

    // $scope.pieChartConfig = {
    //     graphData: [
    //         { name: 'A', value: 50 },
    //         { name: 'B', value: 100 },
    //         { name: 'C', value: 100 },
    //         { name: 'D', value: 35 },
    //         { name: 'E', value: 125 },
    //         { name: 'F', value: 125 },
    //         { name: 'F', value: 125 }
    //     ]
    // };
    //$scope.pieChartConfig;
    //console.log($scope.pieChartConfig); //{grapData: Array(7)}
    //arrow GraphData:(7)[{...},{...},{...}]
    //console.log($scope.pieChartConfig.graphData); //(7)[{...},{...},{...}]
    //arrow 0: {name:A, value:50}

    //currently[] 0: { graphData: Array(5) }

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
                            riskCategory.push(category)
                        }
                    }
                    var count = {};

                    riskCategory.forEach(function(i) { count[i] = (count[i] || 0) + 1; });

                    var txt = "";
                    for (x in count) {
                        txt += x + "," + count[x] + ",";

                    }
                    var datalist = [];
                    datalist = txt.split(",");
                    //console.log(datalist);
                    var len = datalist.length;
                    // for (var i = 0; i < len; i++) {
                    //     console.log(datalist[i]);
                    // }
                    //Priting out as a list
                    //var graphData = [];
                    var alldata = new Object();
                    for (var i = 0; i < len; i++) {
                        if ((i % 2) == 0) {
                            if (alldata[i] == "" || datalist[i + 1] == undefined) {
                                //do nothing
                            } else {
                                alldata[i] = ({ name: datalist[i], value: datalist[i + 1] });
                                $scope.pieChartConfig.graphData.push(alldata[i]);
                            }

                        }
                        //console.log(i);
                    }
                    //$scope.pieChartConfig.push({ graphData });
                    //console.log($scope.pieChartConfig);
                    //console.log($scope.pieChartConfig.graphData); //
                    return true;
                    //return true;
                } catch (err) {
                    console.log(err);
                }

            } else {
                //$location.path('/landingPage');
                return null;

            };
        } catch (err) {
            //$location.path('/landingPage');
            console.log(err);
        }

    };


    //self-invoking function that responses to whether a user is log in or not
    (function() {
        mainServ.getAllCards()
            .then(function(response) {
                var data = response;
                try {
                    var cards = personsCards(data);
                    if (cards) {
                        //true Display Grapch
                    } else {
                        //false Show a Sign?
                    }
                } catch (err) {
                    console.log(err);
                }

            });
    })()


    $scope.getCards = function() {

        // mainServ.getAllCards()
        //     .then(function(response) {
        //         $scope.slides = response;
        //         // function getdata(response) {
        //         //     return p1 * p2; // The function returns the product of p1 and p2
        //         // }
        //         //creates a list
        //         var riskCategory = [];

        //         for (var i = 0; i < response.length; i++) {
        //             var category = response[i].riskCategory;
        //             if (category != null) {
        //                 //if not null added to list
        //                 riskCategory.push(category)
        //             }
        //         }

        //         var count = {};

        //         riskCategory.forEach(function(i) { count[i] = (count[i] || 0) + 1; });

        //         var txt = "";
        //         for (x in count) {
        //             txt += x + "," + count[x] + ",";

        //         }

        //         var datalist = [];
        //         datalist = txt.split(",");
        //         //console.log(datalist);
        //         var len = datalist.length;
        //         // for (var i = 0; i < len; i++) {
        //         //     console.log(datalist[i]);
        //         // }
        //         //Priting out as a list
        //         var arr = [];
        //         var graphData = new Object();
        //         for (var i = 0; i < len; i++) {
        //             if ((i % 2) == 0) {
        //                 if (datalist[i] == "" || datalist[i + 1] == undefined) {
        //                     //do nothing
        //                 } else {
        //                     graphData[i] = ({ name: datalist[i], value: datalist[i + 1] });
        //                     arr.push(graphData[i]);
        //                 }

        //             }
        //             //console.log(i);
        //         }

        //         //$scope.pieChartConfig = arr;
        //         return arr
        //             //return $scope.pieChartConfig = arr;





        //})

    };

    //console.log($scope.pieChartConfig);




});