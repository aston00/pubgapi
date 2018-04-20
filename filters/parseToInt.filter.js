angular.module('pubgApp')
    .filter('parseToIntFilter', function(){
        return function(item){
            return parseInt(item).toFixed();
        }
    });