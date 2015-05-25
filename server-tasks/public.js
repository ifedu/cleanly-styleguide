module.exports = function ($) {
    'use strict';

    $.gulp.task('deleteGulp', function (cb) {
        return $.del($.deploy.serverTasks, {
            force: true
        }, cb);
    });

    $.gulp.task('compileGulpEs6', function (cb) {
        return $.gulp.src($.dev.serverTasks + '/**/*.js')
        .pipe($.changed($.deploy.serverTasks))
        .pipe($.babel())
        .pipe($.gulp.dest($.deploy.serverTasks));
    });

    $.gulp.task('readFolder', function () {
        $.fn.readFolder($.deploy.serverTasks);
    });

    $.gulp.task('compile', function (cb) {
        $.runSequence('deleteGulp', 'compileGulpEs6', 'readFolder', cb);
    });

    $.gulp.task('compiledRun', function (cb) {
        $.runSequence('clean', ['scripts', 'stylus', 'jade'], 'copy', 'templateCache', 'addDependencies', 'webserver', cb);
    });

    $.gulp.task('run', function (cb) {
        $.runSequence('compile', 'compiledRun', cb);
    });

    // $.gulp.task('dist', function (cb) {
    //     $.runSequence('deleteGulp', 'compileGulpEs6', 'compileDist', cb);
    // });

    // $.gulp.task('guide', function (cb) {
    //     $.runSequence('deleteGulp', 'compileGulpEs6', 'compileGuide', cb);
    // });

    // $.gulp.task('test', function (cb) {
    //     $.runSequence('deleteGulp', 'compileGulpEs6', 'compileTest', cb);
    // });
};