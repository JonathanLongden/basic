angular.module('basic').controller('graphicCtrl', function($scope, $location, mainServ, $rootScope) {

    $scope.pieChartConfig.graphData[0].value
        // $scope.pieChartConfig = {
        //     graphData: [
        //         { name: 'A', value: 50 },
        //         { name: 'B', value: 100 },
        //         { name: 'C', value: 100 },
        //         { name: 'D', value: 35 },
        //         { name: 'E', value: 125 },
        //         { name: 'F', value: 125 }
        //         //{name: 'F', value: 125}
        //     ]
        // };
        // $scope.pieChartConfig = {
        //     graphData: [
        //         { name: 'A', value: 50 },
        //         { name: 'B', value: 100 },
        //         { name: 'C', value: 100 },
        //         { name: 'D', value: 35 },
        //         { name: 'E', value: 125 },
        //         { name: 'F', value: 125 }
        //         //{name: 'F', value: 125}
        //     ]
        // };


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
                //unique values in a list
                var uniques = riskCategory.unique();
                for (var i = 0; i < response.length; i++) {
                    var category = response[i].riskCategory;
                    if (category != null) {
                        //if not null added to list
                        riskCategory.push(category)
                    }
                }
                //loop through list of unique items
                // 
                for (var i = 0; i < riskCategory.length; i++) {
                    var num = riskCategory[i];
                    counts[num] = counts[num] ? counts[num] + 1 : 1;
                    console.log(counts[num]);
                }
                result = {};
                for (var i = 0; i < riskCategory.length; ++i) {
                    if (!result[riskCategory[i]])
                        result[riskCategory[i]] = 0;
                    ++result[riskCategory[i]];
                }
                console.log(result);


            })
    }




    // $scope.pieChartConfig = {
    // 	graphData: dataSetOne
    // };
    // console.log($scope.pieChartConfig);

});