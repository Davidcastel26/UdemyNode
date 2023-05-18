const express= require('express')

class Server {

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        
        // middlewares 
        this.middlewares()

        // APP ROUTES 
        this.routes();
    }

    middlewares(){
        // public dir
        this.app.use( express.static('public'))

    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.send('Hello World!')
        })
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
          
    }

}

module.exports = Server;