angular.module('Celebrity-Cards')

.controller('MainCtrl', function($scope, $http, Celebrities) {
    //fetch all the data from the JSON file and display it
    $scope.allData;
    
    //$http({method:'GET', url:'data/items.json'})
    Celebrities.getAll()
    .then(function(response){
        //success
        $scope.allData = response.data;
        
    }, function(response){
        //error
        
    });
});