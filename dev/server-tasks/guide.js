$.gulp.task('jade-guide', () =>
    $.gulp
    .src([
        `${$.dev.guide}/**/*.jade`,
        `${$.dev.public}/guide.jade`,
        `!${$.dev.guide}/**/_*.jade`,
        `!${$.dev.guide}/**/_*/**/*.jade`
    ])
    .pipe($.changed($.dev.guide, {extension: '.html'}))
    .pipe($.data($.fn.jsonJade))
    .pipe($.jade({
        pretty: true
    }))
    .on('error', (error) => {
        console.log(error);
    })
    .pipe($.gulp.dest($.deploy.public))
)

$.gulp.task('scripts-js-guide', () =>
    $.gulp
    .src(`${$.dev.guide}/**/*.js`)
    .pipe($.changed($.deploy.guide))
    .pipe($.wrap(
        `(function () {
            <%= contents %>
        })();`
    ))
    .pipe($.gulp.dest($.deploy.guide))
    .pipe($.babel())
    .pipe($.gulp.dest($.deploy.guide))
    .pipe($.ngAnnotate())
    .pipe($.gulp.dest($.deploy.guide))
)

$.gulp.task('styles-guide', () =>
    $.gulp
    .src(`${$.dev.guide}/*.styl`)
    .pipe($.styles({
        linenos: true
    }))
    .pipe($.gulp.dest($.deploy.guide))
)

$.gulp.task('addDependencies-guide', () =>
    $.gulp
    .src(`./${$.deploy.guideIndex}`)
    .pipe($.wiredep({
        directory: $.deploy.vendor,
        exclude: ['angular-mocks'],

        onError: () => {}
    }))
    .pipe($.gulp.dest($.deploy.public))
)

$.gulp.task('webserver-guide', () => require(`../../${$.deploy.server}/server-guide.js`)($))

$.gulp.task('guideTask', (cb) => $.runSequence(['scripts-js-guide', 'styles-guide'], 'jade-guide', 'addDependencies-guide', 'webserver-guide', cb))

$.gulp.watch([
    `${$.dev.guide}/**/*.jade`,
    `${$.dev.public}/**/guide.jade`
], () => $.runSequence('jade-guide', 'addDependencies-guide'))
$.gulp.watch(`${$.dev.guide}/**/*.js`, ['scripts-js-guide'])