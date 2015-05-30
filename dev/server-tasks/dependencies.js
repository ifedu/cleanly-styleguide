$.gulp.task('addDependencies', () =>
    $.gulp
    .src(`./${$.deploy.index}`)
    .pipe($.wiredep({
        directory: $.deploy.vendor,
        exclude: ['angular-mocks']
    }))
    .pipe($.gulp.dest($.deploy.public))
)