var app = angular.module("MenuApp", ["ngRoute"]);
app.config(function($routeProvider) {
$routeProvider
.when("/", {
    templateUrl : "home.htm",
})
.when("/categories", {
    templateUrl : "categories.htm",
    controller : "categoriesCtrl"
})
.when("/items", {
    templateUrl : "items.htm",
    controller : "itemsCtrl"
});
});