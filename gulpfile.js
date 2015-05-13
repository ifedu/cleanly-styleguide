'use strict';

var src = require('./config.js');

var $ = {
    babel: require('gulp-babel'),
    changed: require('gulp-changed'),
    data: require('gulp-data'),
    del: require('del'),
    fs: require('fs'),
    gulp: require('gulp'),
    jade: require('gulp-jade'),
    ngAnnotate: require('gulp-ng-annotate'),
    path:require('path'),
    runSequence: require('run-sequence'),
    stylus: require('gulp-stylus'),
    templateCache: require('gulp-angular-templatecache'),
    wiredep: require('wiredep').stream,

    fn: {
        readFolder: function (folder) {
            var path = require('path').join(__dirname, folder);

            var files = require('fs').readdirSync(path);

            files.forEach(function (file) {
                require(folder + '/' + file)($, src);
            });
        }
    }
};

$.fn.readFolder(src.dev.gulp.dir.init);