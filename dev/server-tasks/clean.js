$.gulp.task('clean', (cb) =>
    $.del([
        $.deploy.public,
        $.deploy.tmp,
        $.dist.public
    ], {
        force: true
    }, cb)
)