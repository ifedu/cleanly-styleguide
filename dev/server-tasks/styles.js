$.gulp.task('styles', () =>
    $.gulp
    .src([
        `${$.dev.public}/**/*.styl`,
        `!${$.dev.public}/**/_*.styl`,
        `!${$.dev.public}/**/_**/**/*.styl`
    ])
    .pipe($.styles({
        linenos: true
    }))
    .pipe($.gulp.dest($.deploy.public))
    .on('error', (error) => {
        console.log(error)
    })
)