const { crearArchivo } = require('./multiplicar/multiplicar.js');

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];


crearArchivo(base)
    .then( archivo => {
        console.log(`Archivo ${archivo} Creado`)
    })
    .catch( err => {
        console.log(err);
    });
 