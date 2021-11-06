
const empleados = [
    {
        id:2,
        name: 'dave'
    },
    {
        id:3,
        name:'chris'
    },
    {
        id:4,
        name:'vanne'
    }
]

const salarios=[
    {
        id:2,
        salario: 1000
    },
    {
        id:3,
        salario: 2000
    }
]

const getEmploye = (id, cb) => {
    // const employe = empleados.find( e =>  e.id == id)?.name;
    /*
    if (employe) {
        cb(null, employe)
    }
    else{
        cb(`employe with ${id} does not exist here`)
    }
    */
   const promesa = new Promise(( resolve, reject ) => {
        const employe = empleados.find( e =>  e.id == id)?.name;
        if( employe){
            resolve( employe )
        }
        else{
            reject(`Does not exist that employe with the id ${id} here please call the security or 911 in urgent cases`)
        }
    })
    return promesa;
}
const id = 3;
getEmploye(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err))






