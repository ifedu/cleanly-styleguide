'use strict';

var babel = require('gulp-babel');
var changed = require('gulp-changed');
var gulp = require('gulp');
var gulpRimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');

var DIR_GULP = './build-helpers/gulp';

gulp.task('delete-gulp', function() {
    return gulp.src('./build-helpers/gulp', {
        read: false
    })
    .pipe(gulpRimraf());
});

gulp.task('compile-gulp-es6', function() {
    return gulp.src(['./build-helpers/gulp-dev-es6/*.js'])
    .pipe(changed(DIR_GULP))
    .pipe(babel())
    .pipe(gulp.dest(DIR_GULP));
});

gulp.task('require-dir-gulp', function() {
    require('require-dir')('../gulp', {
        recurse: true
    });
});

gulp.task('compileGulp', function(cb) {
    runSequence('delete-gulp', 'compile-gulp-es6', 'require-dir-gulp', cb);
});

gulp.task('compileDist', function(cb) {
    runSequence('clean', 'scripts', 'copy', 'rename-vendor-css', 'sass', 'jade', 'copy-jade', 'addDependencies', 'preparedist', cb);
});

gulp.task('compileGuide', function(cb) {
    runSequence('clean', 'scripts', 'copy', 'rename-vendor-css', 'sass', 'jade', 'copy-jade', 'build-guide', 'delete-tmp', cb);
});

gulp.task('compileRun', function (cb) {
    runSequence('clean', 'scripts', 'copy', 'rename-vendor-css', 'sass', 'jade', 'copy-jade', 'addDependencies', 'webserver', 'delete-tmp', cb);
});

gulp.task('compileTest', function (cb) {
    runSequence('clean', 'scripts', 'copy', 'rename-vendor-css', 'sass', 'jade', 'copy-jade', 'addDependencies', 'karmaTmp', 'delete-tmp', cb);
});