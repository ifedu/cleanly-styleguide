$.gulp.task('clean-plato', (cb) =>
    $.del([
        $.plato
    ], {
        force: true
    }, cb)
)

$.gulp.task('plato', () => {
    const plato = require('plato')

    const FILES = [
        `${$.deploy.dir}/**/*.js`,
        `!${$.deploy.dir}/**/vendor/**/*.js`
    ]

    const OPTIONS = {}

    plato.inspect(FILES, $.plato, OPTIONS, () => $.runSequence('webserver-analize'))
})

$.gulp.task('webserver-analize', () => require(`../../${$.deploy.server}/server-analize.js`)($))

$.gulp.task('analysis', () => $.runSequence('clean-plato', 'plato'))