app.controller("categoriesCtrl", function ($scope,$http) {
    console.log("inside Categories ctrl")
    $http.get("https://davids-restaurant.herokuapp.com/categories.json")
    .then(function(response) {
        $scope.categories = response.data;
        console.log("$scope.categories",$scope.categories)
    });
});