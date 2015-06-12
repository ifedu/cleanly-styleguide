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
        'deploy/public/app/**/*',
        'deploy/public/js/**/*',
        'deploy/server/**/*',
        'deploy/server-tasks/**/*'
    ]

    const OPTIONS = {
    }

    plato.inspect(FILES, $.plato, OPTIONS, (report) => report)
})

$.gulp.task('analize', () => $.runSequence('clean-plato', 'plato'))