$.gulp.task('watch', () => {
    $.gulp.watch([`${$.deploy.public}/**/*`], (event) => {
        const FILE_NAME = $.path.relative(__dirname, event.path)

        $.tinylr.changed({
            body: {
                files: [FILE_NAME]
            }
        })
    })
})

$.gulp.watch([
    `${$.dev.public}/**/*.jade`,
    `!${$.dev.public}/guide.jade`
], () => $.runSequence('jade', 'templateCache', 'addDependencies'))

$.gulp.watch([
    `${$.dev.public}/app/**/*.js`,
    `${$.dev.public}/js/**/*.js`,
    `!${$.dev.public}/app/**/*.config.js`,
    `!${$.dev.public}/app/**/*.spec.js`,
    `!${$.dev.public}/js/**/*.config.js`,
    `!${$.dev.public}/js/**/*.spec.js`
], ['scripts'])
$.gulp.watch(`${$.dev.public}/**/*.styl`, ['stylus'])
$.gulp.watch(`${$.dev.serverTasks}/*.js`, ['compile'])