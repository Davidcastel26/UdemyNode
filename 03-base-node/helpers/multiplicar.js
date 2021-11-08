const fs = require('fs')
const colors = require('colors')


const crearTabla = async(base = 5, listar= false, hasta = 1) => {
    try{
            
        let salida = ''
        let consola = ''

    
        for(let i = 0; i <= hasta; i++ ){
            let total = i * base;
            salida += `${base} X ${i} = ${total}\n`;
            consola += `${base} ${'x'.magenta} ${i} ${'='.green} ${total}\n`;
        
        }

        if( listar ){
          console.log('------------'.yellow);
          console.log('tabla del '.cyan, colors.blue(base))
          console.log('------------'.yellow);
          console.log(salida);
        }
         
          
          fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
            
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