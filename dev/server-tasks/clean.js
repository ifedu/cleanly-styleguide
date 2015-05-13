module.exports = ($, src) =>
    $.gulp.task('clean', (cb) =>
        $.del([
            src.deploy.app.dir.public,
            src.deploy.app.dir.serverDir,
            src.deploy.app.dir.tmp
        ], {
            force: true
        }, cb)
    )