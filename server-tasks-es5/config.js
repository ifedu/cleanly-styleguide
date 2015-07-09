var $ = {
    babel: require('gulp-babel'),
    changed: require('gulp-changed'),
    data: require('gulp-data'),
    del: require('del'),
    express: require('express'),
    extend: require('extend'),
    fs: require('fs'),
    gulp: require('gulp'),
    inject: require('gulp-inject'),
    jade: require('gulp-jade'),
    karma: require('karma').server,
    ngAnnotate: require('gulp-ng-annotate'),
    open: require('open'),
    path:require('path'),
    request: require('request'),
    runSequence: require('run-sequence'),
    styles: require('gulp-stylus'),
    templateCache: require('gulp-angular-templatecache'),
    tinylr: require('tiny-lr')(),
    uglify: require('gulp-uglify'),
    useref: require('gulp-useref'),
    wiredep: require('wiredep').stream,
    wrap: require('gulp-wrap'),

    plato: './_analysis/plato',
    serverTasks: './server-tasks-es5',
    vendor: './_vendor',

    dev: {
        assets: './dev/public/assets',
        guide: './dev/public/guide',
        public: './dev/public',
        server: './dev/server',
        serverTasks: './dev/server-tasks',
        styles: './dev/public/styles'
    },

    deploy: {
        app: './_deploy/public/app',
        assets: './_deploy/public/assets',
        guide: './_deploy/public/guide',
        guideIndex: './_deploy/public/guide.html',
        index: './_deploy/public/index.html',
        js: './_deploy/public/js',
        public: './_deploy/public',
        server: './_deploy/server',
        serverTasks: './_deploy/server-tasks',
        styles: './_deploy/public/styles',
        tmp: './_deploy/tmp',
        tmpJs: './_deploy/tmp/js',
        vendor: './_deploy/public/vendor'
    },

    dist: {
        allJs: './_public-dist/js/all.js',
        app: './_public-dist/app',
        index: './_public-dist/index.html',
        js: './_public-dist/js',
        public: './_public-dist',
        styles: './_public-dist/styles',
        vendor: './_public-dist/vendor'
    }
};

$.fn = {
    jsonJade: function (file) {
        var NAME = file.path;

        var FILEJADE = $.path.basename(NAME, '.jade');

        var dirname = $.path.dirname(NAME);

        dirname = dirname.replace($.path.sep + 'dev' + $.path.sep, $.path.sep + '_deploy' + $.path.sep);
        var route = $.path.resolve(__dirname, dirname, '_' + FILEJADE + '.js');

        return ($.fs.existsSync(route)) ? require(route) : {};
    },

    readFolder: function (folder) {
        var path = require('path').join(__dirname, folder);

        var files = require('fs').readdirSync(path);

        files.forEach(function (file) {
            require('./' + folder + '/' + file)($);
        });
    }
};

module.exports = $;