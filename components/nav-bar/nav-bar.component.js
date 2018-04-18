angular.module('pubgApp')
    .component('appNavBar', {
        template: require('./nav-bar.html'),
        controller: function(){
            this.name = "William";
        }
    })

require('./nav-bar.css');