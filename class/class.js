angular.module('myapp.class', ['ngRoute', 'ui.router'])
    .config(function($stateProvider)
    {
        $stateProvider.state("class", {
            url: "/class",
            templateUrl: 'class/class.html',
            controller: 'ClassCtrl',
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
    .controller('ClassCtrl', function($scope)
    {
        $scope.classes = [
            'lx-transition--to-left',
            'lx-transition--from-left',
            'lx-transition--to-right',
            'lx-transition--from-right',
            'lx-transition--to-top',
            'lx-transition--from-top',
            'lx-transition--to-bottom',
            'lx-transition--from-bottom',
            'lx-transition--fade-out',
            'lx-transition--fade-in',
            'lx-transition--scale-down',
            'lx-transition--scale-up',
        ];
    });
