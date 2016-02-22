'use strict';

/**
 * @ngdoc overview
 * @name cbDemoQaApp
 * @description
 * # 'cbrest
 *
 * Main module of the application.
 */
var app = angular.module('cbrest', [
    'ngCookies',
    'ngResource',
    'ngRoute'
]);

app.config(function($routeProvider) {
   
    
    $routeProvider
    //-- cean: Routes
    .when('/', {
       templateUrl : 'views/main.html',
       controller : 'MyCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
});
