class RegionsService {
    constructor($q){
        this.q = $q;
    }

    allRegions(){
        return this.q((resolve, reject)=> {
            resolve(['xbox-as', 'xbox-eu', 'xbox-na', 'xbox-oc', 'pc-krjp', 'pc-jp', 'pc-na', 'pc-eu', 'pc-oc', 'pc-kakao', 'pc-sea', 'pc-sa', 'pc-as'])
        })
    }
    
}

angular.module('pubgApp')
    .service('RegionsService', ['$q', RegionsService]);