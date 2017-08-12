angular.module('basic').controller('graphicCtrl', function($scope, $location, mainServ, $rootScope) {

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
                console.log(response);
                console.log(response.data.riskCategory);
                console.log(response.riskCategory);
                var riskCategory = [];
                for (var i = 0; i < response.length; i++) {
                    console.log(response[i].riskCategory);
                    console.log(response[i].data.riskCategory);
                }
            })
    }




    // $scope.pieChartConfig = {
    // 	graphData: dataSetOne
    // };
    // console.log($scope.pieChartConfig);

});