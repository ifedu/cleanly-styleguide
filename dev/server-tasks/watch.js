$.gulp.task('watch', () =>
    $.gulp.watch([`${$.deploy.public}/**/*`], (event) => {
        const FILE_NAME = $.path.relative(__dirname, event.path)

        $.tinylr.changed({
            body: {
                files: [FILE_NAME]
            }
        })
    })
)

$.gulp.watch(`${$.dev.public}/**/*.jade`, () => $.runSequence('jade', 'templateCache', 'addDependencies'))

$.gulp.watch([
    `${$.dev.public}/**/*.js`,
    `!${$.dev.public}/**/_*.js`,
    `!${$.dev.public}/**/*.config.js`,
    `!${$.dev.public}/**/*.spec.js`
], ['scripts'])

$.gulp.watch(`${$.dev.public}/**/_*.js`, ['jade-script'])

$.gulp.watch([
    `${$.dev.public}/**/*.styl`,
    `!${$.dev.public}/**/_*.styl`,
    `!${$.dev.public}/**/_**/**/*.styl`
], ['styles'])

$.gulp.watch(`${$.dev.guide}/**/*.styl`, ['styles-guide'])
$.gulp.watch(`${$.dev.serverTasks}/*.js`, ['compile'])