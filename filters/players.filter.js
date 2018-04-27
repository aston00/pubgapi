angular.module('pubgApp')
    .filter('playerFilter', function(){
        return function(items, sortValue, reversal){
            let itemsArray =  items.filter(item => {
                return item.type == 'participant';
            }).sort((a,b)=> {
                if(sortValue != 'winPlace'){
                    let aPos = parseInt(Number(a.attributes.stats[sortValue]));
                    let bPos = parseInt(Number(b.attributes.stats[sortValue]));
                     // Do our custom test
                    if (aPos  < bPos ) return 1;
                    if (aPos > bPos) return -1;         
                    return 0; 
                } else {
                    let aPos = parseInt(Number(a.attributes.stats[sortValue]));
                    let bPos = parseInt(Number(b.attributes.stats[sortValue]));
                     // Do our custom test
                    if (aPos  > bPos ) return 1;
                    if (aPos < bPos) return -1;         
                    return 0; 
                }
               
               
                
            }) 
            return  itemsArray;
        }
    });