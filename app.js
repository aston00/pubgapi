var app = angular.module('pubgApp', ['ui.router']);

//TODO:: added error handlers
  
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            
         
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<app-player-input></app-player-input> '
                })
           
        }
    ]);


require('./services/match-data-service');
require('./services/player-data-service');
require('./services/regions-service');

require('./filters/players.filter');
require('./filters/parseToInt.filter');
require('./filters/mode.filter');
require('./filters/matchType.filter');
require('./filters/map.filter');

require('./components/player-section/player-section.component');
require('./components/player-section/player-input/player-input.component');
require('./components/footer/footer.component');

require('./main.css');