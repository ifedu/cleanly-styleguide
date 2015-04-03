(() => {
    var app = angular
    .module('guideStyleCleanly', ['ui.router'])
    .config(($urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) => {
        app.controller = $controllerProvider.register;
        app.directive = $compileProvider.directive;
        app.factory = $provide.factory;
        app.filter = $filterProvider.register;
        app.service = $provide.service;
        app.state = $provide.state;

        $urlRouterProvider.otherwise('/');
    });
})();