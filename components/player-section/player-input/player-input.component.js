angular.module('pubgApp')
    .component('appPlayerInput', {
        template: require('./player-input.html'),
        controller: ['$scope','$log', 'PlayerDataService', 'MatchDataService', 'RegionsService' , function($scope, $log, PlayerDataService, MatchDataService, RegionsService){
            let ctrl = this;
            
            this.$onInit = function(){
                ctrl.region = "";
                RegionsService.allRegions().then(data => {
                    ctrl.regions = data;
                })
                ctrl.sortProperty = "winPlace";
                $scope.viewData = {};
                ctrl.reversal = true;
                
            }
            


            ctrl.changeSortProperty = function(value, flow){
                ctrl.sortProperty = value;
                
                ctrl.reversal = Boolean(flow);
            }
            
            ctrl.search = function(){
                PlayerDataService.getPlayer(ctrl.searchPlayer, ctrl.region).then(data => {
                    console.log(data.data.data[0]);
                    ctrl.matches = data.data.data[0].relationships.matches.data;
                    console.log(ctrl.matches);
                   
                });
            }

            ctrl.getMatch = function(id){
                debugger;
                console.log(id);
                MatchDataService.getMatchData(id, ctrl.region).then(data => {
                    ctrl.match = data;
                    console.log(data);
                    
                    // console.log('hellasddsadsadsaasdo', $scope.viewData);
                    // console.log('hellaaaaaasdo', ctrl.viewData);
                    // console.log('hello', $scope.filteredArray);
                })
                
            }
        }]
    })

require('./player-input.css');