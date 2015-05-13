module.exports = ($, src) => {
    const express = require('express')

    const app = express()

    app.use(express.static(src.deploy.app.dir.public))

    app.use('/*', (req, res) => res.sendFile(src.deploy.app.file.htmlIndex))

    const server = require('http').Server(app)

    const PORT = '8002'

    server.listen(PORT, () => console.log('Listening on port %d', server.address().port))

    const open = require('open')

    open(`http://localhost:${PORT}`)
}