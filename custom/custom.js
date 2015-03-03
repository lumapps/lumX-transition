angular.module('myapp.custom', ['ngRoute', 'ui.router'])
    .config(function($stateProvider)
    {
        $stateProvider.state("custom", {
            url: "/custom",
            templateUrl: 'custom/custom.html',
            controller: 'CustomCtrl',
            lumx: {
                enter: {
                    start: {
                        translateX: "100%",
                        translateZ: "0"
                    },
                    end: {
                        translateX: "0",
                        translateZ: "0"
                    },
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        type: 'velocity'
                    }
                },
                leave: {
                    start: {
                        translateX: "0",
                        translateZ: "0"
                    },
                    end: {
                        translateX: "100%",
                        translateZ: "0"
                    },
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        type: 'velocity'
                    }
                }
            }
        });
    })
    .controller('CustomCtrl', function($scope)
    {

    });
