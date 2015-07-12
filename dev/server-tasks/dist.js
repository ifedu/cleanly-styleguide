$.gulp.task('jade-dist', () =>
    $.gulp
    .src([
        `${$.dev.public}/**/*.jade`,
        `!${$.dev.public}/**/_**/*.jade`,
        `!${$.dev.public}/**/_*.jade`,

        `!${$.dev.guide}/**/*.jade`,
        `!${$.dev.public}/guide.jade`
    ])
    .pipe($.data((file) => $.fn.jsonJade(file)))
    .pipe($.jade({
        pretty: false
    }))
    .on('error', (error) => {
        console.log(error);
    })
    .pipe($.gulp.dest($.dist.public))
)

$.gulp.task('styles-dist', () =>
    $.gulp
    .src(`${$.dev.styles}/main.styl`)
    .pipe($.styles({
        compress: true
    }))
    .pipe($.gulp.dest($.dist.styles))
)

$.gulp.task('copyDeploy', (done) =>
    $.gulp
    .src([
        `${$.deploy.public}/**/*.*`,
        `${$.deploy.vendor}/**/*.*`
    ])
    .pipe($.gulp.dest($.dist.public))
)

$.gulp.task('addDependencies-dist', () =>
    $.gulp
    .src(`${$.dist.public}/**/*.html`)
    .pipe($.wiredep({
        directory: $.dist.vendor,
        exclude: ['angular-mocks'],

        onError: () => {}
    }))
    .pipe($.gulp.dest($.dist.public))
)

$.gulp.task('generateOneScriptFile', (done) => {
    const assets = $.useref.assets()

    return $.gulp
    .src(`${$.dist.public}/**/*.html`)
    .pipe(assets)
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.gulp.dest($.dist.public))
})

$.gulp.task('compress', () =>
    $.gulp
    .src(`${$.dist.public}/**/*.js`)
    .pipe($.uglify())
    .pipe($.gulp.dest($.dist.public))
)

$.gulp.task('clean-dist', (cb) =>
    $.del([
        $.deploy.public,
        $.dist.public
    ], FORCE, cb)
)

$.gulp.task('clean-min', (cb) =>
    $.del([
        `${$.dist.js}/**/*.js`,
        $.dist.vendor,
        `!${$.dist.js}/all.js`,
        `${$.dist.public}/**/_*`,
        `${$.dist.public}/**/_**/**/*`
    ], {
        force: true
    }, cb)
)

$.gulp.task('templateCache-dist', (done) =>
    $.gulp.src(`${$.dist.public}/**/directives/**/*.html`)
    .pipe($.templateCache('templates.js', {
        standalone: true
    }))
    .pipe($.gulp.dest($.dist.js))
)

$.gulp.task('webserver-dist', () => require(`../../${$.deploy.server}/server-dist.js`)($))

$.gulp.task('distTask', (cb) => $.runSequence('generateOneScriptFile', 'compress', 'clean-min', cb))