const CONFIG = {
    basedir: './src/'
};

var changed = require('gulp-changed');
var gulp = require('gulp');
var jade = require('gulp-jade');
var jadeInheritance = require('gulp-jade-inheritance');
var runSequence = require('run-sequence');

gulp.task('jade', () =>
    gulp.src(['./src/**/*.jade', '!./src/**/mixins/*.jade'])
    .pipe(changed('./build'))
    .pipe(jadeInheritance(CONFIG))
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./build'))
);