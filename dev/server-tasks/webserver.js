module.exports = ($, src) =>
    $.gulp.task('webserver', () => require(src.deploy.gulp.file.serverFile)($, src))