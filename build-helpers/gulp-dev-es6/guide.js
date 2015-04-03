const CONFIG = {
    basedir: './src-guide/'
};

var babel = require('gulp-babel');
var changed = require('gulp-changed');
var debug = require('gulp-debug');
var gulp = require('gulp');
var jade = require('gulp-jade');
var jadeInheritance = require('gulp-jade-inheritance');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var rimraf = require('rimraf');
var runSequence = require('run-sequence');
var sass = require('gulp-ruby-sass');
var webserver = require('gulp-webserver');
var wiredep = require('wiredep').stream;

gulp.task('jade-guide', () =>
    gulp.src(['./src-guide/**/*.jade'])
    .pipe(changed('./build'))
    .pipe(jadeInheritance(CONFIG))
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('./build'))
);

gulp.task('addDependencies-guide', () =>
    gulp.src('./build/guide.html')
    .pipe(wiredep({
        directory: './build/vendor',
        exclude: ['angular-mocks']
    }))
    .pipe(gulp.dest('./build'))
);

gulp.task('scripts-tmp-guide', () =>
    gulp.src(['./src-guide/**/*.js'])
    .pipe(changed('./build'))
    .pipe(babel())
    .pipe(gulp.dest('./tmp/guide'))
);

gulp.task('scripts-build-guide', () =>
    gulp.src(['./tmp/guide/**/*.js', '!./tmp/guide/**/*.spec.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default', {
        verbose: true
    }))
    .pipe(debug())
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./build'))
);

gulp.task('sass-guide', () =>
    sass('./src-guide', {
        style: 'expanded',
        lineNumbers: true
    })
    .on('error', (error) => {
        console.log(error.message);
    })
    .pipe(gulp.dest('./build'))
);

gulp.task('webserver-guide', () =>
    gulp.src('./build')
    .pipe(webserver({
        livereload: true,
        directoryListing: false,
        open: 'http://localhost:8003/guide.html',
        port: '8003'
    }))
);

gulp.task('build-guide', (cb) => runSequence('jade-guide', 'addDependencies-guide', 'scripts-tmp-guide', 'scripts-build-guide', 'sass-guide', 'webserver-guide', cb));

gulp.watch('./src-guide/**/*.jade', () => runSequence('jade-guide', 'addDependencies-guide'));
gulp.watch('./src-guide/**/*.js', () => runSequence('scripts-tmp-guide', 'scripts-build-guide'));
gulp.watch('./src-guide/**/*.scss', ['sass-guide']);