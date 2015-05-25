# styleguide-web
# Plantilla para iniciación de un proyecto. 
# Guía de estilos para Jade, Stylus, JS(ES6)

## Indice
  1. [Inicio](#inicio)
  1. [Árbol de directorios](#arbol-de-directorios)
  1. [Jade](#jade)
  1. [Stylus](#stylus)
  1. [JS](#js-es6)
  1. [Tipos](#tipos)
  1. [Variables](#variables)
  1. [Objetos](#objetos)
  1. [Propiedades](#propiedades)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Constructores](#constructores)
  1. [Modulos](#modulos)
  1. [Iteradores y constructores](#iteradores-y-constructores)
  1. [Hoisting](#hoisting)
  1. [Operadores de comparación e igualdad](#Operadores-de-comparacion-e-igualdad)
  1. [Bloques](#bloques)
  1. [Comentarios](#comentarios)
  1. [Espacios](#espacios)
  1. [Comas](#comas)
  1. [Punto y coma](#punto-y-coma)
  1. [Type Casting & Coercion](#type-casting--coercion)
  1. [Naming Conventions](#naming-conventions)
  1. [Accessors](#accessors)
  1. [Eventos](#eventos)
  1. [jQuery](#jquery)
  1. [Rendimiento](#rendimiento)
  1. [Recursos](#recursos)
  1. [Guías de estilos](#guia-de-estilos-de-javascript)

## Inicio

### Basada en las guías de estilos:
    - http://devguides.clock.co.uk/
    - http://google-styleguide.googlecode.com
    - https://github.com/airbnb/javascript/blob/master/README.md

### Librerías usadas
    - Gulp
        - Automatizador de tareas
        - BabelJs
            - Compila JS con sintaxis EcmaScript6 a EcmaScript5
        - Gulp-jade
            - Compila Jade a HTML
        - Gulp-Stylus
            - Compila Stylus a CSS
    - Express 4
        - Servidor en NodeJs
    - Mongodb
        - Base de datos no relacional

### Tareas de gulp
    - gulp run
        - Compila el proyecto en /dev y lo lanza
    - gulp guide
        - Compila el proyecyo y la guía en /dev y /guide y lanza la guía
    - gulp test
        - Compila el proyecto y lanza los test unitarios
    - gulp dist
        - Minifica el proyecto en /dist y lo lanza

**[Indice](#indice)**

### Árbol de directorios

  - Usa el mismo nombre para todos los archivos del mismo tipo, que dependa la carpeta su identificación:
    > ¿Por qué? Ya van a estar en carpetas diferentes sólo háríamos redundancia, de esta forma enseguida se sabe que son los archivos que contiene la carpeta, ides como sublime text te permiten buscar por carpeta y fichero.

```javascript
// MAL
app/
    app.module.js
    app.config.js
    app.routes.js
    components/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    layout/
        shell.html
        shell.controller.js
        topnav.html
        topnav.controller.js
    people/
        attendees.html
        attendees.controller.js
        speakers.html
        speakers.controller.js
        speaker-detail.html
        speaker-detail.controller.js
    services/
        data.service.js
        localstorage.service.js
        logger.service.js
        spinner.service.js
    sessions/
        sessions.html
        sessions.controller.js
        session-detail.html
        session-detail.controller.js

// MAL
app/
    app.module.js
    app.config.js
    app.routes.js
    controllers/
        attendees.js
        session-detail.js
        sessions.js
        shell.js
        speakers.js
        speaker-detail.js
        topnav.js
    directives/
        calendar.directive.js
        calendar.directive.html
        user-profile.directive.js
        user-profile.directive.html
    services/
        dataservice.j
        localstorage.js
        logger.js
        spinner.js
    views/
        attendees.html
        session-detail.html
        sessions.html
        shell.html
        speakers.html
        speaker-detail.html
        topnav.html

// BIEN

app/
    config.js
    module.js
    routes.js
    components/
        calendar/
            directive.js
            main.jade
        user-profile/
            directive.js
            main.jade
    layout/
        shell/
            ctrl.js
            main.jade
        topnav/
            main.jade
            ctrl.js
    people/
        attendees/
            ctrl.js
            main.jade
        speakers/
            ctrl.js
            main.jade
        speaker-detail/
            ctrlr.js
            main.jade
    services/
        data.js
        localstorage.js
        logger.js
        spinner.js
    sessions/
        sessions/
            ctrl.js
            main.jade
        session-detail/
            ctrl.js
            main.jade

```

### *General*
- 4 Espacios de tabulación, tabulación como espacios no con la tecla TAB
  > ¿Por qué? Ayuda a que el código se vea más claro, normalmente los monitores son panorámicos y sobra mucho espacio y si se escribe código limpio y claro no deberíamos tener mucho anidamiento, por lo que es más fácil de seguir un código tabulado en 4 que en 2

```javascript
// MAL
function() {
∙∙const name
}

// BIEN
function() {
∙∙∙∙const name
}
```

- Comillas simples
  > ¿Por qué? Son más claras y se escriben antes

- Comentarios en mayúsculas
  > ¿Por qué? Ayuda a indentificarlos y separarlos visualmente del resto del código

```js
// MAL
let persona = {
  nombre: "Edu"
}

// BIEN
let persona = {
    nombre: 'Edu'
}
```

**[Indice](#indice)**

## Jade
- Elemento con varios atributos: Si son varios se escribe un atributo en cada línea sin , de separación y ordenados alfabéticamente.
  > ¿Por qué? Ayuda a localizar de un vistazo los atributos, no poner ',' lo hace más fiel a la sintaxis html y fácil de ordenar para evitar tener repetidos así como localizarlos más fácilmente

- div omitido si hay class.
  > ¿Por qué? No aporta nada ponerlos

- Usar la sintaxis . para class en vez de escribirlo como atributo.
  > ¿Por qué? Es más fiel a la sintaxis de css y ayuda a diferenciarse de los atributos

- Escribir el texto seguido a la etiqueta.
  > ¿Por qué? Es más natural y fácil de seguir que ponerlo en nueva línea con |

- Escribir los comentarios como //-.
  > ¿Por qué? Al compilar no estarán en el html

- Clases antes de los atributos.
  > ¿Por qué? Hace más fácil la lectura al ser localizada la clase fácilmente

```html
//-MAL
div.container
    div(class='lolo')
        input(class='myInput' type='text' value='valor')
    header(class='main-header')
        a(href='/')
            | Project Title

//-BIEN
.container
    .lolo
        input.myInput(
            type='text'
            value='valor'
        )
    header.main-header
        a(href='/') Project Title
```

- Las variables se pondrán con el igual cuando estén solas y con #{variable} cuando estén junto con texto.
  > ¿Por qué? Porque es más natural no ponerlas entre '' pero es mejor ponerlas entre '' a concatenarlas para la lectura

```html
//-MAL
h1 #{title}
a(href='#{link}')
h1 Welcome to #{title}.

//-BIEN
h1=title
a(href=link)
h1 Welcome to #{title}.
```

- Seguir la guía de js cuando aplique para jade (var, if, mixins).
  > ¿Por qué? Ayuda a legibilidad seguir estandarización del código

- No usar - delante de sentencias de condicionales(if, case, each).
  > ¿Por qué? Es más fiel a la sintaxis de JS y nos quitamos carácteres innecesarios

```html
//-MAL
- each i in [1,2,3]
- if (foo == bar)
+baz(a,b,c)

//-BIEN
each i in [1, 2, 3]
if foo === bar
+baz(a, b, c)
```

- No tener jade duplicado.
  > ¿Por qué? Hace el código más mantenible y legible

```html
//-MAL
if (selected)
    option(value=value, selected='selected')= name
else
    option(value=value)= name

//-BIEN
option(
    selected=selected
    value=value
)= name
```

**[Indice](#indice)**

## Stylus
- Seguir la nomenclatura de Stylus.
  > ¿Por qué? Es clara y limpia enfocándose más en el código

- Línea en blanco de separación entre grupos de propiedades.
  > ¿Por qué? Hace más fácil su seguimiento

- Propiedades ordenadas alfabéticamente siempre que no afecte al resultado.
  > ¿Por qué? Ayuda a localizar fácilmente las propiedades así como a o repetirlas

- Usa nombres de clases identificativos y separados con -.
  > ¿Por qué? Ayuda a claridad y sigue la misma nomenclatura que los atributos de html

- Usa clases en vez de ids.
  > ¿Por qué? Las clases pueden ser reutilizables

```css
// MAL
.class1, .class2 {
    position: relative;
    color: blue;
}

.class1:hover, .class2:hover {
    color: red;
}

// BIEN
.paragraph-left
.paragraph-right
    color blue
    position relative

    &:hover
        color red
```

**[Indice](#indice)**

## JS ES6
- Espacios para separar -> = : { ( && || > = < y siguiente atributo.
  > ¿Por qué? Hace más fácil su identificación a la hora d edesarrollar, mientras que para el despliegue del proyecto ya usaremos tareas de minificación.

- No usar ;.
  > ¿Por qué? Al usar babeljs ya nos los pondrá en el resultado final, mientras que a la hora de desarrollar esto permitirá que nuestro código sea más legible.

- Usa const o let en lugar de var
  > ¿Por qué? Ambas declaraciones no son hoisting como var, ayudando a seguir el orden lógico del código, su ámbito es a nivel de bloque y no de función, const evita que puedas cambiar el valor de una variable ayudando a evitar situaciones indesperadas.

- Define en mayúsculas los nombres de las variables primitivas que se declaran con const, todas las demás con camelcase.
  > ¿Por qué? Esa una buena práctica para identificarlas, mientras que para objetos y para funciones esto permitirá que no los sobreescribamos por error.

- Si una función tiene sólo un return, y no es un objeto lo que devuelve, se escribe en una línea usando arrow y omitiendo las llaves y el return
  > ¿Por qué? Una vez te acostumbras se ve más claro y mantenible

```javascript
// MAL
var nombre = 'Edu'

saludar(nombre)

function saludar (nombre) {
    return 'Hola ' + nombre
}

// BIEN
const NOMBRE = 'Edu'

const saludar = (nombre) => 'Hola ' + nombre

saludar(NOMBRE)
```

- Declaración de variables una por línea precedida de const o let.
  > ¿Por qué? Facilita su ordenación y mantenimiento si hay que borrar o añadir alguna variable, ayuda a no confundirse con objetos cuando tenemos muchas declaraciones.

- Ordenamiento alfabético siempre que sea posible tanto para variables como para propiedades.
  > ¿Por qué? Facilita ver si algo está repetido, ayuda a que todo el código del sitio tenga el mismo orden facilitando su comprensión y lectura.

```javascript
// MAL
const nombre = 'Edu',
    apellido = 'Pérez',
    edad = 31,
    lugar = {
        pais: 'España',
        ciudad: 'Madrid',
        comunidad: 'Madrid'
    },
    cara = {
        ojos: 'marrones',
        pelo: 'negro'
    }

console.log(lugar.pais)

// BIEN
const apellido = 'Pérez'
const edad = 31
const nombre = 'Edu'

const lugar = {
    ciudad: 'Madrid',
    comunidad: 'Madrid'
    pais: 'España',
}

const cara = {
    ojos: 'marrones',
    pelo: 'negro'
}

console.log(lugar.pais)

```

- Todas las funciones se declararán con `const` y como expresión de función.
  > ¿Por qué? Hace que las declaraciones sigan el orden lógico al no ser hoisting y que no puedan ser sobreescritas por error

- Todas las expresiones de función serán con la sintaxis => en vez de function excepto cuando queramos una nueva referencia a this
  > ¿Por qué? Es más compacta y fácil su lectura y ayuda a dar un seguimiento real a this, lo cual es especialmente útil para los controladores de angularjs.

- Línea en blanco de separación para separar grupos, condicionales, funciones.
  > ¿Por qué? Facilita su localización y lectura

- Para métodos encadenados ponlos en nueva línea empezando por . y sin tabulación extra, sí es sólo un método escribirlo en la misma línea.
  > ¿Por qué? Ayuda para que no se ve aun salto con de taulación con el siguiente bloque, especialmente útil si hay una función en el método para que las llaves de cierre no queden con un salto, haciendo mejor su seguimiento.

```javascript
// MAL
init()

function init() {
    getData.get((data) => {
            //CODE
        })
        .then(() => {
            //CODE
        })

    return 'inicio'
}

// BIEN
const init = () => {
    getData
    .get((data) => {
        //CODE
    })
    .then(() => {
        //CODE
    })

    return 'inicio'
}

// MAL
$('#items').find('.selected').highlight().end().find('.open').updateCount()

// MAL
$('#items').
    find('.selected').
        highlight().
        end().
    find('.open').
        updateCount()

// BIEN
$('#items')
.find('.selected')
.highlight()
.end()
.find('.open')
.updateCount()

// MAL
$('#items')
.find('.selected')

// BIEN
$('#items').find('.selected')

// MAL
const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
    .attr('width', (radius + margin) * 2).append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led)

// BIEN
const leds = stage.selectAll('.led')
.data(data)
.enter().append('svg:svg')
.classed('led', true)
.attr('width', (radius + margin) * 2)
.append('svg:g')
.attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
.call(tron.led)
```


init()
```

- Declarar las variables y propiedades de un objeto sólo cuando y donde son necesarias, no declararlas todas arriba y luego asignarlas.
  > ¿Por qué? let y const no son hoisting, evita que una variable pueda ser declarada y no se use nunca, da un mejor seguimiento si queremos cambiar de nombre la variable o eliminarla, si el código está limpio sólo estamos añadiendo líneas de código innecesarias.

```javascript
// MAL
let apellido
let edad
let nombre

let lugar = {
    ciudad: '',
    comunidad: ''
    pais: '',
}

const cara = {
    ojos: '',
    pelo: ''
}

const asignar = (value) => value

apellido = asignar('Pérez')
edad = asignar(31)
nombre = asignar('Edu')

$.get((data) => {
    lugar = data.lugar

    cara.ojos = data.cara.ojos
    cara.pelo = data.cara.pelo
})

// BIEN
const asignar = (value) => value

const APELLIDO = asignar('Pérez')
const EDAD = asignar(31)
const NOMBRE = asignar('Edu')

let lugar

const cara = {}

$.get((data) => {
    lugar = data.lugar

    cara.ojos = data.cara.ojos
    cara.pelo = data.cara.pelo
})
```

**[Indice](#indice)**

## Tipos
- **Primitivos**: Trabajas sobre su valor.
    + `string`
    + `number`
    + `boolean`
    + `null`
    + `undefined`

```javascript
const FOO = 1
let bar = FOO

bar = 9

console.log(FOO, bar) // => 1, 9
```

- **Complejos**: Trabajas sobre su referencia.

    + `object`
    + `array`
    + `function`

```javascript
const foo = [1, 2]
const bar = foo

bar[0] = 9

console.log(foo[0], bar[0]) // => 9, 9
```

**[Indice](#indice)**

## Variables

  - Usa `const` para las variables, objetos y funciones que no se tengan que volver a asignar, usa `let` en los demás casos, nunca uses `var`.
  - Las variables primitivas declaradas con `const` estarán en mayúsculas.

  > ¿Por qué? Esto permite que no puedas cambiar el valor de la variable y que tengan `scope` de bloque, en lugar de `scope` de `function` como `var`.

    ```javascript
    // MAL
    var a = 1
    var b = 2

    // BIEN
    const A = 1
    const B = 2

    // MAL
    var count = 1

    if (true) {
        count += 1
    }

    // BIEN
    let count = 1

    if (true) {
        count += 1
    }

    // const y let sólo existen en los bloques que se definieron.
    {
        let a = 1
        const B = 1
    }
    console.log(a) // ReferenceError
    console.log(b) // ReferenceError
    ```

  - Siempre usa variables declaradas. No hacerlo hará que uses variables globales. Queremos evitar contaminar el `namespace` global.

    ```javascript
    // MAL
    superPower = new SuperPower()

    // BIEN
    const superPower = new SuperPower()
    ```

  - Usa una declaración por variable.

    > ¿Por qué? Es más fácil añadir nuevas variables de esta forma y ordenarlas. Evitas declarar una variable global por error.

    ```javascript
    // muy mal
    const DRAGONBALL = 'z',
        GOSPORTSTEAM = true
        ITEMS = getItems()

    // MAL
    const DRAGONBALL = 'z',
        GOSPORTSTEAM = true,
        items = getItems()

    // BIEN
    const DRAGONBALL = 'z'
    const GOSPORTSTEAM = true
    const ITEMS = getItems()
    ```

  - Agrupa todos tus `const`s y luego agrupa todos tus `let`s.

  > ¿Por qué? Ayuda a identificar mejor las variables.

    ```javascript
    // MAL
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true

    // MAL
    let i
    const ITEMS = getItems()
    let dragonball
    const GOSPORTSTEAM = true
    let len

    // good
    const GOSPORTSTEAM = true
    const ITEMS = getItems()

    let dragonball
    let i
    let length
    ```

  - Asigna variables cuando las necesites pero en un lugar razonable.

  > ¿Por qué? El alcance de `let` y `const` es a nivel de bloque y no de función.

    ```javascript
    // BIEN
    function() {
        test()

        console.log('doing stuff..')

        //..other stuff..
    
        const name = getName()
    
        if (name === 'test') {
            return false
        }
        
        return name
    }

    // MAL - llamada innecesaria a función
    function(hasName) {
        const name = getName()

        if (!hasName) {
            return false
        }

        this.setFirstName(name)

        return true
    }

    // BIEN
    function(hasName) {
        if (!hasName) {
            return false
        }
        
        const name = getName()

        this.setFirstName(name)
        
        return true
    }
    ```

**[Indice](#indice)**

## Objetos

- Usa la sintaxis literal para crearlo.

```javascript
// mal
const item = new Object()

// bien
const item = {}
```

- Usa `computed property names` cuando crees objetos con propiedades dinámicas.

```javascript
const getKey = (k) => `a key named ${k}`

// mal
const obj = {
    id: 5,
    name: 'San Francisco'
}

obj[getKey('enabled')] = true

// bien
const obj = {
    [getKey('enabled')]: true,

    id: 5,
    name: 'San Francisco'
}
```

- Usa el método abreviado para definir métodos.

```javascript
// mal
const atom = {
    value: 1,

    addValue: function (value) {
        return atom.value + value
    }
}

// bien
const atom = {
    value: 1,

    addValue(value) {
        return atom.value + value
    }
}
```

- Usa el método abreviado para definir propiedades.

  > ¿Por qué? Evitas redundancia.

```javascript
const lukeSkywalker = 'Luke Skywalker'

// mal
const obj = {
    lukeSkywalker: lukeSkywalker
}

// bien
const obj = {
    lukeSkywalker
}
```

- Agrupa las propiedades por grupos y alfabéticamente.

  > ¿Por qué? Hará más fácil su identificación.

```javascript
const anakinSkywalker = 'Anakin Skywalker'
const lukeSkywalker = 'Luke Skywalker'

// mal
const obj = {
    episodeOne: 1,
    twoJedisWalkIntoACantina: 2,
    lukeSkywalker,
    episodeThree: 3,
    mayTheFourth: 4,
    anakinSkywalker,
}

// bien
const obj = {
    anakinSkywalker,
    lukeSkywalker,

    episodeOne: 1,
    episodeThree: 3,
    mayTheFourth: 4,
    twoJedisWalkIntoACantina: 2
}
```

**[Indice](#indice)**

## Propiedades
  - Utilice la notación de puntos cuando acceda a las propiedades.

```javascript
const luke = {
    age: 28,
    jedi: true
}

// MAL
const isJedi = luke['jedi']

// BIEN
const isJedi = luke.jedi
```

  - Us la notación `[]` cuando accedas a una propiedad con una variable.

```javascript
const luke = {
    age: 28,
    jedi: true
}

const getProp = (prop) => luke[prop]

const isJedi = getProp('jedi')
```

**[Indice](#indice)**

## Arrays

- Usa la sintaxis literal para crearlo.

```javascript
// mal
const items = new Array()

// bien
const items = []
```

- usa array.push en lugar de asignar una posición nueva del Array.

```javascript
const someStack = []

// mal
someStack[someStack.length] = 'abracadabra'

// bien
someStack.push('abracadabra')
```

- Usa `...` para copiar arrays.

```javascript
// mal
const itemsCopy = []
const LEN = items.length

for (let i = 0; i < LEN; i++) {
    itemsCopy.push(items[i])
}

// bien
const itemsCopy = [...items]
```

- Para convertir un objeto en un `Array` usar `array.from`.

```javascript
const foo = document.querySelectorAll('.foo')
const nodes = Array.from(foo)
```

**[Indice](#indice)**

## Destructuring

- Úsalo para acceder y usar múltiples propiedades de un objeto.

```javascript
// mal
const getFullName = (user) => {
    const FIRSTNAME = user.firstName
    const LASTNAME = user.lastName

    return `${FIRSTNAME} ${LASTNAME}`
}

// bien
const getFullName = (obj) => {
    const {firstName, lastName} = obj

    return `${firstName} ${lastName}`
}

// mejor
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`
```

- Uso en Arrays.

```javascript
const arr = [1, 2, 3, 4]

// mal
const first = arr[0]
const second = arr[1]

// bien
const [first, second] = arr
```

- Para múltiples valores devueltos, usa `Destructuring de objetos`, no de arrays.

  > ¿Por qué? Puedes añadir nuevas propiedades o cambiar el orden sin alterar otras llamadas.

```javascript
// mal
function processInput(input) {
    return [
        left,
        right,
        top,
        bottom
    ]
}

// la llamada necesita pensar sobre el orden establecido
const [left, __, top] = processInput(input)

// bien
const processInput = (input) => {
    return {
        bottom
        left,
        right,
        top
    }
}

// la llamada sólo selecciona los datos que necesita
const {left, right} = processInput(input)
```

**[Indice](#indice)**

## Strings
- Usa comillas simples `''`.

```javascript
// mal
const name = "Capt. Janeway"

// bien
const name = 'Capt. Janeway'
```

- Usa multilínea con `` y ponlo en nueva línea con una tabulación.

```javascript
// mal
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.'

// mal
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.'

// mal
const errorMessage = 'This is a super long error that was thrown because ' +
'of Batman. When you stop to think about how Batman had anything to do ' +
'with this, you would get nowhere fast.'

// bien
const errorMessage =
    `This is a super long error that was thrown because
    of Batman. When you stop to think about how Batman had anything to do
    with this, you would get nowhere fast.`
```

- Usa plantillas de cadenas `template Strings` en lugar de concatenación.
  > ¿Por qué?. Da claridad a la lectura y permite multilínea

```javascript
// mal
const sayHi = (name) => 'How are you, ' + name + '?'

// mal
const sayHi = (name) => ['How are you, ', name, '?'].join()

// bien
const sayHi = (name) => `How are you, ${name}?`
```

**[Indice](#indice)**

## Functions
  - Usa `function expressions` siempre con `const` y la sintaxis `function arrow`
  - Usa siempre `function expressions` en lugar de `function declarations`.
  - No uses `function arrow` excepto que quieras que `this` no acceda al antecesor `function` más cercano sino a su propio ámbito.

  > ¿Por qué?. Permite ver claramente el ámbito de `this`, permite `scope` por bloque, nos aseguramos de escribir el código secuencialmente para una mejor lectura, cuando usemos `function arrow` permite la sintaxis corta de una línea.

```javascript
// MAL
(function () {
    console.log('Welcome to the Internet. Please follow me.')
})()

// BIEN
(() => {
    console.log('Welcome to the Internet. Please follow me.')
})()

// MAL
function foo() {
}

// BIEN
const foo = function () {
}

// MAL
[1, 2, 3].map(function (x) {
    return x * x
})

// BIEN
[1, 2, 3].map((x) => {
    return x * x
})

//MEJOR
[1, 2, 3].map((x) => x * x)
```

  - Si el cuerpo de una función es sólo una línea, es preferible usar la sintaxys última.

  > ¿Por qué? Es más fácil de leer.

  > ¿Cuándo no? Si quieres devolver un objeto.

```javascript
// BIEN
[1, 2, 3].map((x) => {
    return {number: x}
})
```

  - Usa siempre paréntesis en los argumentos aunque para uno no haga falta

  > ¿Por qué? Se leen mejor con paréntesis. Son requeridos cuando tienes varios parámetros.

```javascript
// MAL
[1, 2, 3].map(x => x * x)

// BIEN
[1, 2, 3].map((x) => x * x)
```

  - Nunca declarar una función dentro de un condicional. En su lugar asigna la función a una variable. Los navegadores lo permiten pero lo tratan diferente.

```javascript
// MAL
if (currentUser) {
    function test() {
        console.log('Nope.')
    }
}

// BIEN
let test

if (currentUser) {
    test = () => {
       console.log('Yup.')
    }
}
```

  - Nunca llames a ur argumento `arguments`.

```javascript
// MAL
const nope = (name, options, arguments) => {
}

// BIEN
const yup = (name, options, args) => {
}
```

  - Nunca usar `arguments`, usar `...`.

  > ¿Por qué? `...` es un Array y `arguments` simula ser un Array.

```javascript
// MAL
const concatenateAll = () => {
    const args = Array.prototype.slice.call(arguments)

    return args.join('')
}

// BIEN
const concatenateAll = (...args) => args.join('')
```

  - Usa la sintaxis de parámetros por defecto en lugar de `||`, ya que esto puede hacer que cambie el tipo.

```javascript
// MAL
const handleThings = (opts) => opts = opts || {}

// MAL
const handleThings = (opts) => {
    if (opts === void 0) {
        opts = {}
    }
}

// BIEN
const handleThings = (opts = {}) => {
}
```

  - Evitar efectos secundarios con los parámetros por defecto.

  > ¿Por qué? Pueden confundir.

```javascript
// MAL
let b = 1

const count = (a = b++) => console.log(a)

count()  // 1
count()  // 2
count(3) // 3
count()  // 3
```

**[Indice](#indice)**


## Constructores

  - Siempre usa `class`. En lugar de `prototype`.

  > ¿Por qué? Sintaxis `class` es más fácil de entender.

```javascript
// MAL
const Queue = function (contents = []) {
    this._queue = [...contents]
}

Queue.prototype.pop = function () {
    const value = this._queue[0]

    this._queue.splice(0, 1)

    return value
}

// BIEN
class Queue {
    constructor(contents = []) {
        this._queue = [...contents]
    }

    pop() {
        const value = this._queue[0]
        
        this._queue.splice(0, 1)

        return value
    }
}
```

  - Usa `extends` para herencia.

  > ¿Por qué? Es una manera de heredar el prototipo sin perder `instanceof`.

```javascript
// MAL
const inherits = require('inherits')

const PeekableQueue = function(contents) {
    Queue.apply(this, contents)
}

inherits(PeekableQueue, Queue)

PeekableQueue.prototype.peek = function() {
    return this._queue[0]
}

// BIEN
class PeekableQueue extends Queue {
    peek() {
        return this._queue[0]
    }
}
```

  - Métodos pueden devolver `this` para ayudar a encadenar.

```javascript
// MAL
Jedi.prototype.jump = function () {
    this.jumping = true

    return true
}

Jedi.prototype.setHeight = function (height) {
    this.height = height
}

const luke = new Jedi()

luke.jump() // => true
luke.setHeight(20) // => undefined

// BIEN
class Jedi {
    jump() {
        this.jumping = true

        return this
    }

    setHeight(height) {
        this.height = height

        return this
    }
}

const luke = new Jedi()

luke
.jump()
.setHeight(20)
```

  - Está permitido escribir un método toString() customizado, sólo aseguraté de que eso no causa efectos inesperados.

```javascript
class Jedi {
    contructor(options = {}) {
        this.name = options.name || 'no name'
    }
    
    getName() {
        return this.name
    }
    
    toString() {
        return `Jedi - ${this.getName()}`
    }
}
```

**[Indice](#indice)**

## Módulos

  - Siempre usa módulos (`import`/`export`) en lugar de los no estándar sistemas de módulos.

  > ¿Por qué? Modules son el futuro, vamos a usar el futuro hoy.

```javascript
// MAL
const AirbnbStyleGuide = require('./AirbnbStyleGuide')

module.exports = AirbnbStyleGuide.es6

// BIEN
import AirbnbStyleGuide from './AirbnbStyleGuide'

export default AirbnbStyleGuide.es6

//MEJOR
import { es6 } from './AirbnbStyleGuide'

export default es6
```

  - No uses `import *`

  > ¿Por qué? Esto hace que tengas una sola exportación por defecto.

```javascript
// MAL
import * as AirbnbStyleGuide from './AirbnbStyleGuide'

// BIEN
import AirbnbStyleGuide from './AirbnbStyleGuide'
```

  - Y no exportar directamente de un `import`.

  > ¿Por qué? Aunque una línea es conciso, tener una forma más clara facilita la lectura.

```javascript
// MAL
// filename es6.js
export { es6 as default } from './airbnbStyleGuide'

// BIEN
// filename es6.js
import { es6 } from './AirbnbStyleGuide'
export default es6
```

**[Indice](#indice)**

## Iteradores y generadores

  - No usar iteradores. Mejor usar funciones tipo `map()` y `reduce()` en lugar de bucles `for-of`.

  > ¿Por qué? Esto refuerza nuestra regla inmutable. Tratar con funciones puras que devuelven valores hace más fácil de evitar efetos secundarios.

```javascript
const numbers = [1, 2, 3, 4, 5]

// MAL
let sum = 0

for (let num of numbers) {
    sum += num
}

sum === 15

// BIEN
let sum = 0

numbers.forEach((num) => sum += num)

sum === 15

//MEJOR
const sum = numbers.reduce((total, num) => total + num, 0)

sum === 15
```

  - No usar generadores por ahora.

  > ¿Por qué? No se pasan bien a ES5.

**[Indice](#indice)**

## Hoisting

  - Declaraciones de variables con `var` son asignadas al top de la función, su asignamiento no. Las declaraciones `const` y `let` tienen un [nuevo concepto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let). Es importante saber porque [typeof ya no es seguro](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

```javascript
const example = () => console.log(notDefined) // => throws a ReferenceError

const example = () => {
    console.log(declaredButNotAssigned) // => undefined

    var declaredButNotAssigned = true
}

const example = () => {
    console.log(declaredButNotAssigned) // => throws a ReferenceError
    console.log(typeof declaredButNotAssigned) // => throws a ReferenceError

    const declaredButNotAssigned = true
}
```

  - Una expresión de función anónima pone en el top su nombre de variable pero no el asignamiento.

```javascript
function example() {
    console.log(anonymous) // => undefined

    anonymous() // => TypeError anonymous is not a function

    var anonymous = function() {
        console.log('anonymous function expression')
    }
}
```

  - Una `function expresion` declarada con `var` pone en el top su nombre de variable pero no el contenido de la función o su nombre.

```javascript
function example() {
    console.log(named) // => undefined
    
    named() // => TypeError named is not a function
    
    superPower() // => ReferenceError superPower is not defined
    
    var named = function superPower() {
        console.log('Flying')
    }
}

function example() {
    console.log(named) // => undefined
    
    named() // => TypeError named is not a function
    
    var named = function named() {
        console.log('named')
    }
}
```

  - Funciones declaradas ponen en el top su nombre y asignamiento.

```javascript
function example() {
    superPower() // => Flying
    
    function superPower() {
        console.log('Flying')
    }
}
```

  - Para más información [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting) por [Ben Cherry](http://www.adequatelygood.com/).

**[Indice](#indice)**

## Operadores de comparacion e igualdad
  - Usa `===` y `!==` en lugar de `==` y `!=`.
  - Operadores de comparación devuelven el siguiente `boolean`:

    + **Objects** evalua a **true**
    + **Undefined** evalua a **false**
    + **Null** evalua a **false**
    + **Booleans** evalua a **the value of the boolean**
    + **Numbers** evalua a **false** si **+0, -0, or NaN**, sino **true**
    + **Strings** evalua a **false** si `''`, sino **true**

```javascript
if ([0]) {
    // true
    // An array is an object, objects evaluate to true
}
```

  - No uses abreviatura excepto que quieras evaluar juntos false, 0, '0', null undefined.
  - ¿Por qué?. Las abreviaturas(`truthy`, `falsy`) hacen que tengamos menos control de nuestro código y por tanto son propensas a errores. 

```javascript
// MAL
if (name) {
    // ...stuff...
}

// BIEN
if (name !== '') {
    // ...stuff...
}

// MAL
if (collection.length) {
    // ...stuff...
}

// BIEN
if (collection.length > 0) {
    // ...stuff...
}
```

  - Para más información [Igualdad y JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) por Angus Croll.

**[Indice](#indice)**

## Bloques

  - Usa llaves con todos los bloques.
  - ¿Por qué?. Ayuda a claridad, evita errores por multilinea en el if y prepara este por si hay que ampliarlo.

```javascript
// MAL
if (test)
    return false

// MAL
if (test) return false

// BIEN
if (test) {
    return false
}

// MAL
function () {return false}

// BIEN
function () {
    return false
}

// mejor
function () => false
```

  - Si estás usando bloques multilínea con `if` y `else`, pon `else` en la misma líneaque se cierra la llave del `if`.

```javascript
// MAL
if (test) {
    thing1()
    thing2()
}
else {
    thing3()
}

// BIEN
if (test) {
    thing1()
    thing2()
} else {
    thing3()
}
```

  - Si tienes un bloque `if` `else` de una línea cada uno, usa el operador ternario si es necesario.

```javascript
// MAL
let isOpen

if (open() === true) {
    isOpen = true
} else {
    isOpen = false
}

// BIEN
let isOpen = (open() === true) ? true : false

//MEJOR
let isOpen = (open() === true)
```

**[Indice](#indice)**

## Comentarios

  - Usa `/* ... */` para comentarios multilínea. Añádele una tabulación.
  - Si es necesario incluye una descripción, específica tipos y valores para todos los parámetros y retorna valores.

```javascript
// MAL
/**
 * make() devuelve un nuevo elemento
 * basado en el nombre de etiqueta
 *
 * @param {String} etiqueta
 * @return {Element} elemento
 */
const make = (tag) => {
    // ...stuff...

    return element
}

// BIEN
/*
    make() devuelve un nuevo elemento
    basado en el nombre de etiqueta
    
    @param {String} etiqueta
    @return {Element} elemento
*/
const make = (tag) => {
    // ...stuff...

    return element
}
```

  - Usa `//` para comentarios de una línea. Ponlos antes y deja un espacio vertical.

```javascript
// MAL
const active = true  // IS CURRENT TAB

// BIEN
// IS CURRENT TAB
const active = true

// MAL
const getType = () => {
    console.log('fetching type...')
    // SET THE DEFAULT TYPE TO 'no type'
    const type = this._type || 'no type'
    
    return type
}

// BIEN
const getType = () => {
    console.log('fetching type...')

    // SET THE DEFAULT TYPE TO 'no type'
    const type = this._type || 'no type'

    return type
}
```

  - Prefijando tus comentarios con `FIXME` o `TODO` ayuda a otros desarrolladores a entender si ese punto necesita revisión, o sugiere una solución. Las diferencias son `FIXME -- necesita arreglar un bug` o `TODO -- necesita implementar`.

  - Usa `// FIXME:` para anotar problemas.

```javascript
class Calculator {
    constructor() {
        // FIXME: debería usar un global aquí
        total = 0
    }
}
```

  - Usa `// TODO:` para anotar soluciones a problemas.

```javascript
class Calculator {
    constructor() {
        // TODO: total debe ser configurable en las opciones del parámetro
        this.total = 0
    }
}
  ```

**[Indice](#indice)**

## Espacios

  - Deja un espacio antes de una llave.

```javascript
// MAL
function test(){
    console.log('test')
}

// BIEN
function test() {
    console.log('test')
}

// MAL
dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog'
});

// BIEN
dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog'
})
```

  - Pon 1 espacio antes de abrir el paréntesis de los condicionales. No ponerlo en llamadas a funciones o en `function declarations`.

```javascript
// MAL
if(isJedi) {
    fight ()
}

// BIEN
if (isJedi) {
    fight()
}

// MAL
function fight () {
    console.log ('Swooosh!')
}

// BIEN
function fight() {
    console.log('Swooosh!')
}
```

  - Asignar valores con espacios.

```javascript
// MAL
const x=y+5

// BIEN
const x = y + 5
```

  - No terminar ficheros con una línea en blanco.
  - ¿Por qué?. El propio automatizador de tareas se encarga de que los ficheros puedan minificarse.

```javascript
// MAL
(function(global) {
    // ...
})(this)↵

// BIEN
(function(global) {
    // ...
})(this)
```

  - Deja una línea en blanco antes y después de un condicional y funciones

```javascript
// MAL
if (foo) {
    return bar
}
return baz

// BIEN
if (foo) {
    return bar
}

return baz

// MAL
const obj = {
    foo() {
    },
    bar() {
    }
}
return obj

// BIEN
const obj = {
    bar() {
    },

    foo() {
    }
}

return obj
```

**[Indice](#indice)**

## Comas

  - Comas al final de línea

```javascript
// MAL
const story = [
      once
    , upon
    , aTime
]

// BIEN
const story = [
    once,
    upon,
    aTime
]

// MAL
const hero = {
      firstName: 'Ada'
    , lastName: 'Lovelace'
    , birthYear: 1815
    , superPower: 'computers'
}

// BIEN
const hero = {
    birthYear: 1815,
    firstName: 'Ada',
    lastName: 'Lovelace',
    superPower: 'computers'
}
```

  - Coma al final de  conjunto de propiedades de un objeto.

  > ¿Por qué? Aunque usando compiladores como babel ya nos quita la , en el resultado final es preferible no ponerla ya que no aporta nada.
  - Nota personal: Los compiladores deberían permitir no ponerlas, no el poder poner todas que sólo ensucia el código al igual que ya hacen las clases que no necesitan separar sus métodos con , ya que se entiende que son un bloque.

```javascript
// MAL
const hero = {
    firstName: 'Dana',
    lastName: 'Scully',
}

const heroes = [
  'Batman',
  'Superman',
]

// BIEN
const hero = {
    firstName: 'Dana',
    lastName: 'Scully'
}

const heroes = [
    'Batman',
    'Superman'
]
```

**[Indice](#indice)**

## Punto y coma

  - **No usarlos más que para el `for`**
  - ¿Por qué?. Porque usando una guía de estilos y un automatizador de tareas no vamos a tener necesidad de `;` ya que para nuestra versión final estarán donde deben. Facilita la lectura al quitar elementos inservibles.

```javascript
// MAL
(function() {
    const name = 'Skywalker';

    return name;
})()

// BIEN
(function() {
    const name = 'Skywalker'

    return name
})()
```

**[Indice](#indice)**

## Tipos y conversiones

  - Strings:

```javascript
const reviewScore = 9

// MAL
const totalScore = reviewScore + ''

// BIEN
const totalScore = String(reviewScore)
```

  - Usa `Number` para números.

```javascript
const inputValue = '4'

// MAL
const val = parseInt(inputValue, 10)

// MAL
const val = +inputValue

// MAL (en uso intensivo, mejor rendimiento)
const val = inputValue >> 0

// MAL
const val = parseInt(inputValue)

// BIEN
const val = Number(inputValue)
```

  - Sólo por razones de rendimiento en un uso intensivo de Number se usaría notación Bitshift for [razones del rendimiento](http://jsperf.com/coercion-vs-casting/3).

```javascript
// BIEN
const val = inputValue >> 0
```

  - **Nota:** Hay soporte para números a 64bits pero la notación Bitshift es 32 bits.
```javascript
2147483647 >> 0 //=> 2147483647
2147483648 >> 0 //=> -2147483648
2147483649 >> 0 //=> -2147483647
```

  - Booleans:

```javascript
const age = 0

// MAL
const hasAge = new Boolean(age)

// BIEN
const hasAge = Boolean(age)

// BIEN
const hasAge = !!age
```

**[Indice](#indice)**

## Convenciones de nombre

  - Evita nombres con una letra. Se descriptivo con los nombres.

```javascript
// MAL
function q() {
    // ...
}

// BIEN
function query() {
    // ..
}
```

  - Usa camelcase cuando nombres objetos, funciones e instancias.

```javascript
// MAL
const OBJEcttsssss = {}
const this_is_my_object = {}

function c() {}

// BIEN
const thisIsMyObject = {}

function thisIsMyFunction() {}
```

  - Use PascalCase para llamar a constructores o clases.

```javascript
// MAL
function user(options) {
    this.name = options.name
}

const bad = new user({
    name: 'nope'
})

// BIEN
class User {
    constructor(options) {
        this.name = options.name
    }
}

const good = new User({
    name: 'yup'
})
```

  - Usa `_` al empezar el nombre de una propiedad privada.

```javascript
// MAL
this.__firstName__ = 'Panda'
this.firstName_ = 'Panda'

// BIEN
this._firstName = 'Panda'
```

  - No guardes referencia a `this`. Usa `arrow functions` o `bind`.

```javascript
// MAL
const foo = () => {
    const self = this

    return () => console.log(self)
}

// MAL
const foo = () => {
    const that = this

    return () => console.log(that)
}

// BIEN
function foo() {
    return () => {
        console.log(this)
    }
}

// mejor
function foo() {
    return () => console.log(this)
}
```

  - Si tu fichero exporta una sóla clase, este debe llamarse igual que la clase.

```javascript
class CheckBox {
    // ...
}
export default CheckBox

// En otro fichero
// MAL
import CheckBox from './checkBox'

// MAL
import CheckBox from './check_box'

// BIEN
import CheckBox from './CheckBox'
```

  - Usa camelCase cuando exportes una `function`. Tu nombre de fichero debe ser idéntico al nombre de la `function`.

```javascript
function makeStyleGuide() {
}

export default makeStyleGuide
```

  - Use `PascalCase` cuando exportes un `singleton / function library / bare object`.

```javascript
const AirbnbStyleGuide = {
    es6: {
    }
}

export default AirbnbStyleGuide
```

**[Indice](#indice)**

## Accessors

  - `Accessor functions` para propiedades no son requeridas.
  - Si haces `accessor functions` usa getVal() y setVal('hello').

```javascript
// MAL
dragon.age()

// BIEN
dragon.getAge()

// MAL
dragon.mal(25)

// BIEN
dragon.setAge(25)
```

  - Si la propiedad es un `boolean`, usa isVal() o hasVal().

```javascript
// MAL
if (!dragon.age()) {
    return false
}

// BIEN
if (!dragon.hasAge()) {
    return false
}
```

  - Está permitido hacer funciones `get()` y `set()` siempre que se hagan bien.

```javascript
class Jedi {
    constructor(options = {}) {
        const lightsaber = options.lightsaber || 'blue'

        this.set('lightsaber', lightsaber)
    }

    get(key) {
        return this[key]
    }

    set(key, val) {
        this[key] = val
    }
}
```

**[Indice](#indice)**


## Eventos

  - Procura pasar objetos, para que si alguien más tiene que contribuir en un futuro pueda hacerlo fácilmente sin afectar a lo anterior:

```javascript
// MAL
$(this).trigger('listingUpdated', listing.id)

$(this).on('listingUpdated', function (e, listingId) {
    // do something with listingId
})

// BIEN
$(this).trigger('listingUpdated', {listingId: listing.id})

$(this).on('listingUpdated', (e, data) => {
    // do something with data.listingId
})
```

**[Indice](#indice)**

## jQuery

  - Prefija variables de objetos jQuery con `$`.

```javascript
// MAL
const sidebar = $('.sidebar')

// BIEN
const $sidebar = $('.sidebar')
```

  - Cachea objetos jQuery.

```javascript
// MAL
function setSidebar() {
    $('.sidebar').hide()

    $('.sidebar').css({
        'background-color': 'pink'
    });
}

// BIEN
function setSidebar() {
    const $sidebar = $('.sidebar')

    $sidebar.hide()

    $sidebar.css({
        'background-color': 'pink'
    })
}
```

  - Para peticiones al DOM en cascada usa `$('.sidebar ul')` o padre > hijo `$('.sidebar > ul')`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)
  - Usa `find` si tienes en una variable el objeto jQuery.

```javascript
// MAL
$('ul', '.sidebar').hide()

// MAL
$('.sidebar').find('ul')
.hide()

// BIEN
$('.sidebar ul').hide()

// BIEN
$('.sidebar > ul').hide()

// BIEN
$sidebar.find('ul')
.hide()
```

**[Indice](#indice)**

## Rendimiento

  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)

**[Indice](#indice)**

## Recursos

**Aprendiendo ES6**

  - [Draft ECMA 2015 (ES6) Spec](https://people.mozilla.org/~jorendorff/es6-draft.html)
  - [ExploringJS](http://exploringjs.com/)
  - [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
  - [Comprehensive Overview of ES6 Features](http://es6-features.org/)

**Lee esto**

  - [Annotated ECMAScript 5.1](http://es5.github.com/)

**Herramientas**

  - Code Style Linters
    + [JSHint](http://www.jshint.com/) - [Airbnb Style .jshintrc](https://github.com/airbnb/javascript/blob/master/linters/jshintrc)
    + [JSCS](https://github.com/jscs-dev/node-jscs) - [Airbnb Style Preset](https://github.com/jscs-dev/node-jscs/blob/master/presets/airbnb.json)

**Guías de estilos**

  - [Google JavaScript Style Guide](http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml)
  - [jQuery Core Style Guidelines](http://docs.jquery.com/JQuery_Core_Style_Guidelines)
  - [Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js/)

**Otros estilos**

  - [Naming this in nested functions](https://gist.github.com/4135065) - Christian Johansen
  - [Conditional Callbacks](https://github.com/airbnb/javascript/issues/52) - Ross Allen
  - [Popular JavaScript Coding Conventions on Github](http://sideeffect.kr/popularconvention/#javascript) - JeongHoon Byun
  - [Multiple var statements in JavaScript, not superfluous](http://benalman.com/news/2012/05/multiple-var-statements-javascript/) - Ben Alman

**Otras lecturas**

  - [Understanding JavaScript Closures](http://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
  - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
  - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
  - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
  - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

**Libros**

  - [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
  - [JavaScript Patterns](http://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
  - [Pro JavaScript Design Patterns](http://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X)  - Ross Harmes and Dustin Diaz
  - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](http://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
  - [Maintainable JavaScript](http://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
  - [JavaScript Web Applications](http://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
  - [Pro JavaScript Techniques](http://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
  - [Smashing Node.js: JavaScript Everywhere](http://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
  - [Secrets of the JavaScript Ninja](http://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
  - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
  - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
  - [JSBooks](http://jsbooks.revolunet.com/) - Julien Bouquillon
  - [Third Party JavaScript](http://manning.com/vinegar/) - Ben Vinegar and Anton Kovalyov
  - [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182) - David Herman

**Blogs**

  - [DailyJS](http://dailyjs.com/)
  - [JavaScript Weekly](http://javascriptweekly.com/)
  - [JavaScript, JavaScript...](http://javascriptweblog.wordpress.com/)
  - [Bocoup Weblog](http://weblog.bocoup.com/)
  - [Adequately Good](http://www.adequatelygood.com/)
  - [NCZOnline](http://www.nczonline.net/)
  - [Perfection Kills](http://perfectionkills.com/)
  - [Ben Alman](http://benalman.com/)
  - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
  - [Dustin Diaz](http://dustindiaz.com/)
  - [nettuts](http://net.tutsplus.com/?s=javascript)

**Podcasts**

  - [JavaScript Jabber](http://devchat.tv/js-jabber/)

**[Indice](#indice)**