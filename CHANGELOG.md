## 11/04/2016 v.0.4.1
    - Usa gulp.watch de forma asíncrona reduciendo el tiempo de compilados.

## 13/09/2015 v.0.4.0
    - Actualizados los ficheros config.js y public.js a ES6, eliminadas las tareas que permitian usar babeljs en las tareas de dev/server-tasks compilando y leyendo posteriormente
    - config.js movido al raíz del proyecto
    - dev/server.js a server.js
    - Eliminado bower, ahora las dependencias de front están fijas en la carpeta vendor de dev
    - Eliminada la tarea de la guía
    - Eliminada la carpeta apps, mixins sacados al raíz de public
    - Eliminadas todas las tareas de compilado de ES6 a ES5 en la parte de Node.js
    - Eliminado addDependencies, addDependencies-dist y por tanto módulo wiredep de npm, y el mixin script-min
    - ficheros en dev/public pasados a dev
    - server-tasks-es5 pasa a tasks, las tareas de dev/server-tasks pasan a tasks 
    - Uso de ES6 en Node.js
    - Watch aplica para todos los styls
    - README
        - Eliminado Bower
        - Eliminada tarea para la guía
        - Requisito Node.js 4.0 o superior

## 12/07/2015 v.0.3.0
    - Actualizado el readme con las distintas tareas disponibles y su funcionalidad
    - Eliminado guide.js y sus tareas
    - Eliminado livereload en server dist
    - Fichero server-tasks/tasks.js donde vienen todas las llamadas que cada tarea hace a las que son compiladas posteriormente
    - Ficheros guide.jade y _guide.js pasan a dev/public
    - jsonData pasa a ser una propiedad de $ para estar global
    - Karma ya no rompe al hacer callback en la última versión
    - La guía ahora se comporta como los demás ficheros, a excepción de que la tarea dist la ignora
    - Livereload funciona con todos los ficheros incluidos los _*.js
    - Refactorizado el .data de las tareas jade
    - Tarea addDependencies añade las librerías de bower a cualquier html y no sólo al index
    - Tarea analysis cambiada a analize
    - Tarea dist comprime todos los js y no sólo all.js
    - Tarea dist borra todas las carpetas y ficheros que empiecen por _
    - Tarea guide abre index.html y guide.html
    - Tarea styles compila todos los ficheros menos los que empiecen por _ en lugar de sólo main

## 08/07/2015 v.0.2.0
    - Actualizadas librerías de bower, actualizado a angular 1.4.2
    - Actualizadas librerías de npm, añadida extend(rompía la aplicación su ausencia) y eliminadas algunas en desuso
    - Al compilar se ignoran carpetas y ficheros que empiecen por _
    - Bootstrap deja de copiarse a vendor puesto que ya se usaba en main.css
    - Carpeta raíz server-tasks renombrada a server-tasks-es5
    - Fichero config.js movido a server-tasks-es5
    - Los ficheros  *.data.js usados para variables de Jade pasan a _*.js y ahora extienden un objeto global en lugar de tener uno nuevo por fichero.
    - Servicio lazy.js ya no falla al minificarse
    - Tarea y fichero stylus renombrado a styles para facilitar transición a sass o less
    - Todas las carpetas(a excepción de node_modules) generadas empiezan por _

## 07/07/2015 v.0.1.2
    - Unifica codigo de servers
    - Usa la tarea watch para el livereload

## 15/06/2015 v.0.1.1
    - Arreglos en las descripciones de bower.json y package.json
    - Documentado los requisitos para poder iniciar

## 11/06/2015 v.0.1.0
    - Añadido a .gitignore public-dist/ y analysis/
    - Browserify para los tests
    - El watch en la tarea jade compila sólo el fichero afectado en lugar de todos
    - Genera correctamente la guía con gulp guide
    - La tarea de distribución gulp dist ahora usa uglify para comprimir los ficheros y borra los que se usan en el index en favor de all.js
    - Livereload para el watch cuando lancemos gulp run
    - Mixin script-min usado en el index para poder hacer gulp dist
    - Por defecto gulp test ahora usa Phantom en lugar de Chrome
    - Redireccionamiento de llamadas a una api externa
    - Tarea gulp analysis para evaluar complejidad del código JavaScript con platojs
    - Template cache busca las directivas dentro de deploy en lugar de dev
    - Todos los ficheros de la guía ahora están en la carpeta guide 
    - Ya se puede usar ES6 en los *.data.js