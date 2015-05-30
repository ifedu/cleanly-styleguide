$.gulp.task('jade', () =>
    $.gulp
    .src([
        `${$.dev.public}/**/*.jade`,
        `!${$.dev.public}/**/mixins/*.jade`,

        `!${$.dev.guide}/**/*.jade`,
        `!${$.dev.public}/guide.jade`
    ])
    .pipe($.data($.fn.jsonJade))
    .pipe($.jade({
        pretty: true
    }))
    .on('error', (error) => {
        console.log(error);
    })
    .pipe($.gulp.dest($.deploy.public))
)