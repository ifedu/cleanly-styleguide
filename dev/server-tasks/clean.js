$.gulp.task('clean', (cb) => {
    $.del([
        $.deploy.public,
        $.deploy.tmp,
        $.dist.public
    ], {
        force: true
    }, cb)
})

$.gulp.task('clean-scripts', (cb) => {
    $.del([
        `${$.deploy.public}/**/_*.js`,
        `${$.deploy.public}/**/_**`
    ], {
        force: true
    }, cb)
})