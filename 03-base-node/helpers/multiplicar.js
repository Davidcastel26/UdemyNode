const fs = require('fs')



const crearTabla = async(base = 5, listar= false) => {
    try{
            
        let salida = ''
    
        for(let i = 0; i <= 10; i++ ){
            let total = i * base;
            salida += `${base} + ${i} = ${total}\n`;
        }

        if( listar ){
          console.log('------------');
          console.log('tabla del ', base)
          console.log('------------');
          console.log(salida);
        }
         
          
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