Notas de Angular
----------------

Para el cliente Angular tendremos las siguientes carpetas:

1. *app/components*: En ella crearemos todos los componente. Cuando nos referimos a componentes hablamos de las distintas partes de la aplicacion. Por ejemplo si tenemos un ABM de clientes y otro de proveedores. Ahi tendremos dos componentes.

2. *app/Models*: En app models vamosaguardar las interfaces de los modelos de datos que usaremos. De neuvo por cada tabla con la cual vallamos a hablar de la base de datos deberemos definir una << Interface >> la cual tendra la estructura de datos.

3. *app/services*: En la carpeta de servicios consruiremos el servicio que explotara el API REST del servidor node.js. Tener en cuenta que en el services.ts se importa el modelo creado en la carpeta app.models.Si tenemos un solo servidor API habra un solo archivo de Services.

4. *app/app-routing.module.ts*: En este archivo se configuran los ruteos del servidor angular.

5. *app/component.html*: es nuestro componente principal desde alli llamamos a todos lso otros componentes. Enel aparece el componente << app-route>>. Sin ese componente los ruteos no funcionarian

6. *index.html*: Es el index.html del proyecto, en el se llama al componente  principal <app-root>. En el podemos poner los estilos generales de la aplicacion. Aunque tambuen tenemos *Styles.css*

7. En el componente de navegacion en el tag <a> en vez de usar *href* usamos *routerLink*  https://angular.io/api/router/RouterLink. Juntoconesta utilizamos la propiedad *routerLinkActive* para que cuando selecciono una opcion me la coloree.

8. Atencion a los estilos, no usamos bootstrap usamos este que es una libreria de temas aplicados bootstrap <link  rel="stylesheet"  href="https://bootswatch.com/4/lux/bootstrap.min.css"> se puede consultar en http://bootswatch.com

9. CDN de Awesome <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">




