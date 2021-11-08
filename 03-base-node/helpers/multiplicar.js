const fs = require('fs')

const crearTabla = (base = 5) => {

    console.log('------------');
    console.log('tabla del ', base)
    console.log('------------');

    let salida = ''

    for(let i = 0; i <= 10; i++ ){
        let total = i * base;
        salida += `${base} + ${i} = ${total}\n`;
      }
      console.log(salida);
      
     
      
      fs.writeFileSync( `tabla-${base}.txt`, salida);
        
      console.log(`tabla-${base}.txt creada`);
}

module.exports = {
    // crearTabla: crearTabla
    crearTabla
}