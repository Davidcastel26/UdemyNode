const express= require('express')
const cors = require('cors')

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

        // CORS 
        this.app.use( cors() )

        // public dir
        this.app.use( express.static('public'))

    }

    routes(){
        this.app.get('/api', (req, res) => {
            res.status(200).json({
                "msg":"get API"
            })
        })
        this.app.put('/api', (req, res) => {
            res.status(202).json({
                "msg":"Update API"
            })
        })
        this.app.post('/api', (req, res) => {
            res.status(201).json({
                "msg":"Create API"
            })
        })
        this.app.delete('/api', (req, res) => {
            res.status(200).json({
                "msg":"Delete API"
            })
        })
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
          })
          
    }

}

module.exports = Server;