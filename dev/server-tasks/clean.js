module.exports = ($) =>
    $.gulp.task('clean', (cb) =>
        $.del([
            $.deploy.public,
            $.deploy.tmp,
            $.deploy.tmpWrap
        ], {
            force: true
        }, cb)
    )