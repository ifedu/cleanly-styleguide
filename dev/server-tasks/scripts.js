module.exports = ($) => {
    $.gulp.task('scripts-js', () =>
        $.gulp
        .src([
            `${$.dev.public}/**/*.js`,
            `!${$.dev.public}/**/config.js`,
            `!${$.dev.public}/**/data.js`,
            `!${$.dev.public}/**/spec.js`
        ])
        .pipe($.changed($.deploy.tmpWrap))
        .pipe($.wrap(
            `(function () {
                angular.module
                <%= contents %>
            })();`
        ))
        .pipe($.gulp.dest($.deploy.tmpWrap))
    )

    $.gulp.task('scripts-other', () =>
        $.gulp
        .src([
            `${$.dev.public}/**/config.js`,
            `${$.dev.public}/**/data.js`,
            `${$.dev.public}/**/spec.js`
        ])
        .pipe($.changed($.deploy.tmpWrap))
        .pipe($.gulp.dest($.deploy.tmpWrap))
    )

    $.gulp.task('scripts-to-tmp', () =>
        $.gulp
        .src(`${$.deploy.tmpWrap}/**/*.js`)
        .pipe($.changed($.deploy.tmp))
        .pipe($.babel())
        .pipe($.gulp.dest($.deploy.tmp))
    )

    $.gulp.task('scripts-server', () =>
        $.gulp
        .src(`${$.dev.server}/**/*.js`)
        .pipe($.changed($.deploy.server))
        .pipe($.babel())
        .pipe($.gulp.dest($.deploy.server))
    )

    $.gulp.task('scripts-deploy', () =>
        $.gulp
        .src([
            `${$.deploy.tmp}/**/*.js`,
            `!${$.deploy.tmp}/**/config.js`,
            `!${$.deploy.tmp}/**/spec.js`,
            `!${$.deploy.tmp}/guide/**/*.data.js`
        ])
        .pipe($.ngAnnotate())
        .pipe($.gulp.dest($.deploy.public))
    )

    $.gulp.task('scripts', (cb) => $.runSequence(['scripts-js', 'scripts-other'], 'scripts-to-tmp', ['scripts-server', 'scripts-deploy'], cb))
}