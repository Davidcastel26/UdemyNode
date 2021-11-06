
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

const getEmploye = (id) => {
    const employe = empleados.find( e =>  e.id == id)
    return employe
}