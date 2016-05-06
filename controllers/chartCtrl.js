(function(){
    "use strict";
    chartApp.controller("chartCtrl", function($scope){
        $scope.charts = [{
            chartType: 'GeoChart',
            chartData: [
                ['Locale', 'Count', 'Percent'],
                ['Germany', 22, 23],
                ['United States', 34, 11],
                ['Brazil', 42, 11],
                ['Canada', 57, 32],
                ['France', 6, 9],
                ['RU', 72, 3]
            ],
            chartOptions: {
                height: 300,
                backgroundColor: '#eee',
                chartTitle: 'World Statistics',
                colorAxis: {colors: ['#FF0000', '#00FF00']},
                legend: 'none',
                otherCharts: ['ColumnChart', 'LineChart', 'Table']
            }
        },{
            chartType: 'GeoChart',
            chartData: [
                ['City',   'Population', 'Area'],
                ['Rome',      2761477,    1285.31],
                ['Milan',     1324110,    181.76],
                ['Naples',    959574,     117.27],
                ['Turin',     907563,     130.17],
                ['Palermo',   655875,     158.9],
                ['Genoa',     607906,     243.60],
                ['Bologna',   380181,     140.7],
                ['Florence',  371282,     102.41],
                ['Fiumicino', 67370,      213.44],
                ['Anzio',     52192,      43.43],
                ['Ciampino',  38262,      11]
            ],
            chartOptions: {
                height: 300,
                region: 'US',
                resolution: 'provinces',
                backgroundColor: '#eee',
                colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
                datalessRegionColor: '#f8bbd0',
                defaultColor: '#f5f5f5',
                chartTitle: 'USA Statistics',
                displayMode: 'markers',
                animation:{
                    duration: 1000,
                    easing: 'out',
                },
                otherCharts: ['ColumnChart', 'LineChart', 'Table']
            }
        },{
            chartType: 'GeoChart',
            chartData: [
                ['State', 'Data'],
                ['West Bengal', 5],
                ['Gujarat', 9],
                ['Maharashtra', 3],
                ['Bihar', 0],
                ['Karnataka', 2],
            ],
            chartOptions: {
                height: 300,
                region: 'IN',
                resolution: 'provinces',
                backgroundColor: '#eee',
                chartTitle: 'INDIA Statistics',
                otherCharts: ['ColumnChart', 'Table']
            }
        }];
    });
})();