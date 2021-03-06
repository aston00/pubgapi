class MatchDataService {
    constructor($http) {
        this.http = $http;
    }

    getMatchData(matchId, region) {
        return this.http({
            method: 'GET',
            url: `https://api.playbattlegrounds.com/shards/${region}/matches/${matchId}`,
            headers: {
                "Accept": "application/vnd.api+json",
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJlZTU4NDdjMC0xYTczLTAxMzYtOWE0NS02MWFjOTE3MDJiMmEiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTIyODczMzk2LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImFzdG9uMDAiLCJzY29wZSI6ImNvbW11bml0eSIsImxpbWl0IjoxMH0.Ehj2HmctxqBo6tXKJgFgaxaCijN6QO3acqbdbudjy50"
            }
        })
    }
}

angular.module('pubgApp')
    .service('MatchDataService', ['$http', MatchDataService]);