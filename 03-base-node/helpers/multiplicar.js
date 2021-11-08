const fs = require('fs')



const crearTabla = async(base = 5) => {
    try{
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
            
          return `tabla-${base}.txt`;

    }
    catch(error){
        throw error;
    }
}

module.exports = {
    // crearTabla: crearTabla
    crearTabla
}