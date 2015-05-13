var deployPublic = './deploy/public';
var devPublic = './dev/public';
var tmp = './deploy/tmp';

module.exports = {
    deploy : {
        app: {
            dir: {
                assets: deployPublic + '/assets',
                js: deployPublic + '/js',
                public: deployPublic,
                server: 'server',
                serverDir: 'deploy/server',
                stylus: deployPublic + '/css',
                tmp: tmp,
                vendor: deployPublic + '/vendor'
            },
            file: {
                htmlDirectives: [deployPublic + '/**/directives/**/*.html'],
                htmlIndex: deployPublic + '/index.html',
                jsPublics: [
                    tmp + '/**/*.js',
                    '!' + tmp + '/**/*.data.js',
                    '!' + tmp + '/**/*.spec.js'
                ],
                tmpJs: tmp + '/js',
                tpl: 'templates.js',
                tplWithDir: deployPublic + '/js/templates.js'
            }
        },
        guide: {},
        gulp: {
            dir: {
                dynamic: './deploy/server-tasks',
                server: './deploy/server'
            },
            file: {
                serverFile: './../server/server.js'
            }
        }
    },
    dev: {
        app: {
            file: {
                assets: devPublic + '/assets/**/*',
                jade: [
                    devPublic + '/**/*.jade',
                    '!' + devPublic + '/**/mixins/*.jade'
                ],
                js: [devPublic + '/**/*.js'],
                stylus: devPublic + '/styles/main.styl',
                vendor: './vendor/**/*'
            }
        },
        guide: {},
        gulp: {
            dir: {
                init: './server-tasks'
            },
            file: {
                dynamic: ['./dev/server-tasks/*'],
                server: ['./dev/server/**/*']
            }
        }
    }
}