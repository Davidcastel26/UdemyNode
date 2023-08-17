import TicketControl from '../models/ticket-control';

const ticketControl = new TicketControl()

export const socketController = (socket:any) => {

    // console.log('Client connected', socket.id);
    // socket.disconect()s

    // socket.on('disconnect', () => {
    //     console.log('Client disconected');
        
    // })

    socket.on('send-Message', ( payload: object, callback : Function ) => {

        
        const id = 123543;
        callback(id)
        
        socket.broadcast.emit('send-Message', payload)
    })
}