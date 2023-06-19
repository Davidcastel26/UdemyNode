import express, { Application } from 'express'
import cors from 'cors'

// import the routes from route files
import userRouter from '../routes/user.routes'
import artistRouter from '../routes/artist.routes'

export class Server{
    //private
    private app:Application
    private port:string
    private apiPaths = {
        user:'musicserver/user',
        artist:'musicserver/artist',
        // song:'musicserver/song'
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
        this.app.use( this.apiPaths.user, userRouter)
        this.app.use( this.apiPaths.artist, artistRouter)
        // this.app.use( this.apiPaths.song,()=>{} )
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server runnig on port ${this.port}`);
        })
    }
}