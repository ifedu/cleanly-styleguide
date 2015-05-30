angular
.module('styleguideWeb')
.config(($stateProvider, lazyLoaderProvider) => {
    $stateProvider.state('home', {
        controller: 'HomeCtrl as homeCtrl',
        templateUrl: 'app/home/main.html',
        url: '/',

        resolve: {
            load: lazyLoaderProvider.add(['app/home/ctrl.js'])
        }
    })
})