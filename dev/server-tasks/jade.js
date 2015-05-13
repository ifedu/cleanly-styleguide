module.exports = ($, src) =>
    $.gulp.task('jade', () =>
        $.gulp.src(src.dev.app.file.jade)
        .pipe($.data((file) => {
            const name = file.path

            const fileJade = $.path.basename(name, '.jade')

            let dirname = $.path.dirname(name)

            dirname = dirname.replace(`${$.path.sep}src${$.path.sep}`, `${$.path.sep}tmp${$.path.sep}`)

            const route = $.path.resolve(__dirname, dirname, `${fileJade}.data.js`)

            return ($.fs.existsSync(route)) ? require(route) : {}
        }))
        .pipe($.jade({
            pretty: true
        }))
        .on('error', (error) => console.log(error))
        .pipe($.gulp.dest(src.deploy.app.dir.public))
    )