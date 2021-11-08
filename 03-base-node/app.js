// print 
// const fs = require('fs');//fs = file system
const { crearTabla } = require('./helpers/multiplicar')

console.clear()
// console.log(`tabla del ${t}`)

let t = 3;

crearTabla(t)
   // console.log(salida);
      // fs.writeFile( `tabla-${t}.txt`, salida,(err)=>{
      //     if(err) throw err
      //     console.log(`tabla-${t}.txt creada papa`);
      // } )