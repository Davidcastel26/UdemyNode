import express, {Application} from 'express';
import cors from 'cors'

// routes
import userRouter from '../routes/db_Routes/user.routes'
import chefRouter from '../routes/db_Routes/chef.routes'
import menuRouter from '../routes/db_Routes/menu.routes'

//jwt
import JWTuserRouter from '../routes/jwtRoutes/jwtUser'

class Server {

    private app: Application;
    private port: string;
    private apiPaths = {
        user:'/api/users', 
        chef:'/api/chefs',
        menu:'/api/menus',
        jwtUser:'/api/user'
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
        this.app.use( this.apiPaths.chef, chefRouter)
        this.app.use( this.apiPaths.menu, menuRouter)
        this.app.use( this.apiPaths.jwtUser, JWTuserRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server running on port ${this.port}`)
        })
    }

}

export default Server;