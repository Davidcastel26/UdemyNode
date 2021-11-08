const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type:'number',
            demandOption: true
        })
        .option('l',{
            alias: 'lista',
            type:'boolean',
            demandOption: true,
            default: false,
        })
        .check((argv, options)=>{
           if(isNaN( argv.base) ){
             throw ('la base tiene que ser un numbero');
            }
            return true;
        }) 
        .argv;