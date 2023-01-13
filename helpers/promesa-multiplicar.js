const fs = require("fs");

const promesaCrearArchivo = (base = 5) => {
    return new Promise((resolve, reject) => {
      let salida = "";
      for (let index = 0; index <= 10; index++) {
        salida += `${base} x ${index} = ${base*index} \n`;
      }
      console.log("\nLa salida se grabara de esta manera:");
      console.log(salida);
  
      fs.writeFile(`tabla-del-${base}.txt`, salida, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(`tabla-del-${base}.txt`);
        }
      });
    });
  };
  
  module.exports = {
    promesaCrearArchivo,
  };
  