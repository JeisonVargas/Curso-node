# Sistema Operativo y Sistema de archivos

- so: Sirve para consultar y manejar los recursos del sistema operativo.
- fs: Sirve para administrar (copiar, crear, borrar, etc.) archivos y directorios.

Los métodos contenidos en estos módulos (y en todo Node.js) funcionan de forma asíncrona por default, pero también se pueden ejecutar de forma síncrona, por ejemplo el método readFile() tiene su versión síncrona readFileSync().

1. [Os](https://github.com/JeisonVargas/Curso-node/blob/master/4_os-archivos/1_os.js)
Muestra algunos ejemplos de los datos que podemos obtener del sistema operativo.
2. [Sync files](https://github.com/JeisonVargas/Curso-node/blob/master/4_os-archivos/2_sync-files.js)
Leemos un archivo .txt y calculamos la cantidad de lineas del archivo de forma síncrona.
3. [Async files](https://github.com/JeisonVargas/Curso-node/blob/master/4_os-archivos/3_async-files.js)
Lee el mismo archivo .txt y calcula la cantidad de lineas del archivo de forma asíncrona.
4. [readdir](https://github.com/JeisonVargas/Curso-node/blob/master/4_os-archivos/4_readdir.js)
Muestra qué archivos se encuentran dentro de una carpeta.
5. [mkdir](https://github.com/JeisonVargas/Curso-node/blob/master/4_os-archivos/5_mkdir.js)
Permite crear directorios. { recursive: true } para que permita crear multiples directorios.
6. [copy](https://github.com/JeisonVargas/Curso-node/blob/master/4_os-archivos/6_copy.js)
Permite copiar archivos.