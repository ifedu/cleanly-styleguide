module.exports = ($) => {
    const express = require('express')

    const app = express()

    app.use(express.static($.deploy.public))

    app.use('/*', (req, res) => res.sendFile($.path.resolve(`${__dirname}../../${$.deploy.public}`)))

    const server = require('http').Server(app)

    const PORT = '8003'

    server.listen(PORT, () => console.log('Listening on port %d', server.address().port))

    const open = require('open')

    open(`http://localhost:${PORT}/guide.html`)
}