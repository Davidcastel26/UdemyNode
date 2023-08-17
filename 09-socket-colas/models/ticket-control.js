const path = require('path')
const fs   = require('fs')

class Ticket {

    constructor(number, desk){
        this.number = number
        this.desk   = desk
    }

}

class TicketControl {

    constructor(){

        this.last   = 0;
        this.day    = new Date().getDate()
        this.tickets= []
        this.last4 = []
        

        this.init()
    }

    get toJSON(){
        return{
            last: this.last,
            day: this.day,
            tickets: this.tickets,
            last4: this.last4
        }
    }

    init(){
        const { day, tickets, last, last4 } = require('../db/data.json')
        // console.log(data);
        if( day === this.day ){
            this.tickets = tickets;
            this.last    = last;
            this.last4   = last4;
        }else{
            this.saveDB()
        }
    }

    saveDB(){

        const dbPath = path.join(__dirname, '../db/data.json')
        
        fs.writeFileSync( dbPath, JSON.stringify( this.toJSON ))
    }

    nextT(){
        this.last += 1;
        const ticket = new Ticket(this.last, null)
 
        this.tickets.push( ticket )

        this.saveDB();
        return 'Ticket ' + ticket.number;
    }

    handleTicket( desk ){
        //no tickets
        if( this.tickets.length === 0 ){
            return null
        }

        const ticket = this.tickets.shift();

        // this.tickets.shift();
        ticket.desk =  desk

        this.last4.unshift( ticket )

        if( this.last4.length > 4) {
            this.last4.splice(-1,1)
        }

        this.saveDB();

        return ticket
    }

}

module.exports = TicketControl