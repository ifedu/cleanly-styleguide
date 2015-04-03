var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

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