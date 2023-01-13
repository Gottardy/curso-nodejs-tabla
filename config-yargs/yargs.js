const argv = require('yargs')
               .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    description: 'Es la Base de la Tabla De Multiplicar ',
               })
               .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    description: 'Es el Limite hasta donde se mostrara la Tabla de Multiplicar ',
               })
               .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    description: 'Muestra la Tabla De Multiplicar En Consola',
               })
               .check( (argv, options)=>{
                    if (isNaN(argv.b)) {
                         throw 'El argumento -b o --base debe ser un numero'
                    } else {
                         return true;
                    }

               })
               .argv;

module.exports = argv;