import { PrismaClient } from "@prisma/client";

const { roles, user } = new PrismaClient()

export const isValidRole = async (role:string = '') => {
    const existRole = await roles.findUnique({
        where: {
            role : role
        }
    })

    if( !existRole ){
        throw new Error(`Role ${role} does not exist`)
    }

}

//check if the mail exist
export const mailExits = async(mail:string)=>{

    const existMail = await user.findUnique({
    where: {
        mail: mail
    }
    })
    if( existMail ) {
        throw new Error(`Mail ${mail} exist already`)
    }
        

}
