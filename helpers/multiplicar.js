const fs = require("fs");

const crearArchivo = (base = 5) => {
  let salida = "";
  for (let index = 0; index <= 10; index++) {
    salida += `${base} x ${index} = ${base*index} \n`;
  }
  console.log("\nLa salida se grabara de esta manera:");
  console.log(salida);

  fs.writeFile(`tabla-del-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log("\nArchivo creado correctamente", `tabla-del-${base}.txt`);
  });
};

module.exports = {
  crearArchivo,
};
