module.exports = ($, src) => {
    $.gulp.task('scripts-tmp', () =>
        $.gulp.src(src.dev.app.file.js)
        .pipe($.changed(src.deploy.app.dir.tmp))
        .pipe($.babel())
        .pipe($.gulp.dest(src.deploy.app.dir.tmp))
    )

    $.gulp.task('scripts-deploy', () =>
        $.gulp.src(src.deploy.app.file.jsPublics)
        .pipe($.changed(src.deploy.app.dir.public))
        .pipe($.ngAnnotate())
        .pipe($.gulp.dest(src.deploy.app.dir.public))
    )

    $.gulp.task('scripts-deploy-server', () =>
        $.gulp.src(src.dev.gulp.file.server)
        .pipe($.changed(src.deploy.gulp.dir.server))
        .pipe($.babel())
        .pipe($.gulp.dest(src.deploy.gulp.dir.server))
    )

    $.gulp.task('scripts', (cb) => $.runSequence('scripts-tmp', 'scripts-deploy', 'scripts-deploy-server', cb))
}