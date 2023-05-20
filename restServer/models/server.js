const express= require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.usuariosPath = '/api/users'
        
        // middlewares 
        this.middlewares()

        // APP ROUTES 
        this.routes();
    }

    middlewares(){

        // CORS 
        this.app.use( cors() )

        // PARSIN 
        this.app.use(express.json())

        // public dir
        this.app.use( express.static('public'))

    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user'))
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
          
    }

}

module.exports = Server;