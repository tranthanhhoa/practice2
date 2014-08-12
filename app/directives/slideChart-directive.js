define([
    './directives',
    'd3',
    'charts/slideChart',
    '../../js/better-simple-slideshow'
], function (directives, d3, slideChart,slideshow) {
    'use strict';
    directives.directive("slideChart", function () {

        function link(scope,element,attrs,ChartCtrl) {
            scope.bgColor = scope.$parent.bgColor;
            scope.$parent.$watch("bgColor",function(){
                scope.bgColor = scope.$parent.bgColor;
            },true);
            scope.$watch("datachart",function(newVal, oldVal){
                if(newVal != oldVal){
                    var opts = {
                        auto : {
                            speed : 2000,
                            pauseOnHover: true
                        },
                        fullScreen : false,
                        swipe : true
                    };
                    makeBSS('.num1', opts);
                }

            });
        }

        return {
            restrict: 'E',
            transclude: true,
            templateUrl: "app/partials/slide.html",
            controller: "ChartCtrl",
            scope: {
                data: '=',
                background : '='
            },
            link: link
        }
    })
})