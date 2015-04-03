var babel = require('gulp-babel');
var changed = require('gulp-changed');
var debug = require('gulp-debug');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');

gulp.task('scripts-tmp', () =>
    gulp.src(['./src/**/*.js'])
    .pipe(changed('./build'))
    .pipe(babel())
    .pipe(gulp.dest('./tmp'))
);

gulp.task('scripts-build', () =>
    gulp.src(['./tmp/**/*.js', '!./tmp/**/*.spec.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default', {
        verbose: true
    }))
    .pipe(debug())
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./build'))
);

gulp.task('delete-tmp', (cb) => rimraf('./tmp', cb));

gulp.task('scripts', (cb) => runSequence('scripts-tmp', 'scripts-build', cb));