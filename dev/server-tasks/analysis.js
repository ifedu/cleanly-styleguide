$.gulp.task('clean-plato', (cb) => {
    $.del([
        $.plato
    ], {
        force: true
    }, cb)
})

$.gulp.task('plato', () => {
    const plato = require('plato')

    const FILES = [
        '_deploy/public/app/**/*',
        '_deploy/public/js/**/*',
        '_deploy/server/**/*',
        '_deploy/server-tasks/**/*'
    ]

    const OPTIONS = {
    }

    plato.inspect(FILES, $.plato, OPTIONS, (report) => report)
})

$.gulp.task('analize', () => $.runSequence('clean-plato', 'plato'))