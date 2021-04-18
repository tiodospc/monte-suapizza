const fs = require('fs')
const jsonServer = require('json-server')
const server = jsonServer.create()
const routes = jsonServer.router('./database/db.json')

server.use(jsonServer.defaults());
server.use(routes)

server.listen(3000, () => {
    console.log('ouvindo na porta 3000...')
})