# Express.js

Express.js es un framework para crear Web Apps, Web APIs o cualquier tipo de Web Services, es libre bajo la licencia MIT. Express es muy liviano y minimalista además de ser extensible a través de Middlewares. Los Middlewares interceptan el request y el response para ejecutar una acción en medio.

## Características

- Minimalista
- Template engines
- Routing
- Middlewares
- Plugins

## Primeros pasos

### package.json
En la terminal ejecutamos npm init -y para crear el archivo package.json (la bandera -y significa yes para toda la configuración)
Modificamos los scripts para desarrollo (dev) y producción (start).
En "dev" definimos la variable "DEBUG=app:*" imprime todo lo que tenga el namespace de la aplicación y 'nodemon index' que permite el refresh automático cada vez que se realice un cambio.
En "start" definimos "NODE_ENV=production" que se encuentra en producción y "node index" ejecutamos el servidor con node.

### .eslintrc.json
Configuración de eslint con prettier

### .prettier
"tabWidth" espacio del tab 2
"semi" tener punto y como 
"singleQuote" usar singleQuote en vez de dobles

### instalar dependencias
npm i express dotenv 

### instalar utilidades solo para desarrollo
npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier

### instalar hook 
Para que cada vez que se haga un commit se formateé el código antes de subirlo al repositorio
npx mrm lint-staged
