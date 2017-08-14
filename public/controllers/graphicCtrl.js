angular.module('basic').controller('graphicCtrl', function($scope, $location, mainServ, $rootScope) {

    //$scope.pieChartConfig.graphData[0].value
    // $scope.pieChartConfig = {
    //     graphData: [
    //         // { name: 'A', value: 50 },
    //         // { name: 'B', value: 100 },
    //         // { name: 'C', value: 100 },
    //         // { name: 'D', value: 35 },
    //         // { name: 'E', value: 125 },
    //         // { name: 'F', value: 125 }
    //         //{name: 'F', value: 125}
    //     ]
    // };
    $scope.pieChartConfig = {
        graphData: [
            { name: 'A', value: 50 },
            { name: 'B', value: 100 },
            { name: 'C', value: 100 },
            { name: 'D', value: 35 },
            { name: 'E', value: 125 },
            { name: 'F', value: 125 }
            //{name: 'F', value: 125}
        ]
    };
    console.log($scope.pieChartConfig.graphData);

    // $scope.updatePieChart = function(AA,BB,CC,DD,EE){
    // 	console.log("going")
    // 	var newArr = [AA,BB,CC,DD,EE];

    // 	for (var i = 0; i < dataSetOne.length; i++) {
    // 		dataSetOne[i].value = newArr[i];
    // 	}

    // 	$scope.pieChartConfig.graphData = dataSetOne;
    // 	console.log($scope.pieChartConfig);


    // }
    $scope.piechart;
    $scope.getCards = function() {
        mainServ.getAllCards()
            .then(function(response) {
                //creates a list
                var riskCategory = [];

                for (var i = 0; i < response.length; i++) {
                    var category = response[i].riskCategory;
                    if (category != null) {
                        //if not null added to list
                        riskCategory.push(category)
                    }
                }
                //creates & counts items into an object

                // result = {};
                // //{deliverables:1}
                // for (var i = 0; i < riskCategory.length; ++i) {
                //     if (!result[riskCategory[i]])
                //         result[riskCategory[i]] = 0;
                //     ++result[riskCategory[i]];
                // }
                // console.log(result);
                //need something like
                //{name:deliverables, value:1}
                //should scope this object
                //$scope.pieChartConfig.result;

                var count = {};

                riskCategory.forEach(function(i) { count[i] = (count[i] || 0) + 1; });
                // var graphDataexample = new Object();
                // var newdata = new graphDataexample.name = 'A';
                // var graphDataexample.value = '50';
                // console.log(graphDataexample);
                var txt = "";
                for (x in count) {
                    txt += x + "," + count[x] + ",";
                    //list.push(txt);


                }
                console.log(txt);
                var datalist = txt.split(",");
                console.log(datalist);
                // datalist.push(txt.split(","));
                // var len = datalist.length;
                // for (var i = 0; i < len; i++) {
                //     console.log(i + " " + datalist[i]);
                // }
                // console.log(datalist);



                // for (var i = 0; i < len; i++) {
                //     if (i % 2 === 0) {
                //         arr.push((new graphData(datalist[i], datalist[i + 1])));
                //         arr.push((new graphData(datalist[i], datalist[i + 1])));
                //     }
                // }
                // console.log(arr);
                // var graphData = new Object();
                // for (var i = 0; i < len; i++) {
                //     if ((i % 2) == 0) {
                //         graphData[i] = ({ name: datalist[i], value: datalist[i + 1] });
                //         arr.push(graphData[i]);

                //     }
                //     console.log(i);
                // }
                // console.log(graphData);
                // console.log(arr);

                // var array = [];
                // for (var i = 0; i < len; i++) {
                //     if ((i % 2) == 0) {
                //         data[i] = new Object(); // creates a new object
                //         data[i].name = datalist[i];
                //         data[i].value = datalist[i + 1];
                //         array.push(single);
                //     }
                // }
                // console.log(array);
            })
    }





});