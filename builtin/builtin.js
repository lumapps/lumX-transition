angular.module('myapp.builtin', ['ngRoute', 'ui.router'])
    .config(function($stateProvider)
    {
        $stateProvider.state("builtin", {
            url: "/builtin",
            templateUrl: 'builtin/builtin.html',
            controller: 'BuiltinCtrl',
            lumx: {
                enter: {
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        builtin: 'fromLeft fadeIn'
                    }
                },
                leave: {
                    options: {
                        duration: 500,
                        easing: 'easeInOutCirc',
                        builtin: 'toLeft fadeOut'
                    }
                }
            }
        });
    })
    .controller('BuiltinCtrl', function($scope)
    {
        $scope.builtins = [
            'toLeft',
            'fromLeft',
            'toRight',
            'fromRight',
            'toTop',
            'fromTop',
            'toBottom',
            'fromBottom',
            'fadeIn',
            'fadeOut',
            'scaleDown',
            'scaleUp',
        ];
    });
