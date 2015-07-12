$.gulp.task('scripts-js-test', () =>
    $.gulp
    .src([
        `${$.dev.public}/**/*.config.js`,
        `${$.dev.public}/**/*.spec.js`
    ])
    .pipe($.changed($.deploy.public))
    .pipe($.babel())
    .pipe($.gulp.dest($.deploy.public))
)

$.gulp.task('karma', (done) =>
    $.karma.start({
        configFile: $.path.resolve(__dirname + '../../../karma.conf.js')
    }, () => done)
)

$.gulp.watch([
    `${$.dev.public}/**/*.config.js`,
    `${$.dev.public}/**/*.spec.js`
], ['scripts-js-test'])