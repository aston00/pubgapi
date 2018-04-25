var app = angular.module('pubgApp', ['ui.router']);

app.run(function ($browser) {
    $browser.baseHref = function () { return "/" };
    });
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
              });
            $urlRouterProvider.otherwise("/player");
            $stateProvider
                .state('home', {
                    url: '/player',
                    template: '<app-player-section></app-player-section>'
                })

            
           
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

require('./main.css');