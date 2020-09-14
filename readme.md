INSTALACION SERVIDOR NODE.JS CON CONEXION A MYSQL
-------------------------------------------------

link: https://www.youtube.com/watch?v=lxYB79ANJM8&t=36s

1. Creamos un directorio y dentro de el una carpeta SERVER
2. Corremos el comando npm init --yes para crear el archivo  packlage.json
3. Instalamos las librerias que necesitaremos:
    - express.js        npm i express
    - morgan.js         npm i morgan
    - promise-mysql     npm i promise-mysql ( ver que hay una version que da error instalar npm i promise-mysql@3.3.1)
    - cors              npm i cors
4. Corremos desde una terminal tsc -w moviendonos previamente a server/src para activa el monitoreo de cambios de typescript
5. Corremos npm run dev para activar el servidor y que automaticamente se generen los JS gracias a "nodemon".

Promesa: 
--------
Es un objeto que representa un valor que no sabemo ssi estara disponible. Entonces todos los desencadenantes de ese valor habra que postponerlo hasta que ese valor este disponible. Javascript permite manejar esas asincronias. Una vez que la promesa termina ejecuta su codigo. Cuando la promesa vuelve javascript vuelve a tomar ese hilo y continua. Luego al terminal vuelve al hilo principal·
Son utiles porque nos permiten manejar la asincronia.

https://www.youtube.com/watch?v=FK5-YW_-Gc0

JSON Web Tockens
----------------

https://jwt.io/introduction/


Cliente Angular
---------------

1. Parado en la carpeta raiz corremos ng new client --routing ( ponemos routing para que ns permita cargar las rutas)
2. Creamos a travez de << ng g c >> tres conroladodores
3. Generamos una carpeta para Modelos con un archivo Games.ts dentro
4. Generamos a travez de << ng g s services/games>> un servicio
5. Al correr el proyecto dio un error porque no estaba instalada la libreria de rutas. Debemos instalar <<npm i @angular/router >>


