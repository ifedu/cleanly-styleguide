module.exports = ($) =>
    $.gulp.task('templateCache', (done) =>
        $.gulp.src([`${$.dev.public}/**/directives/**/*.html`])
        .pipe($.templateCache('templates.js', {
            standalone: true
        }))
        .pipe($.gulp.dest($.deploy.js))
    )