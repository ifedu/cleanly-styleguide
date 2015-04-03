var gulp = require('gulp');
var rimraf = require('gulp-rimraf');

gulp.task('clean', () =>
    gulp.src(['./build', './tmp'], {
        read: false
    })
    .pipe(rimraf()
        .on('error', (error) => {
            console.log(error);
        })
    )
);