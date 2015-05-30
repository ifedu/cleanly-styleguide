module.exports = function (config) {
    var $ = require('./config.js');

    var configKarma = {
        basePath: $.deploy.public,
        singleRun: true,

        browserify: {
            debug: true
        },

        browsers: ['PhantomJS'],

        exclude: [],

        files: [
            'vendor/angular/angular.js',
            'vendor/angular-mocks/angular-mocks.js',
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'js/index.js',
            'app/**/*.js',
            'js/**/*.js'
        ],

        frameworks: [
            'browserify',
            'jasmine'
        ],

        plugins: [
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],

        preprocessors: {
            'app/**/*spec.js': ['browserify'],
            'app/**/*config.js': ['browserify'],
            'js/**/*spec.js': ['browserify'],
            'js/**/*config.js': ['browserify']
        }
    };

    configKarma.browsers = ['Chrome'];
    configKarma.singleRun = false;

    config.set(configKarma);
};