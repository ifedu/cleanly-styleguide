## 15/06/2015 v.0.1.1
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