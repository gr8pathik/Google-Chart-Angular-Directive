(function() {
    "use strict";
    google.load('visualization', '1.0', {
        'packages': ['corechart', 'table']
    });
    chartApp.directive("pgChart", function() {
        return {
            restrict: "E",
            scope: {
                chartType: '=type',
                chartData: '=data',
                chartOptions: '=options'
            },
            template: '<div class="chart-container"><div class="chart-title" ng-show="chartOptions.chartTitle">{{chartOptions.chartTitle}}</div><div class="chart-view"></div><div class="other-part"><div class="dropdown"> <button class="btn btn-default dropdown-toggle" type="button" ng-click="changeChart(chartTypeOrg);"> <span class="glyphicon glyphicon-globe" title="{{otherChart}}" aria-hidden="true"></span></button> <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"> <span class="glyphicon glyphicon-wrench"></span></button> <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1"><li class="dropdown-header">Other Charts</li><li><a href="#" ng-repeat="otherChart in chartOptions.otherCharts" title="{{otherChart}}" ng-click="changeChart(otherChart);">{{otherChart}}</a></li></ul></div></div></div>',
            link: function($scope, $elem, $attr) { //<span class="glyphicon glyphicon-globe" ng-repeat="otherChart in chartOptions.otherCharts" title="{{otherChart}}" ng-click="changeChart(otherChart);" aria-hidden="true"></span>
                console.log($scope, $elem, $attr);
                $scope.$watch('chartType', drawChart);
                $scope.$watch('data', function(newValue, oldValue){
                    console.log("newValue", newValue, oldValue);
                });
                $scope.chartTypeOrg = $scope.chartType;
                $scope.showTable = false;
                var chartObj = new google.visualization.ChartWrapper({
                    containerId: $elem[0].querySelector('.chart-view')
                });
                function drawChart(){
                    if (typeof $scope.chartData === 'undefined') {
                        return false;
                    };
                    try {
                        var data = google.visualization.arrayToDataTable($scope.chartData);
                    } catch (err) {
                        console.log(err);
                        debugger;
                    }
                    chartObj.setChartType($scope.chartType);
                    chartObj.setDataTable(data);
                    chartObj.setOptions($scope.chartOptions);                    
                    chartObj.draw();
                }
                $scope.changeView = function(){
                    $scope.showTable = !$scope.showTable;
                }
                $scope.changeChart = function(chartType){
                    // if($scope.chartType === chartType){
                    //     $scope.chartType = chartTypeOrg;
                    // }else{
                        $scope.chartType = chartType;
                    // }
                }
            }
        }
    });
})();