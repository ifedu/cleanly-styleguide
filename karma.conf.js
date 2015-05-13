module.exports = function (config) {
    config.set({
        autoWatch: false,
        basePath: 'build/',
        browsers: ['PhantomJS'],
        coverageReporter: {
            type: 'html',
            dir: '../coverage/',
            includeAllSources: true
        },
        dieOnError: false,
        exclude: [],
        files: [
            '../vendor/angular/angular.js',
            '../vendor/angular-ui-router/release/angular-ui-router.min.js',
            'js/index.js',
        ],
        frameworks: ['jasmine'],
        ngHtml2JsPreprocessor: {
            moduleName: 'templates'
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-coverage'
        ],
        preprocessors: {
            'js/directives/**/*.html': ['ng-html2js'],
            'app/**/*.html': ['ng-html2js']
        },
        reporters: ['progress', 'coverage'],
        singleRun: true
    })
}