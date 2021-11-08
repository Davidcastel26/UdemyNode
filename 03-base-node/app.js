// print 
// const fs = require('fs');//fs = file system
const { crearTabla } = require('./helpers/multiplicar')

console.clear()
// console.log(`tabla del ${t}`)

// console.log(process.argv); //thge console will give us this array[
//'C:\\Program Files\\nodejs\\node.exe',
//'C:\\Users\\ingac\\Documents\\progra\\UdemyNode\\03-base-node\\app',
//'--base=9'
// ]

const [,,argument3= 'base=5'] = process.argv
const [,base = 1] = argument3.split('=')
// console.log(argument3); //. --base=1
// console.log(base); // 1
// let t = 4;

crearTabla(base)
  .then( nombreArchi => console.log(nombreArchi, 'creado'))
  .catch(err => console.log(err))

// console.log(salida);
  // fs.writeFile( `tabla-${t}.txt`, salida,(err)=>{
  //     if(err) throw err
  //     console.log(`tabla-${t}.txt creada papa`);
  // } )