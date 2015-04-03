var conventionalChangelog = require('conventional-changelog');
var filter = require('gulp-filter');
var fs = require('fs');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var rimraf = require('gulp-rimraf');
var runSequence = require('run-sequence');
var useref = require('gulp-useref');

const BUILD_FOLDER = 'build';
const DIST_FOLDER = './dist';
const VENDOR_FOLDER = 'vendor';

gulp.task('cleandist', () => {
    gulp.src(DIST_FOLDER, {
        read: false
    })
    .pipe(rimraf())
});

gulp.task('generateOneScriptFile', (done) => {
    var assets = useref.assets({
        searchPath: './' + BUILD_FOLDER
    });

    gulp.src('./' + BUILD_FOLDER + '/index.html')
    .pipe(assets)
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest(DIST_FOLDER))
});

gulp.task('minifyHTML', (done) => {
    gulp.src(DIST_FOLDER + '/**/*.html')
    .pipe(htmlmin({
        collapseWhitespace: true
    }))
    .pipe(gulp.dest(DIST_FOLDER))
});


gulp.task('minifyCSS', (done) => {
    gulp.src(DIST_FOLDER + '/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest(DIST_FOLDER))
});

gulp.task('copyvendor', () => {
    gulp.src('./' + VENDOR_FOLDER + "/**/*.*")
    .pipe(gulp.dest(DIST_FOLDER + '/' + VENDOR_FOLDER))
});

gulp.task('copybuild', (done) => {
    gulp.src('./' + BUILD_FOLDER + '/**/*.*')
    .pipe(gulp.dest(DIST_FOLDER))
});

gulp.task('copyversion', (done) => {
    gulp.src('./version.txt')
    .pipe(gulp.dest(DIST_FOLDER))
});

gulp.task('changelog', (done) => {
    const saveChangelog = (err, log) => {
        if (err) {
            return done(err);
        }

        fs.writeFile('CHANGELOG.md', log, done);
    };

    fs.readFile('./package.json', 'utf8', (err, rawData) => {
        var data = JSON.parse(rawData);

        conventionalChangelog({
            repository: data.repository.url.replace('.git', ''),
            version: data.version
        }, saveChangelog);
    });
});

gulp.task('compiledist', (cb) => {
    runSequence('generateOneScriptFile', 'minifyHTML', cb);
});

gulp.task('copydist', (cb) => {
    runSequence('copybuild', 'copyvendor', 'copyversion', cb);
});

gulp.task('preparedist', (cb) => {
    runSequence('cleandist', 'copydist', 'generateOneScriptFile', 'minifyHTML', 'minifyCSS', cb);
});