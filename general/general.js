angular.module('myapp.general', ['ngRoute', 'ui.router'])
    .config(function($stateProvider)
    {
        $stateProvider.state("general", {
            url: "/",
            templateUrl: 'general/general.html',
            controller: 'GeneralCtrl',
            lumx: {
                enter: {
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        classes: 'lx-transition--scale-up'
                    }
                },
                leave: {
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        classes: 'lx-transition--scale-down'
                    }
                }
            }
        });
    })
    .controller('GeneralCtrl', function($scope)
    {
        $scope.easings = [
            'ease',
            'easeIn',
            'easeOut',
            'easeInOut',
            'snap',
            'easeInCubic',
            'easeOutCubic',
            'easeInOutCubic',
            'easeInCirc',
            'easeOutCirc',
            'easeInOutCirc',
            'easeInExpo',
            'easeOutExpo',
            'easeInOutExpo',
            'easeInQuad',
            'easeOutQuad',
            'easeInOutQuad',
            'easeInQuart',
            'easeOutQuart',
            'easeInOutQuart',
            'easeInQuint',
            'easeOutQuint',
            'easeInOutQuint',
            'easeInSine',
            'easeOutSine',
            'easeInOutSine',
            'easeInBack',
            'easeOutBack',
            'easeInOutBack',
        ];
    });
