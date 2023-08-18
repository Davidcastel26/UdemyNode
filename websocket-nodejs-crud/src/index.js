import express from "express";
import { Server as SocketServer } from 'socket.io'
import http from 'http'

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

app.use(express.static(__dirname+ '/public'))

io.on('connection', (socket) => {
    console.log('nueva connection: ', socket.id);
})

server.listen(8000)
console.log('server on port', 8000);