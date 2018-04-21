angular.module('pubgApp')
    .filter('matchTypeFilter', function () {
        return function (item) {
            if (!item) {
                return;
            }
            if (item.indexOf('-') != -1) {
                let splitted = item.split('-');
                splitted.shift();
                return splitted.join('');
            } else {
                return item.slice(item.length - 3, item.length);
            }

        }
    });