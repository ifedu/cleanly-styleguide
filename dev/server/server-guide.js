module.exports = ($) => {
    const app = $.express()

    const PORT = 8003
    const PORT_RELOAD = 35731

    // ROUTES
    app
    .use(require('connect-livereload')({port: PORT_RELOAD}))
    .use($.express.static($.deploy.public))
    .use('/*', (req, res) => res.sendFile($.path.resolve(__dirname, `../../${$.deploy.public}`)))
    .use('/api', (req, res) =>
        req
        .pipe($.request(`http://api${req.path}`))
        .pipe(res)
    )
    .listen(PORT, () => console.log('Listening on port %d', PORT))

    // LIVERELOAD
    $.tinylr.listen(PORT_RELOAD, () => console.log('Listening on port %d', PORT_RELOAD))

    // LAUNCH
    $.open(`http://localhost:${PORT}/guide.html`)
}