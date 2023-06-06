import express, { Application } from 'express';
import userRoutes from '../routes/usuario'
import cors from 'cors'

export class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';

        //initial methods
        this.middlewares()
        this.routes();
    }

    middlewares(){
        //CORS
        this.app.use( cors())
        // PARECE BODY
        this.app.use(express.json())
        // PUBLIC DIR
        this.app.use( express.static('public'))
    }

    routes(){

        this.app.use(this.apiPaths.users, userRoutes)

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
            
        })
    }

}
