import express, { Application } from 'express';
import cors from 'cors';

import productRouter from '../routes/product.routes'
import categoeryRouter from '../routes/category.routes'

export class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        product: '/prismapi/product',
        category: '/prismapi/category'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000';

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use( cors() )

        this.app.use( express.json())

    }

    routes(){
        this.app.use(this.apiPaths.product, productRouter)
        this.app.use(this.apiPaths.category, categoeryRouter)
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
            
        })
    }

}