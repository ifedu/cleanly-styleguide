module.exports = ($) =>
    $.gulp.task('jade', () =>
        $.gulp
        .src([
            `${$.dev.public}/**/*.jade`,
            `!${$.dev.public}/**/mixins/*.jade`
        ])
        .pipe($.data((file) => {
            var name = file.path
            var dirname = $.path.dirname(name)
            var fileJade = $.path.basename(name, '.jade')

            dirname = dirname.replace(`${$.path.sep}src${$.path.sep}`, `${$.path.sep}tmp${$.path.sep}`)

            var route = $.path.resolve(__dirname, dirname, `${fileJade}.data.js`)

            return ($.fs.existsSync(route)) ? require(route) : {}
        }))
        .pipe($.jade({
            pretty: true
        }))
        .on('error', (error) => {
            console.log(error);
        })
        .pipe($.gulp.dest($.deploy.public))
    )