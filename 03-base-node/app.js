// print 
// const fs = require('fs');//fs = file system
const { crearTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors')

console.clear()
//node app --base=2 into the comant line
// console.log(process.argv);
// console.log(argv); //{ _: [], base: 2, '$0': 'app' }

console.log('base: yargs', argv.b, argv.h); //base: yargs 2

// ----------- CONSOLE LOG FROM THE TOTAL BT -----------
// console.log(`tabla del ${t}`)


// ------ CONSOLE LOG FRON THE ARGV ----------------------
// console.log(process.argv); //thge console will give us this array[
//'C:\\Program Files\\nodejs\\node.exe',
//'C:\\Users\\ingac\\Documents\\progra\\UdemyNode\\03-base-node\\app',
//'--base=9'
// ]

//-------------- TAKING THE ARGV FRON THE NODE FS --------------
// const [,,argument3= 'base=5'] = process.argv
// const [,base = 1] = argument3.split('=')
// console.log(argument3); //. --base=1
// console.log(base); // 1
// let t = 4;

//---------- CREATE TABLE -----------------------
crearTabla(argv.b, argv.l, argv.h)
  .then( nombreArchi => console.log(nombreArchi.rainbow, 'creado'))
  .catch(err => console.log(err))



// ---------- PROMISE ----------------------------
// console.log(salida);
  // fs.writeFile( `tabla-${t}.txt`, salida,(err)=>{
  //     if(err) throw err
  //     console.log(`tabla-${t}.txt creada papa`);
  // } )