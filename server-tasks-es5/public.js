module.exports = function ($) {
    'use strict';

    $.gulp.task('deleteGulp', function (cb) {
        return $.del($.deploy.serverTasks, {
            force: true
        }, cb);
    });

    $.gulp.task('compileGulpEs6', function (cb) {
        return $.gulp.src($.dev.serverTasks + '/*.js')
        .pipe($.changed($.deploy.serverTasks))
        .pipe($.babel())
        .pipe($.gulp.dest($.deploy.serverTasks))
        .pipe($.wrap(
            'module.exports = function ($) {' +
                '<%= contents %>' +
            '};'
        ))
        .pipe($.gulp.dest($.deploy.serverTasks));
    });

    $.gulp.task('readFolder', function () {
        $.fn.readFolder('../' + $.deploy.serverTasks);
    });

    //// COMPILES
    $.gulp.task('compile', function (cb) {
        $.runSequence('deleteGulp', 'compileGulpEs6', 'readFolder', cb);
    });

    // TASKS ES6
    $.gulp.task('compiledAnalize', function (cb) {
        $.runSequence('analize-es6', cb);
    });

    $.gulp.task('compiledDist', function (cb) {
        $.runSequence('dist-es6');
    });

    $.gulp.task('compiledGuide', function (cb) {
        $.runSequence('guide-es6', cb);
    });

    $.gulp.task('compiledRun', function (cb) {
        $.runSequence('run-es6', cb);
    });

    $.gulp.task('compiledTest', function (cb) {
        $.runSequence('test-es6', cb);
    });

    // TASKS
    $.gulp.task('analize', function (cb) {
        $.runSequence('compile', 'compiledAnalize', cb);
    });

    $.gulp.task('dist', function (cb) {
        $.runSequence('compile', 'compiledDist', cb);
    });

    $.gulp.task('guide', function (cb) {
        $.runSequence('run', 'compiledGuide', cb);
    });

    $.gulp.task('run', function (cb) {
        $.runSequence('compile', 'compiledRun', cb);
    });

    $.gulp.task('test', function (cb) {
        $.runSequence('compile', 'compiledTest', cb);
    });
};