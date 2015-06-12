$.gulp.task('jade-guide', () =>
    $.gulp
    .src([
        `${$.dev.guide}/**/*.jade`,
        `${$.dev.public}/guide.jade`,
        `!${$.dev.guide}/**/mixins/*.jade`
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

$.gulp.task('scripts-js-guide', () =>
    $.gulp
    .src([
        `${$.dev.guide}/**/*.js`,
        `!${$.dev.public}/guide.data.js`,
    ])
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

$.gulp.task('scripts-js-guide-data', () =>
    $.gulp
    .src([`${$.dev.public}/guide.data.js`])
    .pipe($.changed($.deploy.guide))
    .pipe($.babel())
    .pipe($.gulp.dest($.deploy.guide))
)

$.gulp.task('stylus-guide', () =>
    $.gulp
    .src(`${$.dev.guide}/*.styl`)
    .pipe($.stylus({
        linenos: true
    }))
    .pipe($.gulp.dest($.deploy.guide))
)

$.gulp.task('addDependencies-guide', () =>
    $.gulp
    .src(`./${$.deploy.guideIndex}`)
    .pipe($.wiredep({
        directory: $.deploy.vendor,
        exclude: ['angular-mocks']
    }))
    .pipe($.gulp.dest($.deploy.public))
)

$.gulp.task('webserver-guide', () => require(`../../${$.deploy.server}/server-guide.js`)($))

$.gulp.task('guideTask', (cb) => $.runSequence(['scripts-js-guide', 'scripts-js-guide-data', 'stylus-guide'], 'jade-guide', 'addDependencies-guide', 'webserver-guide', cb))

$.gulp.watch([
    `${$.dev.guide}/**/*.jade`,
    `${$.dev.public}/**/guide.jade`
], () => $.runSequence('jade-guide', 'addDependencies-guide'))
$.gulp.watch(`${$.dev.guide}/**/*.js`, ['scripts-js-guide'])