const fs = require("fs");

const promesaCrearArchivoArg = (base = 5, listar = false, hasta = 10) => {
    return new Promise((resolve, reject) => {
      let salida = "";
      for (let index = 0; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base*index} \n`;
      }
      
      if (listar) {
        console.log("\nLa salida se grabara de esta manera:");
        console.log(salida);
      } else {
        console.log("\nEl archivo se generara con la base:",base);
      }
  
      fs.writeFile(`./salida/abla-del-${base}.txt`, salida, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(`\ntabla-del-${base}.txt`);
        }
      });
    });
  };
  
  module.exports = {
    promesaCrearArchivoArg,
  };
  