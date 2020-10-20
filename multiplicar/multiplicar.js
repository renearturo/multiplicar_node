// requires 
const fs = require('fs');


let crearArchivo = (base) => {

    return new Promise((resolve, rejects) =>{

        if ( !Number(base) ){
            rejects('El valor ingresado no es un número.');
            return;
        }
        let data = '';

        for ( let i = 1; i <= 10; i++)
        {
            data += `${base} * ${i} = ${base * i}`;
            data += `\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {          
            if (err){
                rejects(err)
            }else{
                resolve(`tabla-${base}.txt`)
            }
        });
    
    });
    
}

module.exports = {
    crearArchivo
}