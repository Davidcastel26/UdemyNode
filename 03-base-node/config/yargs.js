const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type:'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('l',{
            alias: 'lista',
            type:'boolean',
            // demandOption: true,
            default: false,
            describe: 'muestra la tabla en consola'
        })
        .option('h',{
            alias: 'hasta',
            type:'number',
            demandOption: true,
            description:'limite de la multiplicacion'
        })
        .check((argv, options)=>{
           if(isNaN( argv.base) ){
             throw ('la base tiene que ser un numbero');
            }
            return true;
        }) 
        .argv;

module.exports = argv;