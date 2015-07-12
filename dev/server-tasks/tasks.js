$.gulp.task('compiledBase', (cb) => $.runSequence('scripts', ['styles', 'jade', 'copy'], 'templateCache', 'addDependencies', 'watch', cb))
$.gulp.task('compiledMin', (cb) => $.runSequence('scripts', ['styles-dist', 'jade-dist', 'copy'], 'copyDeploy', 'templateCache-dist', 'addDependencies-dist', 'distTask', cb))

$.gulp.task('analize-es6', (cb) => $.runSequence('compiledBase', 'analysis', cb))
$.gulp.task('dist-es6', (cb) => $.runSequence('clean', 'compiledMin', 'webserver-dist', cb))
$.gulp.task('guide-es6', () => require(`../../${$.deploy.server}/server-guide.js`)($))
$.gulp.task('run-es6', (cb) => $.runSequence('clean', 'compiledBase', 'webserver', cb))
$.gulp.task('test-es6', (cb) => $.runSequence('clean', 'compiledBase', 'scripts-js-test', 'karma', cb));