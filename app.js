var app = angular.module('pubgApp', []);


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

require('./components/player-section/player-section.component');
require('./components/nav-bar/nav-bar.component');
require('./components/player-section/player-section.component');
require('./components/player-section/player-input/player-input.component');
require('./components/player-form/player-form.component');
require('./components/login/login');
require('./components/welcome/welcome.component');

require('./main.css');