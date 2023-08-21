

const noteForm = document.querySelector('#noteForm')
const title = document.querySelector('#title')
const description = document.querySelector('#description')

noteForm.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(
    //     title.value,
    //     description.value
    // );
    if(savedId){
        updateNote(savedId, title.value, description.value)
    }else{
        saveNote( title.value, description.value)
    }

    title.value = ''
    description.value = ''

    title.focus()
})



// const socketIO = io()

// socketIO.on('ping',() => {
//     console.log('ping');

//     socketIO.emit('pong')
// })