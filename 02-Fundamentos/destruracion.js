const deadpool = {
    nombre:'Wade',
    apellido:'Winston',
    poder:'Regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// function prinHero(  hero ){
function prinHero(  {nombre, apellido, poder}  ){
//    const {nombre, apellido, poder} = deadpool;
   console.log(nombre, apellido, poder);

}

// prinHero( deadpool)\

const heroes = ['deadpool','superman','batman']

// const h1 = heroes[0]
const [, , h3] = heroes


console.log(h3);