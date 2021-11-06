
// setTimeout( ()=>console.log('holamundo'), 1000)

const getUserById = (id, cb) => {
    const usuario = {
        id,
        nombre: 'dave',
    }

    setTimeout(()=>{cb(usuario);},1500)
}

getUserById(10, ( {nombre} )=>{
    // console.log('hola mundo xd')
    console.log(nombre.toUpperCase());
})