var $ = {
    babel: require('gulp-babel'),
    changed: require('gulp-changed'),
    data: require('gulp-data'),
    del: require('del'),
    fs: require('fs'),
    gulp: require('gulp'),
    inject: require('gulp-inject'),
    jade: require('gulp-jade'),
    karma: require('karma').server,
    ngAnnotate: require('gulp-ng-annotate'),
    path:require('path'),
    runSequence: require('run-sequence'),
    stylus: require('gulp-stylus'),
    templateCache: require('gulp-angular-templatecache'),
    tinylr: require('tiny-lr')(),
    uglify: require('gulp-uglify'),
    useref: require('gulp-useref'),
    wiredep: require('wiredep').stream,
    wrap: require('gulp-wrap'),

    plato: './analysis/plato',
    serverTasks: './server-tasks',
    vendor: './vendor',

    dev: {
        assets: './dev/public/assets',
        guide: './dev/public/guide',
        public: './dev/public',
        server: './dev/server',
        serverTasks: './dev/server-tasks',
        stylus: './dev/public/styles'
    },

    deploy: {
        app: './deploy/public/app',
        assets: './deploy/public/assets',
        guide: './deploy/public/guide',
        guideIndex: './deploy/public/guide.html',
        index: './deploy/public/index.html',
        js: './deploy/public/js',
        public: './deploy/public',
        server: './deploy/server',
        serverTasks: './deploy/server-tasks',
        stylus: './deploy/public/styles',
        tmp: './deploy/tmp',
        tmpJs: './deploy/tmp/js',
        vendor: './deploy/public/vendor'
    },

    dist: {
        allJs: './public-dist/js/all.js',
        app: './public-dist/app',
        index: './public-dist/index.html',
        js: './public-dist/js',
        public: './public-dist',
        stylus: './public-dist/styles',
        vendor: './public-dist/vendor'
    }
};

$.fn = {
    jsonJade: function (file) {
        var NAME = file.path;

        var FILEJADE = $.path.basename(NAME, '.jade');

        var dirname = $.path.dirname(NAME);

        dirname = dirname.replace($.path.sep + 'dev' + $.path.sep, $.path.sep + 'deploy' + $.path.sep);

        var route = $.path.resolve(__dirname, dirname, FILEJADE + '.data.js');

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