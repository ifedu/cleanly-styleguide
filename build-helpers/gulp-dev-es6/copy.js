var gulp = require('gulp');
var runSequence = require('run-sequence');

const copy = (src, dest) => () => gulp.src(src)
                                .pipe(gulp.dest(dest))

gulp.task('copy-assets', copy('./src/assets/**/*', './build/assets'));
gulp.task('copy-jade', copy('./build/views/index.html', './build'));
gulp.task('copy-vendor', copy('./vendor/**/*', './build/vendor'));

gulp.task('copy', (cb) => runSequence('copy-assets', 'copy-vendor', cb));