const fs = require('fs')

const crearTabla = (base = 5) => {

    console.log('------------');
    console.log('tabla del ', base)
    console.log('------------');

    let salida = ''

    for(let i = 0; i <= 10; i++ ){
        let total = i * t;
        salida += `${t} + ${i} = ${total}\n`;
      }
      console.log(salida);
      
     
      
      fs.writeFileSync( `tabla-${t}.txt`, salida);
        
      console.log(`tabla-${t}.txt creada`);
}

module.exports = {
    crearArch: crearTabla
}