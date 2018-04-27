var app = angular.module('pubgApp', ['ui.router']);


  
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            
         
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('home', {
                    url: '/',
                    template: '<app-player-input></app-player-input> '
                })
                // .state('match', {
                //     url: '/match',
                //     template: 
                // })
                // $locationProvider.html5Mode(true);
            
           
        }
    ]);

// require('bootstrap');
// require('./node_modules/bootstrap/dist/js/bootstrap');
// require('./node_modules/bootstrap/dist/js/bootstrap.bundle')

// app.config(['$qProvider', function ($qProvider) {
//     $qProvider.errorOnUnhandledRejections(false);
// }]);
require('./services/match-data-service');
require('./services/player-data-service');
require('./services/regions-service');

require('./filters/players.filter');
require('./filters/parseToInt.filter');
require('./filters/mode.filter');
require('./filters/matchType.filter');
require('./filters/map.filter');

require('./components/player-section/player-section.component');
require('./components/nav-bar/nav-bar.component');
require('./components/player-section/player-section.component');
require('./components/player-section/player-input/player-input.component');
require('./components/player-form/player-form.component');
require('./components/login/login');
require('./components/welcome/welcome.component');
require('./components/footer/footer.component');

require('./main.css');