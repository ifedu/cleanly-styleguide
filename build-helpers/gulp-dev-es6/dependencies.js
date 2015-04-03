var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('addDependencies', () =>
    gulp.src('./build/index.html')
    .pipe(wiredep({
        directory: './build/vendor',
        exclude: ['angular-mocks']
    }))
    .pipe(gulp.dest('./build'))
);