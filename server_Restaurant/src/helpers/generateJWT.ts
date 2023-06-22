const jwt = require('jsonwebtoken')

export const generateJWT = async (uuid : string ) => {
    
    return new Promise((resolve: Function, reject:Function)=>{

        const payload = { uuid }
        jwt.sign(payload, process.env.SUPERKEY,{
            expiresIn: '4h'
        },(err:Error, token: any)=>{
            if(err){
                console.log(err);
                reject('cannot create token')
            }else{
                resolve(token)
            }
        })

    })
    
}