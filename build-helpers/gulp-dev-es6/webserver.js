var gulp = require('gulp');
var args = require('yargs').argv;
var webserver = require('gulp-webserver');

gulp.task('webserver', () =>
    gulp.src('./build')
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: 'http://localhost:8000/'
    }))
);