const copy = (src, dest) =>
    () =>
        $.gulp.src(src)
        .pipe($.gulp.dest(dest))

$.gulp.task('copy-assets', copy(`${$.dev.assets}/**/*`, $.deploy.assets))
$.gulp.task('copy-vendor', copy([
    `${$.vendor}/**/*`,
    `!${$.vendor}/bootstrap*/**/*`
], $.deploy.vendor))

$.gulp.task('copy', (cb) => $.runSequence(['copy-assets', 'copy-vendor'], cb))

$.gulp.task('copy-template', copy(`${$.deploy.js}/templates.js`, $.deploy.tmpJs))