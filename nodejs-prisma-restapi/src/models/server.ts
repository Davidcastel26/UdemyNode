import express, { Application } from 'express';
import cors from 'cors';

export class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/prismapi/product'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000';

        this.middlewares()
        
    }

    middlewares(){
        this.app.use( cors() )

        this.app.use( express.json())

    }

    routes(){
        this.app.use(this.apiPaths.users)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
            
        })
    }

}