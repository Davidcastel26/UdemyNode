import express, { Application } from "express";
import cors from 'cors';
import { socketController } from "../sockets/controller";
// import server from 'socketio' 

// import routes here 

class Server{

    private app: Application;
    private port: string;
    private server: any
    private io:     any

    private paths = {}

    constructor(){
        this.app   = express();
        this.port  = process.env.PORT || '8080';
        this.server= require('http').createServer( this.app )
        this.io    = require('socket.io')(this.server)

        // middlewares 
        this.middlewares();

        // routes mine app 
        this.routes();

        // Sockets
        this.sockets()
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
    
        this.app.use( express.static('public'))
    }

    routes(){ 

    }

    sockets(){

        this.io.on('connection', socketController)


    }

    listen(){
        this.server.listen( this.port, () => {
            console.log(`Server running on port ${this.port}`);
        })
    }

}

export default Server