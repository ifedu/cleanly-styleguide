var gulp = require('gulp');
var runSequence = require('run-sequence');

function copy(src, dest) {
    return () =>
        gulp.src(src)
        .pipe(gulp.dest(dest))
}

gulp.task('copy-assets', copy('./src/assets/**/*', './build/assets'));
gulp.task('copy-libs', copy('./vendor/**/*', './build/lib'));
gulp.task('copy-jade', copy('./build/views/index.html', './build'));

gulp.task('copy', (cb) => runSequence('copy-assets', 'copy-libs', cb));