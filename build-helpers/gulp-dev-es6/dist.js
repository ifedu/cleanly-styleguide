var fs = require('fs');
var path = require('path');

var filter = require('gulp-filter');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var rimraf = require('gulp-rimraf');
var useref = require('gulp-useref');

var conventionalChangelog = require('conventional-changelog');
var runSequence = require('run-sequence');

var BUILD_FOLDER = 'build';
var DIST_FOLDER = './dist';
var VENDOR_FOLDER = 'vendor';

gulp.task('cleandist', function() {
    return gulp.src(DIST_FOLDER, {
        read: false
    }).pipe(rimraf());
});

gulp.task('generateOneScriptFile', function(done) {

    var assets = useref.assets({
        searchPath: './' + BUILD_FOLDER
    });
    return gulp.src('./' + BUILD_FOLDER + '/index.html')
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest(DIST_FOLDER));
});

gulp.task('minifyHTML', function(done) {
    return gulp.src(DIST_FOLDER + '/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest(DIST_FOLDER));
});


gulp.task('minifyCSS', function(done) {
    return gulp.src(DIST_FOLDER + '/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest(DIST_FOLDER));
});


gulp.task('copyvendor', function() {
    return gulp.src('./' + VENDOR_FOLDER + "/**/*.*")
        .pipe(gulp.dest(DIST_FOLDER + '/' + VENDOR_FOLDER));
});

gulp.task('copybuild', function(done) {
    return gulp.src('./' + BUILD_FOLDER + '/**/*.*')
        .pipe(gulp.dest(DIST_FOLDER));
});

gulp.task('copyversion', function(done) {
    return gulp.src('./version.txt')
        .pipe(gulp.dest(DIST_FOLDER));
});

gulp.task('changelog', function(done) {
    function saveChangelog(err, log) {
        if (err) {
            return done(err);
        }
        fs.writeFile('CHANGELOG.md', log, done);
    }

    fs.readFile('./package.json', 'utf8', function(err, rawData) {
        var data = JSON.parse(rawData);
        conventionalChangelog({
            repository: data.repository.url.replace('.git', ''),
            version: data.version
        }, saveChangelog);
    });
});


gulp.task('compiledist', function(cb) {
    runSequence('generateOneScriptFile', 'minifyHTML', cb);
});


gulp.task('copydist', function(cb) {
    runSequence(
        'copybuild',
        'copyvendor',
        'copyversion',
        cb
    );
});

gulp.task('preparedist', function(cb) {
    runSequence(
        'cleandist',
        'copydist',
        'generateOneScriptFile',
        'minifyHTML',
        'minifyCSS',
        cb
    );
});

gulp.task('build', function(cb) {
    runSequence('clean', 'scripts', 'copy', 'sass', 'jade', 'addDependencies', cb);
    // runSequence('clean', 'scripts', 'copy', 'sass', 'jade', 'addDependencies', 'test', cb);
});

gulp.task('dist', function() {
    runSequence(
        'build',
        'preparedist'
    );
});
