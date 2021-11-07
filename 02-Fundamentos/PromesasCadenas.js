
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
   return new Promise(( resolve, reject ) => {
        const employe = empleados.find( e =>  e.id == id)?.name;
        ( employe )
            ? resolve( employe )
            : reject(`Does not exist that employe with the id ${id} here please call the security or 911 in urgent cases`)
    })
}

const getSalary= (id, callback) =>{
    return new Promise((resolve, reject)=>{
        const salary = salarios.find(cantidad => cantidad.id === id)?.salario;
        ( salary )
            ? resolve(salary)
            : reject(` salaray is not in file`)
    })
}


const id = 3;

// getEmploye(id)
//     .then(empleado =>{
//         getSalary(id)
//             .then( salario => {
//                 console.log(`el empleado, ${empleado} tiene de salario de ${salario}`);
//             } )
//             .catch(err => console.log(err))
//     })
//     .catch(err=> console.log(err))

let nombre;

getEmploye(id)
    .then( empleado => {
        // console.log(empleado)
        nombre = empleado
        return getSalary(id)
    })
    .then( salario => {console.log(`el empleado ${nombre} tiene un salario de ${salario}`)})
    .catch(err=> console.log(err))


