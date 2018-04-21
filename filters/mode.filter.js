angular.module('pubgApp')
    .filter('modeFilter', function(){
        return function(item){
            if(!item){
                return;
            }
            if(item.indexOf('-') != -1){
                let splitted = item.split('-');
                splitted.pop();
                return splitted.join('');
            } else {
                return item.slice(0, item.length -3);
            }
            

        }
    });