const { request, response } = require('express')

export const isOnlyAdminRole =async (req:typeof request, res:typeof response, next:Function) => {
    
    if( !req.user ) return res.status(500).json({
        msg:"trying to verify role without token"
    })

    const { rolesId, name} = req.user

    if( rolesId !== 'ADMIN_ROLE') return res.status(401).json({
        msg:`${name} is not admin - you cannot do this process`
    })
    
    next();
}