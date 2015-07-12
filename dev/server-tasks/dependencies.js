$.gulp.task('addDependencies', () =>
    $.gulp
    .src(`./${$.deploy.public}/**/*.html`)
    .pipe($.wiredep({
        directory: $.deploy.vendor,
        exclude: ['angular-mocks'],

        onError: () => {}
    }))
    .pipe($.gulp.dest($.deploy.public))
)