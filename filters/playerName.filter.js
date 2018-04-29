angular.module('pubgApp')
    .filter('playerNameFilter', function(){
        return function(items, value){
            console.log(items);
            if(!value){
                return items;
            } else {
                let newArray = items.filter(item => {
                    return item.attributes.stats.name.indexOf(value) != -1;
                });
                return newArray;
            }
             
        }
    });