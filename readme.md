# Notas:
Este es mi 1er programa de Nodejs

se crea el archivo package.json
se utiliza el comando "npm init -Y" con sus valores por defecto
para este ejemplo solo se ejecuto inicialmente el comando "npm init" y trabajarlo mnualmente
se dejo como nombre del package.json el nombre de la carpeta del proyecto "paso-por-parametros-packagejson"
se cambio la version por defecto v1.0.0 del `standar semantic versioning` por v0.0.1 (version mayor-adiciones-bugfixes)
se utiliza el paquete YARGS para enviar parametros desde la consola pero este esta en un archivo yargs del directorio config que es importado a la app 
 
```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -b, --base     Es la Base de la Tabla De Multiplicar       [number] [required]
  -h, --hasta    Es el Limite hasta donde se mostrara la Tabla de Multiplicar   [number] [required]
  -l, --listar   Muestra la Tabla De Multiplicar En Consola  [boolean] [required] [default: false]

```