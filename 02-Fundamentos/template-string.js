const nombre = 'Deadpool'
const real = 'Wade winston'

const normal = nombre + ' ' + real;
const tamplate = `${nombre} ${real}`

console.log(normal);
console.log(tamplate);

console.log(normal === tamplate); // true

const html = ` 
    <h1>Hola</h1>
    <p>Mundo</p>
`

console.log(html);