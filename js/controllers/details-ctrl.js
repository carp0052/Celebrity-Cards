angular.module('Celebrity-Cards')

.controller('DetailsCtrl', function($scope, $routeParams, Celebrities){
    $scope.celebId = $routeParams.celebId;
    $scope.celebrity = {}
    
    //$http({method:'GET', url:'data/items.json'})
    Celebrities.getOne($scope.celebId)
    .then(function(response){
        //success
        var celebrities = response.data.celebrities;
        celebrities.forEach(function(i){
            if(i.id == $routeParams.celebId){
                $scope.celebrity = i;
            }
        });
        
    }, function(response){
        //error
        
    });
    
});