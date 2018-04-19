angular.module('pubgApp')
    .component('appPlayerInput', {
        template: require('./player-input.html'),
        controller: ['$scope', 'PlayerDataService', 'MatchDataService', 'RegionsService' , function($scope, PlayerDataService, MatchDataService, RegionsService){
            let ctrl = this;
            this.$onInit = function(){
                ctrl.region = "";
                RegionsService.allRegions().then(data => {
                    ctrl.regions = data;
                })
                ctrl.matches = "";

                
            }
            
            ctrl.search = function(){
                PlayerDataService.getPlayer(ctrl.searchPlayer, ctrl.region).then(data => {
                    console.log(data.data.data[0]);
                    ctrl.matches = data.data.data[0].relationships.matches.data;
                    console.log(ctrl.matches);
                    // MatchDataService.getMatchData(ctrl.matches[0].id).then(data => console.log(data.data));
                    // ctrl.matches.forEach(item => {
                    //     MatchDataService.getMatchData(item.id).then(data => console.log(data));
                    // })
                });
            }

            ctrl.getMatch = function(id){
                console.log(id);
                MatchDataService.getMatchData(id, ctrl.region).then(data => {
                    ctrl.match = data;
                    console.log(data);
                })
            }
        }]
    })