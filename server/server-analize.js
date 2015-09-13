module.exports = ($) => {
    'use strict'

    const app = $.express()

    const PORT = 8004

    // ROUTES
    app
    .use($.express.static($.plato))
    .use('/*', (req, res) => res.sendFile($.path.resolve(__dirname, `../../${$.plato}`)))
    .listen(PORT, () => console.log('Listening on port %d', PORT))

    // LAUNCH
    $.open(`http://localhost:${PORT}`)
}