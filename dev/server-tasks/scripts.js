$.gulp.task('scripts-js', () =>
    $.gulp
    .src(`${$.dev.public}/**/*.js`)
    .pipe($.changed($.deploy.public))
    .pipe($.babel())
    .pipe($.gulp.dest($.deploy.public))
    .pipe($.wrap(
        `(function () {
            <%= contents %>
        })();`
    ))
    .pipe($.gulp.dest($.deploy.public))
    .pipe($.ngAnnotate())
    .pipe($.gulp.dest($.deploy.public))
)

$.gulp.task('scripts-server', () =>
    $.gulp
    .src(`${$.dev.server}/**/*.js`)
    .pipe($.changed($.deploy.server))
    .pipe($.babel())
    .pipe($.gulp.dest($.deploy.server))
)

$.gulp.task('scripts', (cb) => $.runSequence(['scripts-js', 'scripts-server'], cb))