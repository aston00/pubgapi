angular.module('pubgApp')
    .filter('modeFilter', function(){
        return function(item){
            if(!item){
                return;
            }
            let splitted = item.split('-');
            splitted.pop();
            return splitted.join('');

        }
    });