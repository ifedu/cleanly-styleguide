$.gulp.task('stylus', () =>
    $.gulp
    .src(`${$.dev.stylus}/*.styl`)
    .pipe($.stylus({
        linenos: true
    }))
    .pipe($.gulp.dest($.deploy.stylus))
)