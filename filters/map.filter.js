angular.module('pubgApp')
    .filter('mapFilter', function(){
        return function(item){
            if(!item){
                return;
            }
            let splitted = item.split('_');
            splitted.pop();
            return splitted.join('');
        }
    });