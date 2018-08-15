var app = angular.module("MenuApp", ["ngRoute"]);
app.config(function($routeProvider) {
$routeProvider
    .when("/", {
        templateUrl : "views/home.html",
    })
    .when("/categories", {
        templateUrl : "views/categories.html",
        controller : "categoriesCtrl"
    })
    .when("/items/:itemID", {
        templateUrl : "views/items.html",
        controller : "itemsCtrl"
    });
});