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
                // var newdata = graphDataexample.name = 'A';
                // graphDataexample.value = '50';
                // console.log(graphDataexample);
                for (x in count) {
                    txt += count[x] + " ";
                    console.log(txt)
                }

                console.log(count)
                console.log(count[Object.keys(count)[0]]);
                console.log(count[Object.keys(count)[1]]);
                console.log(count[Object.keys(count)[2]]);
                console.log(count[Object.keys(count)[3]]);
                console.log(count[Object.keys(count)[4]]);
                var newArrayDataOfOjbect = Object.values(count)
                console.log(newArrayDataOfOjbect);

            })
    }




    // $scope.pieChartConfig = {
    // 	graphData: dataSetOne
    // };
    // console.log($scope.pieChartConfig);

});