module.exports = function (config) {
    var $ = require('./server-tasks-es5/config.js');

    var configKarma = {
        basePath: $.deploy.public,
        singleRun: true,

        browserify: {
            debug: true
        },

        browsers: ['PhantomJS'],

        exclude: [
            '**/_**/**/*.js',
            '**/_*.js'
        ],

        files: [
            'js/vendor/jquery-1.11.3.min.js',
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
            '**/*.js'
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
            '**/*spec.js': ['browserify'],
            '**/*config.js': ['browserify']
        }
    };

    // configKarma.browsers = ['Chrome'];
    // configKarma.singleRun = false;

    config.set(configKarma);
};