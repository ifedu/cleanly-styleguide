var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.watch('./src/**/*.jade', () => runSequence('jade', 'addDependencies'));

gulp.watch('./src/**/*.js', ['scripts']);
gulp.watch('./src/**/*.scss', ['sass']);
gulp.watch('./build-helpers/gulp-dev-es6/*.js', ['compile']);
