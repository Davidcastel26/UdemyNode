import express, {Application} from 'express';
import cors from 'cors';

import userRouter from '../routes/user.routes'

export class Server{
 
    private app: Application;
    private port: string;
    private apiPaths = {
        user: '/collectionserver/user'
    }

    constructor(){
        this.app= express()
        this.port = process.env.PORT || '8000';

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    routes(){
        this.app.use(this.apiPaths.user ,userRouter)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server runing on port ${this.port}`);
            
        })
    }

}