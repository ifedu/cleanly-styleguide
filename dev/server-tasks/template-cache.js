module.exports = ($, src) =>
    $.gulp.task('templateCache', (done) =>
        $.gulp.src(src.deploy.app.file.htmlDirectives)
        .pipe($.templateCache(src.deploy.app.file.tpl, {
            standalone: true
        }))
        .pipe($.gulp.dest(src.deploy.app.dir.js))
    )