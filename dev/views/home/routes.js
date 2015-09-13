angular
.module('styleguideWeb')
.config(($stateProvider, lazyLoaderProvider) => {
    $stateProvider.state('home', {
        controller: 'HomeCtrl as homeCtrl',
        templateUrl: 'views/home/main.html',
        url: '/',

        resolve: {
            load: lazyLoaderProvider.add(['views/home/ctrl.js'])
        }
    })
})