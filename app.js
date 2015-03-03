angular.module('myapp', ['ngRoute', 'ui.router', 'ngAnimate', 'lumx', 'lxTransition',
                         'myapp.general', 'myapp.class', 'myapp.builtin', 'myapp.custom'])
    .config(function($urlRouterProvider)
    {
        $urlRouterProvider.otherwise("/");
    });
