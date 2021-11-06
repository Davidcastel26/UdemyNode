
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
    const employe = empleados.find( e =>  e.id == id)
    if (employe) {
        cb(null, employe)
    }
    else{
    cb(`employe with ${id} does not exist here`)
    }
}

// console.log(getEmploye(3)); //{ id: 3, name: 'chris' }
// console.log(getEmploye(1)); //employe with 1 does not exist here

getEmploye(3, (err,empleado) => {
    if(err){
        console.log('Error!');
        return console.log(err);
    }
    console.log('empleado existe!');
    console.log(empleado);
})
