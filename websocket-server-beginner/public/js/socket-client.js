
// references from HTML  
const lbOnline    = document.querySelector('#lbOnline')
const lbOffline   = document.querySelector('#lbOffline')
const txtMenssage = document.querySelector('#txtMenssage')
const btnSend     = document.querySelector('#btnSend')

const socket      = io()

socket.on('connect', () => {

    console.log('connected bro');

    lbOffline.style.display = 'none';
    lbOnline.style.display = '';

})

socket.on('disconnect', () =>{
    console.log('YOU WERE DISCONNECTED');

    lbOffline.style.display = '';
    lbOnline.style.display = 'none';
});

btnSend.addEventListener('click', () => {

    const mensaje = txtMenssage.value;

    const payload = {
        mensaje,
        id: '123abc',
        date: new Date().getTime()
    }
    
    socket.emit('send-Message', payload)
})