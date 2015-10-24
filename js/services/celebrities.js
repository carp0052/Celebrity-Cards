angular.module('Celebrity-Cards')
.factory('Celebrities', function CelebritiesFactory($http){
    
    return {
        getAll: function(){
            return $http({method:'GET', url:'data/celebrities.json'});
        },
        getOne: function(id){
            return $http({method:'GET', url:'data/celebrities.json'}); //in real world, would be completely different function
        }
    }
});