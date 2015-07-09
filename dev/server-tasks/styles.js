$.gulp.task('styles', () =>
    $.gulp
    .src(`${$.dev.styles}/main.styl`)
    .pipe($.styles({
        linenos: true
    }))
    .pipe($.gulp.dest($.deploy.styles))
)