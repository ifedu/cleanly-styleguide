var $ = {
    babel: require('gulp-babel'),
    changed: require('gulp-changed'),
    data: require('gulp-data'),
    del: require('del'),
    fs: require('fs'),
    gulp: require('gulp'),
    gulpRimraf: require('gulp-rimraf'),
    jade: require('gulp-jade'),
    ngAnnotate: require('gulp-ng-annotate'),
    path:require('path'),
    rimraf: require('rimraf'),
    runSequence: require('run-sequence'),
    stylus: require('gulp-stylus'),
    templateCache: require('gulp-angular-templatecache'),
    wiredep: require('wiredep').stream,
    wrap: require('gulp-wrap'),

    serverTasks: './server-tasks',
    vendor: './vendor',

    dev: {
        assets: './dev/public/assets',
        public: './dev/public',
        server: './dev/server',
        serverTasks: './dev/server-tasks',
        stylus: './dev/public/styles'
    },

    deploy: {
        assets: './deploy/public/assets',
        index: './deploy/public/index.html',
        js: './deploy/public/js',
        public: './deploy/public',
        server: './deploy/server',
        serverTasks: './deploy/server-tasks',
        stylus: './deploy/public/styles',
        tmp: './deploy/tmp',
        tmpJs: './deploy/tmp/js',
        tmpWrap: './deploy/tmp-wrap',
        vendor: './deploy/public/vendor'
    }
};

$.fn = {
    readFolder: function (folder) {
        var path = require('path').join(__dirname, folder);

        var files = require('fs').readdirSync(path);

        files.forEach(function (file) {
            require('./' + folder + '/' + file)($);
        });
    }
};

module.exports = $;