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