angular.module('pubgApp')
    .component('appPlayerInput', {
        template: require('./player-input.html'),
        controller: ['$scope', '$log', 'PlayerDataService', 'MatchDataService', 'RegionsService', function (PlayerDataService, MatchDataService, RegionsService) {
            let ctrl = this;

            this.$onInit = () => {
                ctrl.region = "";
                RegionsService.allRegions().then(data => {
                    ctrl.regions = data;
                });
                ctrl.sortProperty = "winPlace";
                ctrl.viewData = {};
                ctrl.reversal = true;
            };

            ctrl.changeSortProperty = (value, flow) => {
                ctrl.sortProperty = value;
                ctrl.reversal = Boolean(flow);
            };

            ctrl.search = () => {
                PlayerDataService.getPlayer(ctrl.searchPlayer, ctrl.region).then(data => {
                    ctrl.matches = data.data.data[0].relationships.matches.data;
                }).catch(error => {
                    alert('Wrong name');
                    console.log(error);
                });
            };

            ctrl.getMatch = (id) => {
                MatchDataService.getMatchData(id, ctrl.region).then(data => {
                    ctrl.match = data;
                });
            };
        }]
    });

require('./player-input.css');