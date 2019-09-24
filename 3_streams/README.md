# Streams
Los Streams son una colección de datos como los arrays o strings sólo que se van procesando pedazo por pedazo, esta capacidad los hace muy poderosos porque podemos manejar una gran cantidad de datos de manera óptima. Sin ocupar el espacio de la memoria.

1. [Big file](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/1_big-file.js)
Crea un archivo ./big con mucho texto.
2. [File server](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/2_file-server.js)
Lee el archivo ./big pero ocupa mucho espacio de memoria.
3. [Stream server](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/3_stream-server.js)
Lee el mismo archivo ./big pero no ocupa espacio de memoria gracias al uso de streams
4. [Writable stream](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/4_writable-stream.js)
Ejemplo de uso de Writable: Muestra en la terminal lo mismo que ingresa.
5. [Readable stream](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/5_readable-stream.js)
Ejemplo de uso de Readable: Muestra en la terminal Nan Nan Batman!
6. [Readable stream on demand](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/6_readable-stream-on-demand.js)
Muestra las letras del abecedario.
7. [Duplex](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/7_duplex.js)
Implementa los métodos write y read a la vez. Ejemplo muestra las letras del abecedario.
8. [Transform](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/8_transform.js)
Es similar a Duplex pero con una sintaxis más corta. Ejemplo recibe una cadena de texto y la regresa en  mayusculas.
9. [CamelCase](https://github.com/JeisonVargas/Curso-node/blob/master/3_streams/9_camel-case.js)
RETO: recibe una cadena de texto y la regresa en formato CamelCase.

## Readable
### Eventos
- data. Se dispara cuando recibe datos.
- end. Se dispara cuando termina de recibir datos.
- error. Se dispara cuando hay un error.

### Funciones
- pipe
- unpipe
- read
- push

## Writeable:
### Eventos
- drain. Se dispara cuando emite datos.
- finish. Se dispara cuando termina de emitir.
- error. Se dispara cuando hay un error.

### Funciones
- write
- end

Recuerda que tienen estos eventos porque los heredan de la clase EventEmitter.

