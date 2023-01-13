
const {promesaCrearArchivoArg} = require('./helpers/promesa-multiplicar-argumentos');
const argv = require('./config-yargs/yargs');

console.clear();
promesaCrearArchivoArg(argv.b, argv.l, argv.h)
     .then(nombreArchivo => console.log(nombreArchivo, 'Creado\n'))
     .catch( err => console.log(err));

