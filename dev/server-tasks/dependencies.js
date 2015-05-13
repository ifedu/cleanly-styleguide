module.exports = ($, src) =>
    $.gulp.task('addDependencies', () =>
        $.gulp.src(src.deploy.app.file.htmlIndex)
        .pipe($.wiredep({
            directory: src.deploy.app.dir.vendor
        }))
        .pipe($.gulp.dest(src.deploy.app.dir.public))
    )