var gulp = require('gulp');
var gutil = require('gulp-util');
var karma = require('karma');
var karmaParseConfig = require('karma/lib/config').parseConfig;
var path = require('path');

var runKarma = (configFilePath, options, cb) => {
    configFilePath = path.resolve(configFilePath);

    var colors = gutil.colors;
    var config = karmaParseConfig(configFilePath, options);
    var log = gutil.log;
    var server = karma.server;

    server.start(config, (exitCode) => {
        log('Karma has exited with ' + colors.red(exitCode));
        cb();
        process.exit(exitCode);
    });
};

const KARMA_ROUTE_FILE = path.join('./', 'karma.conf.js');

gulp.task('karma', (done) => runKarma(KARMA_ROUTE_FILE, {}, done));

gulp.task('karmaTmp', (done) => {
    runKarma(KARMA_ROUTE_FILE, {
        basePath: 'tmp/'
        //browsers: ['Chrome'],
        //singleRun: false
    }, done);
});