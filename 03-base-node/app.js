// print 
const fs = require('fs');//fs = file system
let t = 3;
let salida = ''

console.clear()
console.log('------------');
console.log(`tabla del ${t}`)
console.log('------------');

for(let i = 0; i <= 10; i++ ){
  let total = i * t;
  salida += `${t} + ${i} = ${total}\n`;
}
console.log(salida);

// console.log(salida);
fs.writeFile( `tabla-${t}.txt`, salida,(err)=>{
    if(err) throw err
    console.log(`tabla-${t}.txt creada papa`);
} )
