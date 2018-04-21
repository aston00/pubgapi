angular.module('pubgApp')
    .filter('matchTypeFilter', function(){
        return function(item){
            if(!item){
                return;
            }
            let splitted = item.split('-');
            splitted.shift();
            return splitted.join('');
        }
    });