This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalacion del front React

Para correr el proyecto en nuestro pc, clonamos el Proyecto con el algún nombre que nos acomode o sin esta, teniendo en cuenta que ese nombre tendrá la carpeta principal del proyecto, en mi caso sera "back" para el back api Laravel y "fron" para el Front de React.

## El Front
para ello nos vamos a la consola, en nuestro caso la de git.

Para la creacion de la carpeta. (la misma donde esta el back),
Si no ha sido creada ejecutamos:

```bach
mkdir app
```
nos movemos dentro de app con:

```bach
cd app/
```

Teniendo en cuanta que es un back y un front, podemos crear una sub-carpeta (aparte de la del back) donde clonaremos el proyecto de que seria nuestro front.

```bash
git clone https://github.com/eduardo19940331/ApiCrud.git front
```
Esto empezara a descargar todos los paquetes de nuestro repositorio al local, en la carpeta front, cuando este proceso termine...

nos movemos dentro de la carpeta front con:

```bash
cd front/
```

Ejecutamos el siguiente comando, esto nos instalará todos los módulos listados como dependencias en package.json.

### `npm install`

Nos creara una directorio adicional en el repositorio llamado node_modules.

Ahora solo nos queda iniciar el proyecto con:

### `npm start`

abramos nuestro navegador e ingresamos la siguiente URL [http://localhost:3000](http://localhost:3000)

Estaria nuestra app funcionando si esta el servidor del back habilitado