const app = angular
.module('styleguideWeb', ['ui.router'])
.config(($urlRouterProvider, $stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) => {
    app.controller = $controllerProvider.register
    app.directive = $compileProvider.directive
    app.filter = $filterProvider.register
    app.factory = $provide.factory
    app.service = $provide.service

    $urlRouterProvider.otherwise('/')
})