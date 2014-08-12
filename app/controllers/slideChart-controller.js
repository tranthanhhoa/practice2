define(['./controllers','d3'],function(controllers,d3){
    'use strict';
    controllers.controller('ChartCtrl',function($scope,dataService){
        $scope.count = 0;
        dataService.getData().then(function(data){
            $scope.datachart = data;
        });
        $scope.bgColor = "yellow";
        $scope.colors = d3.scale.category10();
    })
})