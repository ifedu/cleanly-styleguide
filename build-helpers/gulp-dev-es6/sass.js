var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-ruby-sass');

gulp.task('rename-vendor-css', () =>
    gulp.src('./vendor/bootstrap/dist/css/bootstrap.min.css')
    .pipe(rename('vendor/bootstrap/dist/css/bootstrap.min.scss'))
    .pipe(gulp.dest('./'))
);

gulp.task('sass', () =>
    sass('./src', {
        style: 'expanded',
        lineNumbers: true
    })
    .on('error', (error) => {
        console.log(error.message);
    })
    .pipe(gulp.dest('./build'))
);