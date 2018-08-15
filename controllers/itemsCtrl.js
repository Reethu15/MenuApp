app.controller("itemsCtrl", function ($scope,$routeParams,$http) {
    console.log("$routeParams",$routeParams)

    $http.get("https://davids-restaurant.herokuapp.com/categories/"+$routeParams.itemID+".json")
    .then(function(response) {
        $scope.item = response.data;
        console.log("$scope.item",$scope.item)
    });
});