module.exports = ($) => {
    // ROUTES
    const express = require('express')
    const app = express()

    app.use(express.static($.dist.public))

    app.use('/*', (req, res) => res.sendFile($.path.resolve(__dirname, `../../${$.dist.public}`)))

    app.use('/api', (req, res) => {
        const request = require('request')

        req
        .pipe(request(`http://api${req.path}`))
        .pipe(res)
    })

    // SERVER
    const http = require('http')
    const server = http.Server(app)

    const PORT = '8001'

    server.listen(PORT, () => console.log('Listening on port %d', server.address().port))

    const open = require('open')

    open(`http://localhost:${PORT}`)
}