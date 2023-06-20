const jwt = require('jsonwebtoken')

export const generateJWT = ( uid: string) =>{
    
    return new Promise((resolve: Function, reject: Function) => {

        //setting payload remeber use it on validation_jwt file middlewares
        const payload = { uid }

        // we need to involque our key from env this will be the signature
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn:'4h'
        },(err: Error, token:any)=>{
            if(err){
                console.log(err);
                reject('Cannot create token')
            }else{
                resolve(token)
            }
        })
    })
}