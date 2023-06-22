import express, {Application} from 'express';
import cors from 'cors'

// routes
import userRouter from '../routes/db/user.routes'

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        user:'/api/users', 
    }

    constructor(){
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
        this.app.use( this.apiPaths.user, userRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`)
        })
    }

}

export default Server;