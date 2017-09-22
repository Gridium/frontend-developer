// Create main Angular module
var app = angular.module("GridiumApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
    });
});