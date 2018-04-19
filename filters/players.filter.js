angular.module('pubgApp')
    .filter('playerFilter', function(){
        return function(items){
            let itemsArray =  items.filter(item => {
                return item.type == 'participant';
            }).sort((a,b)=> {
                var aPos = parseInt(a.attributes.stats.winPlace);
                var bPos = parseInt(b.attributes.stats.winPlace);
        
                // Do our custom test
                if (aPos  > bPos ) return 1;
                if (aPos < bPos) return -1;         
                return 0; 
                
            }) 
            console.log(itemsArray);
            return  itemsArray;
        }
    });