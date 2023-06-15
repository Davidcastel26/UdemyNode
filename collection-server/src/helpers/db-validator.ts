import { PrismaClient } from "@prisma/client";

const { roles } = new PrismaClient()

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
