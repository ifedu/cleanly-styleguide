$.gulp.task('templateCache', (done) =>
    $.gulp
    .src([`${$.deploy.public}/**/directives/**/*.html`])
    .pipe($.templateCache('templates.js', {
        standalone: true
    }))
    .pipe($.gulp.dest($.deploy.js))
)