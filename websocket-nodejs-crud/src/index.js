import express from "express";
import { Server as SocketServer } from 'socket.io'
import http from 'http'
import { v4 as uuidv4 } from 'uuid'

let notes = []

const app = express()
const server = http.createServer(app)
const io = new SocketServer(server)

app.use(express.static(__dirname+ '/public'))

io.on('connection', (socket) => {
    console.log('nueva connection: ', socket.id);

    socket.emit('server:loadnotes', notes)

    socket.on('client:newnote', newNote => {
        // console.log(data);
        const note = {...newNote, id: uuidv4()}
        console.log(note);
        notes.push(note)
        io.emit('server:newnote', note)
    })

    socket.on('client:deletenote', noteId => {
        // console.log(id);
        notes = notes.filter( note => note.id !== noteId )

        io.emit('server:loadnotes', notes)
    })

    socket.on('client:getnote', noteId=> {
        // console.log(id);

        const noteFound = notes.find( note => note.id === noteId)
        // console.log(noteFound);
        socket.emit('server:selectednote', noteFound)
    })

    socket.on('client:updatenote', noteToUpdate => {
        // console.log(note);
        notes = notes.map(note => {
            if(note.id === noteToUpdate.id){
                note.title = noteToUpdate.title
                note.description = noteToUpdate.description
            }

            return note
        })

        io.emit('server:loadnotes', notes)
    })
})

server.listen(8000)
console.log('server on port', 8000);




// io.on('connection', (socket) => {
//     console.log('nueva connection: ', socket.id);

//     socket.emit('ping')
    
//     socket.on('pong', () => {
//         console.log('pong');
//     })
// })