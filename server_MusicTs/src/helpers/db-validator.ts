import { PrismaClient } from "@prisma/client";

const { user, songs } = new PrismaClient()


//check in DB if user id exist 
export const existUserById =async (id : string) => {
    
    const existId = await user.findUnique({
        where:{
            id: id
        }
    })

    if(!existId){
        throw new Error(`Id ${id} does not exist`)
    }

}

// checking if mail from user Exist 
export const mailExist =async (mail: string) => {
    
    const existMail = await user.findFirst({
        where:{
            mail: mail
        }
    })

    // if there is already the mail we will return an error 
    if( existMail ){
        throw new Error(`Mail ${mail} exist already try with a diferent one`)
    } 

}

// checking if song id exist 
export const existSongId = async(id:string) =>{
    const existId = await songs.findUnique({
        where:{
            id:id
        }
    })
    if(!existId)throw new Error(`id ${id} does not exist`)
}