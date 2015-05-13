module.exports = ($, src) => {
    const copy = (src, dest) =>
        () =>
            $.gulp.src(src)
            .pipe($.gulp.dest(dest))

    $.gulp.task('copy-assets', copy(src.dev.app.file.assets, src.deploy.app.dir.assets))
    $.gulp.task('copy-vendor', copy(src.dev.app.file.vendor, src.deploy.app.dir.vendor))

    $.gulp.task('copy-template', copy(src.deploy.app.file.tplWithDir, src.deploy.app.file.tmpJs))

    $.gulp.task('copy', (cb) => $.runSequence(['copy-assets', 'copy-template', 'copy-vendor'], cb))
}