$.gulp.task('clean', (cb) =>
    $.del($.deploy.public, {
        force: true
    }, cb)
)