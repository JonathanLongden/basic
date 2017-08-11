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




    // $scope.pieChartConfig = {
    // 	graphData: dataSetOne
    // };
    // console.log($scope.pieChartConfig);

});