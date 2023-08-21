const socket = io()

const saveNote = (title, description ) => {
    
    socket.emit('client:newnote', {
        title,
        description,
    })
}

const deleteNote = (id) => {
    // console.log(id);
    socket.emit('client:deletenote', id)
}

const getNote = (id) => {
    socket.emit("client:getnote", id)
}

const updateNote = (id, title, description ) => {
    socket.emit('client:updatenote',{
        id,
        title,
        description
    })
}

socket.on('server:newnote', appendNote)

socket.on('server:loadnotes',renderNotes)

socket.on('server:selectednote', noteFound =>{
    // console.log(data);
    const title = document.querySelector('#title')
    const description = document.querySelector('#description')

    title.value = noteFound.title
    description.value = noteFound.description

    savedId = noteFound.id
})