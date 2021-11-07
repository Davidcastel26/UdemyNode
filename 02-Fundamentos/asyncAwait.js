
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

const getInfoUser = async() => {
    const empleado = await getEmploye(id);
    const salary = await getSalary(id)
    return `el salario de ${empleado} es de ${salary}`;
}

const id = 2;

getInfoUser( id )
    .then(msg => console.log(msg))
