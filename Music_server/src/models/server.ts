import express, { Application } from 'express'
import cors from 'cors'

// import the routes from route files


export class Music{
    //private
    private app:Application
    private port:string
    private apiPaths = {
        user:'musicserver/user',
        artist:'musicserver/artist',
        song:'musicserver/song'
    }
    //constructor
    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000';

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use( cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use( this.apiPaths.user )
        this.app.use( this.apiPaths.artist )
        this.app.use( this.apiPaths.song )
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server runnig on port ${this.port}`);
        })
    }
}