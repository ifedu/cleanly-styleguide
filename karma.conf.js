module.exports = function (config) {
    var $ = require('./server-tasks-es5/config.js');

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
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/angular-mocks/angular-mocks.js',
            'vendor/script.js/dist/script.min.js',
            'js/index.spec.js',
            'js/templates.js',
            'js/index.js',
            'js/constants.js',
            'js/controllers/parent.controller.js',
            'js/services/*.js',
            'js/**/*.js',
            'app/**/*.js',
            'app/**/*.html',
            'js/directives/**/*.html'
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

    // configKarma.browsers = ['Chrome'];
    // configKarma.singleRun = false;

    config.set(configKarma);
};