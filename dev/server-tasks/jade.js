const jsonData = {}

$.gulp.task('jade', () =>
    $.gulp
    .src([
        `${$.dev.public}/**/*.jade`,
        `!${$.dev.public}/guide.jade`,
        `!${$.dev.public}/**/_*.jade`,
        `!${$.dev.public}/**/_**/**/*.jade`,

        `!${$.dev.guide}/**/*.jade`
    ])
    .pipe($.changed($.deploy.public, {extension: '.html'}))
    .pipe($.data((file) => {
        const valueJson = $.fn.jsonJade(file)

        $.extend(true, jsonData, valueJson)

        return jsonData
    }))
    .pipe($.jade({
        pretty: true
    }))
    .on('error', (error) => {
        console.log(error)
    })
    .pipe($.gulp.dest($.deploy.public))
)