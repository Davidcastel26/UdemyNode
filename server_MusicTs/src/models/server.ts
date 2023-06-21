import express, { Application } from 'express';
import cors from 'cors'

// routers 
    //db
import userRouter from '../routes/DBroutes/user.routes'
import songRouter from '../routes/DBroutes/songs.routes'
import artistRouter from '../routes/DBroutes/artists.routes'
import rolesRouter from '../routes/DBroutes/roles.routes'
    //JWT 
import JWTRouter from '../routes/JWTroutes/authjwt.routes'

class Server {

    private app: Application
    private port: string;
    private apiPaths = {
        role:'/apimusic/roles',
        user:'/apimusic/user',
        song:'/apimusic/songs',
        artist:'/apimusic/artists',
        authPathUser:'/apimusic/auth'
    } 
    
    constructor (){
        this.app = express()
        this.port = process.env.PORT || '8000'

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.apiPaths.user, userRouter)
        this.app.use(this.apiPaths.authPathUser, JWTRouter)
        this.app.use(this.apiPaths.song, songRouter)
        this.app.use(this.apiPaths.artist, artistRouter )
        this.app.use(this.apiPaths.role, rolesRouter )
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log(`Server runing on port ${this.port}`);
        })
    }
}

export default Server;