angular.module("basic")
    .directive('simplePieChart', function($window) {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="pieChart"></div>',
            scope: {
                chartConfig: '='
            },
            link: function(scope, element, attrs) {
                var chart = pieChart(),
                    chartEl = d3.select(element[0]),
                    win = angular.element($window);

                win.bind('resize', function() {
                    var newBcr = element[0].getBoundingClientRect();
                    if (newBcr.width != chart.canvasWidth() || newBcr.height !== chart.canvasHeight()) {
                        chartEl.call(chart.resizeChart(newBcr.width, chart.canvasHeight()));
                    }
                });

                // runtime width configuration
                if (scope.chartConfig.canvasWidth) {
                    chart = chart.canvasWidth(scope.chartConfig.canvasWidth);
                } else {
                    chart = chart.canvasWidth(element[0].getBoundingClientRect().width);
                }

                // runtime property configuration
                chart.getConfigurableProperties().forEach(function(prop) {
                    if (scope.chartConfig.hasOwnProperty(prop) && chart.hasOwnProperty(prop)) {
                        chart = chart[prop].call(chart, scope.chartConfig[prop]);
                    }
                });

                // init and draw
                chart.initChart(element[0]);
                setInterval(function() { chart.initChart(element[0]); }, 1000); //1000 updates in 1 second

                /**
                 * @watch
                 * Data change
                 */
                scope.$watch('chartConfig.graphData', function(nv, ov) {
                    if (nv === undefined) { return; }
                    chartEl.datum(nv).call(chart);
                });
            }
        };
    });