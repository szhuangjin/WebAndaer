'use strict'

var andaerApp = angular.module('andaerApp', ['ngRoute', 'andaerControllers','andaerServices']);

andaerApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/main.html',
        controller:'mainCtrl'
    });

    $locationProvider.html5Mode(false).hashPrefix('!')
}]);