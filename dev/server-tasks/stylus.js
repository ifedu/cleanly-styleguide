module.exports = ($, src) =>
    $.gulp.task('stylus', () =>
        $.gulp.src(src.dev.app.file.stylus)
        .pipe($.stylus())
        .pipe($.gulp.dest(src.deploy.app.dir.stylus))
    )