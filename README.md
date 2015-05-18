# init-guide-style

Plantilla para iniciación de un proyecto. 
Guía de estilos para Jade, JS, CSS

#### *Librerías usadas en la plantilla*
    - Gulp
    - BabelJs
    - Express 4
    - Mongodb
    - AngularJs 1.3

#### *Árbol de directorios*
    - deploy - Se crea al compilar
        - public - Contenido a subir al servidor
    - dev - Contiene todos los archivos de desarrollo

#### *General*
- 4 Espacios de tabulación
- Comillas simples

#### *Jade*
- Atributos en cada línea sin , de separación y ordenados alfabéticamente.
- div omitidos si hay id o class.

```html
    input.button(
        placeholder='input'
        type='text'
    )
```

#### *CSS*
- Cada propiedad en una línea.
- Línea en blanco de separación entre grupos de propiedades.
- Propiedades ordenadas alfabéticamente siempre que no afecte al resultado.
- Un espacio entre el nombre y la {.
- Un espacio entre : y el valor.

```css
    .texto {
        background-color: #ddd;
        color: #333;
    }
        
    .centrar {
        text-align: center;
    }
```

#### *JS*
- Declaración de variables una por línea precedida de usando const o let.
- Ordenamiento alfabético siempre que sea posible tanto para variables como para propiedades
- Expresiones de funciones sin nombre de función.
- Línea en blanco de separación para separar grupos, condicionales, funciones.
- Encadenamiento de funciones en nuevo línea con mismo nivel de tabulación.
- Declarar las variables cuando y donde son necesarias, no declararlas todas arriba.
- Espacios para separar -> = : { ( && || > = < y siguiente atributo
- No usar ;

```javascript
    const fnsNums = {
        total: 0,

        numeros(num1, num2, obj) {
            if (num1 > num2) {
                obj.txt = 'El primer número es mayor'
            } else {
                obj.txt = 'El segundo número es mayor'
            }

            this.total += num1 + num2

            return this
        }
    }

    const NUM1 = 5
    const NUM2 = 10

    let num3 = 20
    let num4 = 15

    const obj1 = {}
    const obj2 = {}

    fnsNums
    .numeros(num1, num2, obj1)
    .numeros(num3, num4, obj2)

    console.log(obj1.txt)
    console.log(obj2.txt)
    console.log(`El total de los números sumados es ${fnsNums.total}`)
```












# Guía de estilos JavaScript ES6(Basado en https://github.com/airbnb/javascript/blob/master/README.md)

## Indice

  1. [Tipos](#tipos)
  1. [Objetos](#objetos)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Constructores](#constructores)
  1. [Modulos](#modulos)
  1. [Iteradores y constructores](#iteradores-y-constructores)
  1. [Propiedades](#propiedades)
  1. [Variables](#variables)
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

## Objetos

  - Usa la sintaxis literal para crearlo.

    ```javascript
    // mal
    const item = new Object()

    // bien
    const item = {}
    ```

  - No uses palabras reservadas. No funcionan en IE8.

    ```javascript
    // mal
    const superman = {
        private: true,

        default: {
            clark: 'kent'
        }
    }

    // bien
    const superman = {
        hidden: true,

        defaults: {
            clark: 'kent'
        }
    }
    ```

  - Usa sinónimos en lugar de palabras reservadas.

    ```javascript
    // mal
    const superman = {
        class: 'alien'
    }

    // mal
    const superman = {
        klass: 'alien'
    }

    // bien
    const superman = {
        type: 'alien'
    }
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

  > ¿Por qué? Es más corto y descriptivo.

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

**[indice](#indice)**

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
    const len = items.length

    for (let i = 0; i < len; i++) {
        itemsCopy[i] = items[i]
    }

    // bien
    let itemsCopy = [...items]
    ```
  - Para convertir un objeto en un `Array` usar `array.from`.

    ```javascript
    const foo = document.querySelectorAll('.foo')
    const nodes = Array.from(foo)
    ```

**[indice](#indice)**

## Destructuring

  - Úsalo para acceder y usar múltiples propiedades de un objeto.

  > ¿Por qué? Guarda referencias temporales a las propiedades.

    ```javascript
    // mal
    const getFullName = (user) => {
        const firstName = user.firstName
        const lastName = user.lastName

        return `${firstName} ${lastName}`
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

**[indice](#indice)**

## Strings
  - Usa comillas simples `''`.

    ```javascript
    // mal
    const name = "Capt. Janeway"

    // bien
    const name = 'Capt. Janeway'
    ```

  - Cadenas más largas de 80 carácteres deben ser escritas en múltiples líneas.
  - Nota: Si se sobreusa podría afectar al rendimiento.

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
    const errorMessage = `This is a super long error that was thrown because
    of Batman. When you stop to think about how Batman had anything to do
    with this, you would get nowhere fast.`
    ```

  - Usa plantillas de cadenas en lugar de concatenación.

  >  ¿Por qué?. Da claridad a la lectura y permite multilínea

    ```javascript
    // mal
    const sayHi = (name) => 'How are you, ' + name + '?'

    // mal
    const sayHi = (name) => ['How are you, ', name, '?'].join()

    // bien
    const sayHi = (name) => `How are you, ${name}?`
    ```

**[indice](#indice)**


## Functions
  - Usa `function expressions` siempre con `const` y la sintaxis `function arrow`
  - Usa siempre `function expressions` en lugar de `function declarations`.       - No uses `function arrow` excepto que quieras que `this` no acceda al antecesor `function` más cercano sino a su propio ámbito.

  > ¿Por qué?. Permite ver claramente el ámbito de `this`, permite `scope` por bloque, nos aseguramos de escribir el código secuencialmente para una mejor lectura, cuando usemos `function arrow` permite la sintaxis corta de una línea.

    ```javascript
    //bien
    (() => {
        console.log('Welcome to the Internet. Please follow me.')
    })()

    // mal
    function foo() {
    }

    // bien
    const foo = function () {
    }

    // mal
    [1, 2, 3].map(function (x) {
        return x * x
    })

    // bien
    [1, 2, 3].map((x) => {
        return x * x
    })
    
    // mejor
    [1, 2, 3].map((x) => x * x)
    ```

  - Si el cuerpo de una función es sólo una línea, es preferible usar la sintaxys última.

  > ¿Por qué? Es más fácil de leer.

  > ¿Cuándo no? Si quieres devolver un objeto.
    
    ```javascript
    // bien
    [1, 2, 3].map((x) => {
        return {number: x}
    })
    ```

  - Usa siempre paréntesis en los argumentos aunque para uno no haga falta

  > ¿Por qué? Se leen mejor con paréntesis. Son requeridos cuando tienes varios parámetros.

    ```javascript
    // mal
    [1, 2, 3].map(x => x * x)

    // bien
    [1, 2, 3].map((x) => x * x)
    ```

  - Nunca declarar una función dentro de un condicional. En su lugar asigna la función a una variable. Los navegadores lo permiten pero lo tratan diferente.

    ```javascript
    // mal
    if (currentUser) {
        function test() {
            console.log('Nope.')
        }
    }

    // bien
    let test

    if (currentUser) {
        test = () => {
           console.log('Yup.')
        }
    }
    ```

  - Nunca llames a ur argumento `arguments`.

    ```javascript
    // mal
    const nope = (name, options, arguments) => {
    }

    // bien
    const yup = (name, options, args) => {
    }
    ```

  - Nunca usar `arguments`, usar `...`.

  > ¿Por qué? `...` es un Array y `arguments` simula ser un Array.

    ```javascript
    // mal
    const concatenateAll = () => {
        const args = Array.prototype.slice.call(arguments)

        return args.join('')
    }

    // bien
    const concatenateAll = (...args) => args.join('')
    ```

  - Usa la sintaxis de parámetros por defecto en lugar de `||`, ya que esto puede hacer que cambie el tipo.

    ```javascript
    // muy mal
    const handleThings = (opts) => opts = opts || {}

    // mal
    const handleThings = (opts) => {
        if (opts === void 0) {
            opts = {}
        }
    }

    // bien
    const handleThings = (opts = {}) => {
    }
    ```

  - Evitar efectos secundarios con los parámetros por defecto.

  > ¿Por qué? Pueden confundir.

    ```javascript
    // mal
    let b = 1

    const count = (a = b++) => console.log(a)

    count()  // 1
    count()  // 2
    count(3) // 3
    count()  // 3
    ```

**[indice](#indice)**


## Constructores

  - Siempre usa `class`. En lugar de `prototype`.

  > ¿Por qué? Sintaxis `class` es más fácil de entender.

    ```javascript
    // mal
    const Queue = function (contents = []) {
        this._queue = [...contents]
    }

    Queue.prototype.pop = function () {
        const value = this._queue[0]

        this._queue.splice(0, 1)

        return value
    }

    // bien
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
    // mal
    const inherits = require('inherits')

    const PeekableQueue = function(contents) {
        Queue.apply(this, contents)
    }

    inherits(PeekableQueue, Queue)

    PeekableQueue.prototype.peek = function() {
        return this._queue[0]
    }

    // bien
    class PeekableQueue extends Queue {
        peek() {
            return this._queue[0]
        }
    }
    ```

  - Métodos pueden devolver `this` para ayudar a encadenar.

    ```javascript
    // mal
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

    // bien
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

    luke.jump()
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

**[indice](#indice)**


## Módulos

  - Siempre usa módulos (`import`/`export`) en lugar de los no estándar sistemas de módulos.

  > ¿Por qué? Modules son el futuro, vamos a usar el futuro hoy.

    ```javascript
    // mal
    const AirbnbStyleGuide = require('./AirbnbStyleGuide')

    module.exports = AirbnbStyleGuide.es6

    // bien
    import AirbnbStyleGuide from './AirbnbStyleGuide'

    export default AirbnbStyleGuide.es6

    // mejor
    import { es6 } from './AirbnbStyleGuide'

    export default es6
    ```

  - No uses `import *`

  > ¿Por qué? Esto hace que tengas una sola exportación por defecto.

    ```javascript
    // mal
    import * as AirbnbStyleGuide from './AirbnbStyleGuide'

    // bien
    import AirbnbStyleGuide from './AirbnbStyleGuide'
    ```

  - Y no exportar directamente de un `import`.

  > ¿Por qué? Aunque una línea es conciso, tener una forma más clara facilita la lectura.

    ```javascript
    // mal
    // filename es6.js
    export { es6 as default } from './airbnbStyleGuide'

    // bien
    // filename es6.js
    import { es6 } from './AirbnbStyleGuide'
    export default es6
    ```

**[indice](#indice)**

## Iteradores y generadores

  - No usar iteradores. Mejor usar funciones tipo `map()` y `reduce()` en lugar de bucles `for-of`.

  > ¿Por qué? Esto refuerza nuestra regla inmutable. Tratar con funciones puras que devuelven valores hace más fácil de evitar efetos secundarios.

    ```javascript
    const numbers = [1, 2, 3, 4, 5]

    // mal
    let sum = 0

    for (let num of numbers) {
        sum += num
    }

    sum === 15

    // bien
    let sum = 0

    numbers.forEach((num) => sum += num)

    sum === 15

    // mejor
    const sum = numbers.reduce((total, num) => total + num, 0)

    sum === 15
    ```

  - No usar generadores por ahora.

  > ¿Por qué? No se pasan bien a ES5.

**[indice](#indice)**


## Propiedades
  - Utilice la notación de puntos cuando acceda a las propiedades.

    ```javascript
    const luke = {
        age: 28,
        jedi: true
    }

    // mal
    const isJedi = luke['jedi']

    // bien
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

**[indice](#indice)**


## Variables

  - Usa `const` para las variables, objetos y funciones que no se tengan que volver a asignar, usa `let` en los demás casos, nunca uses `var`.
  - Las variables primirtivas declaradas con `const` estarán en mayúsculas.

  > ¿Por qué? Esto permite que no puedas cambiar el valor de la variable y que tengan `scope` de bloque, en lugar de `scope` de `function` como `var`.

    ```javascript
    // mal
    var a = 1
    var b = 2

    // bien
    const A = 1
    const B = 2

    // mal
    var count = 1

    if (true) {
        count += 1
    }

    // bien
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
    // mal
    superPower = new SuperPower()

    // bien
    const superPower = new SuperPower()
    ```

  - Usa una declaración por variable.

    > ¿Por qué? Es más fácil añadir nuevas variables de esta forma y ordenarlas. Evitas declarar una variable global por error.

    ```javascript
    // muy mal
    const DRAGONBALL = 'z',
        GOSPORTSTEAM = true
        ITEMS = getItems()

    // mal
    const DRAGONBALL = 'z',
        GOSPORTSTEAM = true,
        items = getItems()

    // bien
    const DRAGONBALL = 'z'
    const GOSPORTSTEAM = true
    const ITEMS = getItems()
    ```

  - Agrupa todos tus `const`s y luego agrupa todos tus `let`s.

  > ¿Por qué? Ayuda a identificar mejor las variables.

    ```javascript
    // mal
    let i, len, dragonball,
        items = getItems(),
        goSportsTeam = true

    // mal
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
    // bien
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

    // mal - llamada innecesaria a función
    function(hasName) {
        const name = getName()

        if (!hasName) {
            return false
        }

        this.setFirstName(name)

        return true
    }

    // bien
    function(hasName) {
        if (!hasName) {
            return false
        }
        
        const name = getName()

        this.setFirstName(name)
        
        return true
    }
    ```

**[indice](#indice)**

## Hoisting

  - Declaraciones de `var` son asignadas al top de la función, su asignamiento no. Las declaraciones `const` y `let` tienen un [nuevo concepto](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let). Es importante saber porque [typeof ya no es seguro](http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

    ```javascript
    function example() {
        console.log(notDefined) // => throws a ReferenceError
    }

    function example() {
        console.log(declaredButNotAssigned) // => undefined

        var declaredButNotAssigned = true
    }

    function example() {
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

**[indice](#indice)**


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
    // mal
    if (name) {
        // ...stuff...
    }

    // bien
    if (name !== '') {
        // ...stuff...
    }

    // mal
    if (collection.length) {
        // ...stuff...
    }

    // bien
    if (collection.length > 0) {
        // ...stuff...
    }
    ```

  - Para más información [Igualdad y JavaScript](http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) por Angus Croll.

**[indice](#indice)**


## Bloques

  - Usa llaves con todos los bloques.
  - ¿Por qué?. Ayuda a claridad, evita errores por multilinea en el if y prepara este por si hay que ampliarlo.

    ```javascript
    // mal
    if (test)
        return false

    // mal
    if (test) return false

    // bien
    if (test) {
        return false
    }

    // mal
    function () {return false}

    // bien
    function () {
        return false
    }

    // mejor
    function () => false
    ```

  - Si estás usando bloques multilínea con `if` y `else`, pon `else` en la misma líneaque se cierra la llave del `if`.

    ```javascript
    // mal
    if (test) {
        thing1()
        thing2()
    }
    else {
        thing3()
    }

    // bien
    if (test) {
        thing1()
        thing2()
    } else {
        thing3()
    }
    ```

  - Si tienes un bloque `if` `else` de una línea cada uno, usa el operador ternario si es necesario.

    ```javascript
    // mal
    let isOpen
    
    if (open() === true) {
        isOpen = true
    } else {
        isOpen = false
    }

    // bien
    let isOpen = (open() === true) ? true : false
    
    // mejor
    // En este caso no haría falta un operador ternario ya que la propia condiión nos devuelve el valor
    let isOpen = (open() === true)
    ```

**[indice](#indice)**


## Comentarios

  - Usa `/* ... */` para comentarios multilínea. Añádele una tabulación.
  - Si es necesario incluye una descripción, específica tipos y valores para todos los parámetros y retorna valores.

    ```javascript
    // mal
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

    // bien
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
    // mal
    const active = true  // is current tab

    // bien
    // is current tab
    const active = true

    // mal
    const getType = () => {
        console.log('fetching type...')
        // set the default type to 'no type'
        const type = this._type || 'no type'
        
        return type
    }

    // bien
    const getType = () => {
        console.log('fetching type...')

        // set the default type to 'no type'
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

**[indice](#indice)**


## Espacios

  - Usa tabulación a 4 espacios.

    ```javascript
    // mal
    function() {
    ∙∙const name
    }

    // bien
    function() {
    ∙∙∙∙const name
    }
    ```

  - Deja un espacio antes de una llave.

    ```javascript
    // mal
    function test(){
        console.log('test')
    }

    // bien
    function test() {
        console.log('test')
    }

    // mal
    dog.set('attr',{
        age: '1 year',
        breed: 'Bernese Mountain Dog'
    });

    // bien
    dog.set('attr', {
        age: '1 year',
        breed: 'Bernese Mountain Dog'
    })
    ```

  - Pon 1 espacio antes de abrir el paréntesis de los condicionales. No ponerlo en llamadas a funciones o en `function declarations`.

    ```javascript
    // mal
    if(isJedi) {
        fight ()
    }

    // bien
    if (isJedi) {
        fight()
    }

    // mal
    function fight () {
        console.log ('Swooosh!')
    }

    // bien
    function fight() {
        console.log('Swooosh!')
    }
    ```

  - Asignar valores con espacios.

    ```javascript
    // mal
    const x=y+5

    // bien
    const x = y + 5
    ```

  - No terminar ficheros con una línea en blanco.
  - ¿Por qué?. El propio automatizador de tareas se encarga de que los ficheros puedan minificarse.

    ```javascript
    // mal
    (function(global) {
        // ...
    })(this)↵

    // bien
    (function(global) {
        // ...
    })(this)
    ```

  - Para métodos encadenados pon a partir del 2º en nueva línea empezando por . y sin tabulación extra.

    ```javascript
    // mal
    $('#items').find('.selected').highlight().end().find('.open').updateCount()

    // mal
    $('#items').
      find('.selected').
        highlight().
        end().
      find('.open').
        updateCount()

    // bien
    $('#items').find('.selected')
    .highlight()
    .end()
    .find('.open')
    .updateCount()

    // mal
    const leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
        .attr('width', (radius + margin) * 2).append('svg:g')
        .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
        .call(tron.led)

    // bien
    const leds = stage.selectAll('.led')
    .data(data)
    .enter().append('svg:svg')
    .classed('led', true)
    .attr('width', (radius + margin) * 2)
    .append('svg:g')
    .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
    .call(tron.led)
    ```

  - Deja una línea en blanco antes y después de un condicional y funciones

    ```javascript
    // mal
    if (foo) {
        return bar
    }
    return baz

    // bien
    if (foo) {
        return bar
    }

    return baz

    // mal
    const obj = {
        foo() {
        },
        bar() {
        }
    }
    return obj

    // bien
    const obj = {
        bar() {
        },

        foo() {
        }
    }

    return obj
    ```


**[indice](#indice)**


## Comas

  - Comas al final de línea

    ```javascript
    // mal
    const story = [
          once
        , upon
        , aTime
    ]

    // bien
    const story = [
        once,
        upon,
        aTime
    ]

    // mal
    const hero = {
          firstName: 'Ada'
        , lastName: 'Lovelace'
        , birthYear: 1815
        , superPower: 'computers'
    }

    // bien
    const hero = {
        birthYear: 1815,
        firstName: 'Ada',
        lastName: 'Lovelace',
        superPower: 'computers'
    }
    ```

  - Coma al final de  conjunto de propiedades de un objeto.

  > ¿Por qué? Aunque usando compiladores como babel ya nos quita la , en el resultado final es preferible no ponerla ya que no aporta nada.
  - Nota personal: Los compiladores deberían permitir no ponerlas, no el poder poner todas que sólo ensucia el código, las clases no necesitan separar sus métodos con , ya que se entiende que son un bloque.

    ```javascript

    // mal
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully',
    }

    const heroes = [
      'Batman',
      'Superman',
    ]

    // bien
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully'
    }

    const heroes = [
        'Batman',
        'Superman'
    ]
    ```

**[indice](#indice)**


## Punto y coma

  - **No usarlos más que para el `for`**
  - ¿Por qué?. Porque usando una guía de estilos y un automatizador de tareas no vamos a tener necesidad de `;` ya que para nuestra versión final estarán donde deben. Facilita la lectura al quitar elementos inservibles.

    ```javascript
    // mal
    (function() {
        const name = 'Skywalker';

        return name;
    })()

    // bien
    (() => {
        const name = 'Skywalker'

        return name
    })()
    ```

**[indice](#indice)**


## Tipos y conversiones

  - Strings:

    ```javascript
    const reviewScore = 9

    // mal
    const totalScore = reviewScore + ''

    // bien
    const totalScore = String(reviewScore)
    ```

  - Usa `Number` para números.

    ```javascript
    const inputValue = '4'

    // mal
    const val = parseInt(inputValue, 10)

    // mal
    const val = +inputValue

    // mal (en uso intensivo, mejor rendimiento)
    const val = inputValue >> 0

    // mal
    const val = parseInt(inputValue)

    // bien
    const val = Number(inputValue)
    ```

  - Sólo por razones de rendimiento en un uso intensivo de Number se usaría notación Bitshift for [razones del rendimiento](http://jsperf.com/coercion-vs-casting/3).

    ```javascript
    // bien
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

    // mal
    const hasAge = new Boolean(age)

    // bien
    const hasAge = Boolean(age)

    // bien
    const hasAge = !!age
    ```

**[indice](#indice)**


## Convenciones de nombre

  - Evita nombres con una letra. Se descriptivo con los nombres.

    ```javascript
    // mal
    function q() {
        // ...
    }

    // bien
    function query() {
        // ..
    }
    ```

  - Usa camelcase cuando nombres objetos, funciones e instancias.

    ```javascript
    // mal
    const OBJEcttsssss = {}
    const this_is_my_object = {}

    function c() {}

    // bien
    const thisIsMyObject = {}

    function thisIsMyFunction() {}
    ```

  - Use PascalCase para llamar a constructores o clases.

    ```javascript
    // mal
    function user(options) {
        this.name = options.name
    }

    const bad = new user({
        name: 'nope'
    })

    // bien
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
    // mal
    this.__firstName__ = 'Panda'
    this.firstName_ = 'Panda'

    // bien
    this._firstName = 'Panda'
    ```

  - No guardes referencia a `this`. Usa `arrow functions` o `bind`.

    ```javascript
    // mal
    const foo = () => {
        const self = this

        return () => console.log(self)
    }

    // mal
    const foo = () => {
        const that = this

        return () => console.log(that)
    }

    // bien
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
    // mal
    import CheckBox from './checkBox'

    // mal
    import CheckBox from './check_box'

    // bien
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


**[indice](#indice)**


## Accessors

  - `Accessor functions` para propiedades no son requeridas.
  - Si haces `accessor functions` usa getVal() y setVal('hello').

    ```javascript
    // mal
    dragon.age()

    // bien
    dragon.getAge()

    // mal
    dragon.mal(25)

    // bien
    dragon.setAge(25)
    ```

  - Si la propiedad es un `boolean`, usa isVal() o hasVal().

    ```javascript
    // mal
    if (!dragon.age()) {
        return false
    }

    // bien
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

**[indice](#indice)**


## Eventos

  - Procura pasar objetos, para que si alguien más tiene que contribuir en un futuro pueda hacerlo fácilmente sin afectar a lo anterior:

    ```javascript
    // mal
    $(this).trigger('listingUpdated', listing.id)

    $(this).on('listingUpdated', function (e, listingId) {
        // do something with listingId
    })

    // bien
    $(this).trigger('listingUpdated', { listingId : listing.id })

    $(this).on('listingUpdated', (e, data) => {
        // do something with data.listingId
    })
    ```

  **[indice](#indice)**


## jQuery

  - Prefija variables de objetos jQuery con `$`.

    ```javascript
    // mal
    const sidebar = $('.sidebar')

    // bien
    const $sidebar = $('.sidebar')
    ```

  - Cachea objetos jQuery.

    ```javascript
    // mal
    function setSidebar() {
        $('.sidebar').hide()

        $('.sidebar').css({
            'background-color': 'pink'
        });
    }

    // bien
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
    // mal
    $('ul', '.sidebar').hide()

    // mal
    $('.sidebar').find('ul')
    .hide()

    // bien
    $('.sidebar ul').hide()

    // bien
    $('.sidebar > ul').hide()

    // bien
    $sidebar.find('ul')
    .hide()
    ```

**[indice](#indice)**


## Rendimiento

  - [On Layout & Web Performance](http://kellegous.com/j/2013/01/26/layout-performance/)
  - [String vs Array Concat](http://jsperf.com/string-vs-array-concat/2)
  - [Try/Catch Cost In a Loop](http://jsperf.com/try-catch-in-loop-cost)
  - [Bang Function](http://jsperf.com/bang-function)
  - [jQuery Find vs Context, Selector](http://jsperf.com/jquery-find-vs-context-sel/13)
  - [innerHTML vs textContent for script text](http://jsperf.com/innerhtml-vs-textcontent-for-script-text)
  - [Long String Concatenation](http://jsperf.com/ya-string-concat)

**[indice](#indice)**


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


**[indice](#indice)**

























# Guía de estilo AngularJS (basada en https://github.com/johnpapa/angular-styleguide/edit/master/i18n/es-ES.md)

## Tabla de contenidos

  1. [Responsabilidad
     Única](#single-responsibility-o-responsabilidad-única)
  1. [IIFE](#iife)
  1. [Módulos](#módulos)
  1. [Controladores](#controladores)
  1. [Servicios](#servicios)
  1. [Fábricas](#fábricas)
  1. [Servicios de Datos](#servicios-de-datos)
  1. [Directivas](#directivas)
  1. [Resolviendo Promesas en un Controlador](#resolviendo-promesas-en-un-controlador)
  1. [Anotación Manual para la Inyección de Dependencias](#anotación-manual-para-la-inyección-de-dependencias)
  1. [Minificación y Anotación](#minificación-y-anotación)
  1. [Manejo de Excepciones](#manejo-de-excepciones)
  1. [Cómo Nombrar](#cómo-nombrar)
  1. [Estructura de la Aplicación El Principio LIFT](#estructura-de-la-aplicación-el-principio-lift)
  1. [Estructura de la Aplicación](#estructura-de-la-aplicación)
  1. [Modularidad](#modularidad)
  1. [Lógica de Arranque](#lógica-de-arranque)
  1. [Servicios Envoltorios $ de Angular](#servicios-envoltorios--de-angular)
  1. [Pruebas](#pruebas)
  1. [Animaciones](#animaciones)
  1. [Comentarios](#comentarios)
  1. [JSHint](#js-hint)
  1. [Constantes](#constantes)
  1. [Plantillas y Snippets](#plantillas-y-snippets)
  1. [Generador de Yeoman](#generador-de-yeoman)
  1. [Ruteo](#ruteo)
  1. [Automatización de Tareas](#automatización-de-tareas)
  1. [AngularJS Docs](#angularjs-docs)
  1. [Contribuyendo](#contribuyendo)
  1. [Licencia](#licencia)

## `Single Responsibility` (Responsabilidad Única)

### La regla del 1

  - Define 1 componente por archivo.

  El siguiente ejemplo define el módulo `app` y sus dependencias, define un controlador, y defines una fábrica todo en el mismo archivo.

  ```javascript
  //mal
  angular
      .module('app', ['ngRoute'])
      .controller('SomeController', SomeController)
      .factory('someFactory', someFactory);

  function SomeController() { }

  function someFactory() { }
  ```

  Los mismos componentes están separados en su propio archivo.

  ```javascript
  //bien

  // module.js
  angular.module('app', ['ngRoute'])

  // ctrl.js
  angular.module('app')
  .controller('SomeController', function () {
      //código
  })
  
  // factory.js
  angular.module('app')
  .factory('someFactory', function() {
      //código
  })
  ```

**[Volver](#tabla-de-contenidos)**

## IIFE
### Closures de JavaScript

  - Envuelve los componentes AngularJS en una expresión de función(`function expression`) que se invoca inmediatamente Immediately Invoked Function Expression (IIFE).

  *¿Por qué?*: Una IIFE elimina las variables del scope global. Esto ayuda a prevenir que las variables y las declaraciones de funciones vivan más de lo esperado en el scope global, evitando así colisión de variables.

  *¿Por qué?*: Cuando tu código se minimiza y se empaqueta en un archivo único para desplegar al servidor de producción, podrías tener colisión de variables y muchas variables globales. Una IIFE te protege contra ambos, creando una scope por cada archivo.

  ```javascript
  //mal
  // logger.js
  angular
      .module('app')
      .factory('logger', logger);

  // La función logger es añadida como variable global
  function logger() { }

  // storage.js
  angular
      .module('app')
      .factory('storage', storage);

  // la función storage es añadida como variable global
  function storage() { }
  ```

  ```javascript
  //bien
  //así no dejamos ninguna variable global

  // logger.js
  (() => {
      angular.module('app')
      .factory('logger', logger)

      function logger() { }
  })()

  // storage.js
  (() => {
      angular.module('app')
      .factory('storage', storage)

      function storage() { }
  })()
  ```

  - Nota: Para acortar únicamente, el resto de los ejemplos de esta guía podrían omitir la sintaxis IIFE.

  - Nota: IIFE previente que el código de los tests llegue a sus variables privadas, como expresiones regulares o funciones de ayuda que normalmente vienen bien para hacer pruebas por sí solas. Sin embargo, puedes acceder a ellas creando accesorios o accediendo a través de sus componentes. Por ejemplo, poniendo las funciones de ayuda, expresiones regulares o constantes en su propia fábrica.

**[Volver](#tabla-de-contenidos)**

## Módulos

### Evitando la colisión de nombres

  - Use una convención de nombres única con separadores para los sub-módulos.

  *¿Por qué?*: Nombres únicos ayudan a evitar colisiones en los nombres de módulos. Los separadores ayudan a definir los módulos y la jerarquía de sus sub-módulos. Por ejemplo `app` puede ser tu módulo raíz y `app.dashboard` y `app.users` pueden ser módulos que dependen de `app`.

### Definiciones (`Setters`)

  - Declara los módulos sin usar una variable, usando la sintaxis de los setters.

  *¿Por qué?*: Con un componente por archivo, es raro que necesitemos introducir una variable para el módulo.

  ```javascript
  //mal
  const app = angular.module('app', [
      'ngAnimate',
      'ngRoute',
      'app.shared',
      'app.dashboard'
  ])
  ```

  En su lugar usa la sintaxis de los setters

  ```javascript
  //bien
  angular.module('app', [
      'ngAnimate',
      'ngRoute',
      'app.shared',
      'app.dashboard'
  ])
  ```

### Getters

  - Al usar un módulo, evita usar una variable y en su lugar usa encadenamiento con la sintaxis de los getter.

  *¿Por qué?*: Esto hace más legible el código y evita que las variables colisionen.

  ```javascript
  //mal
  var app = angular.module('app')
  app.controller('SomeController', function() {
  })
  ```

  ```javascript
  //bien
  angular.module('app')
  .controller('SomeController', function () {
  })
  ```

### Setting vs Getting

  - Setea sólo una vez y usa get para el resto de instancias.

  *¿Por qué?*: Un módulo debe ser creado sólo una vez y recuperado desde ese punto.

    - Usa `angular.module('app', []);` para setear un módulo.
    - Usa `angular.module('app');` para recuperar un módulo.

### Funciones anónimas vs funciones con nombre
###### [Style [Y024](#style-y024)]

  - No uses funciones con nombre usa funciones anónimas en el callback.

  *¿Por qué?*: Así el código es más legible al tener la ejecución del código donde se va a ejecutar y reduce líneas de código que no aportan más que confusión.
  Las únicas excepciones para usar un nombre serían si la función esta en un fichero externo, o está varias veces repetida en el propio fichero.

  ```javascript
  //mal
  angular.module('app')
  .controller('Dashboard', Dashboard)

  function Dashboard() { }
  ```

  ```javascript
  //bien
  angular.module('app')
  .controller('Dashboard', function() { })
  ```

**[Volver](#tabla-de-contenidos)**

## Controladores

### controllerAs Sintaxis en la Vista

  - Usa la sintaxis [`controllerAs`](http://www.johnpapa.net/do-you-like-your-angular-controllers-with-or-without-sugar/) en lugar del `clásico controlador con $scope`.

  *¿Por qué?*: Los Controladores se construyen, renuevan y proporcionan una nueva instancia única, y la sintaxis `controllerAs` se acerca más a eso que la `sintaxis clásica de $scope`.

  *¿Por qué?*: Promueves el uso de binding usando el "." en el objeto dentro de la Vista (ej. `customer.name` en lugar de `name`), así es más contextual, fácil de leer y evitas problemas de referencia que pueden aparecer con el "punto".

  *¿Por qué?*: Ayuda a evitar usar `$parent` en las Vistas con controladores anidados.

  ```html
  <!-- mal -->
  div(ng-controller="Customer") {{ name }}
  ```

  ```html
  <!-- bien -->
  div(ng-controller="Customer as customer") {{ customer.name }}
  ```

### controllerAs Sintaxis en el Controlador

  - Usa la sintaxis `controllerAs` en lugar del `clásico controlador con $scope`.

  - La sintaxis `controllerAs` usa `this` dentro de los controladores que se asocian al `$scope`

  *¿Por qué?*: `controllerAs` es azúcar sintáctico sobre el `$scope`. Puedes enlazar a la vista y acceder a los métodos del `$scope`.

  *¿Por qué?*: Ayuda a evitar la tentación de usar los métodos del `$scope` dentro de un controller cuando debería ser mejor evitar usarlos o moverlos a una fábrica. Considera usar `$scope` en una factory, o en un controlador sólo cuando sea necesario. Por ejemplo cuando publicas y te suscribes a eventos usando [`$emit`](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$emit), [`$broadcast`](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$broadcast), o [`$on`](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$on) considera mover estos usos a una fábrica e invocarlos desde el controlador.

  ```javascript
  /* mal */
  function Customer($scope) {
      $scope.name = {};
      $scope.sendMessage = function() { };
  }
  ```

  ```javascript
  // bien - pero mira la sección siguiente
  function customer() {
      this.name = {}
      this.sendMessage = () => { }
  }
  ```

### controllerAs con vm
###### [Style [Y032](#style-y032)]

  - No usa una variable para capturar `this` cuando uses la sintaxis `controllerAs`, con los `function arrow` de `ES6` puedes llevar un control de `this`.

  ```javascript
  //mal
  function customer() {
      this.name = {}
      
      this.sendMessage = function() {
          //this puede hacer referencia a this.sendMessage y no es lo que quieres
          console.log(this.name)
      }
  }
  
  //bien
  function customer() {
      this.name = {}

      this.sendMessage = () => {
          //this hace referencia al pariente `function` más cercano, en este caso a customer
          console.log(this.name)
      }
  }
  ```

  Nota: Cuando crees watchers en un controlador usando `controller as`, puedes observar la variable `this.*` usando la siguiente sintaxis.(Crea los watchers con precaución ya que añaden mucha carga al ciclo de digest)

  ```html
  input(ng-model="vm.title")
  ```

  ```javascript
  function someCtrl($scope, $log) {
      this.title = 'Some Title'

      $scope.$watch('this.title', (current, original) => {
          $log.info('this.title was %s', original)
          $log.info('this.title is now %s', current)
      })
  }
  ```

### Miembros Bindeables Arriba

  - No coloques asociaciones de variables por un lado y asignaciones por otra.

    *¿Por qué?*: Esto sólo hace que sea más difícil de cambiar y dar seguimiento al código. Además añade líneas innecesarias dándole más complejidad.
    
  - Agrupa y siempre que sea viable alfabéticamente las variables primitivas, luego las compuestas y por último las funciones.
 
    *¿Por qué?: Esto hace que las variables sean fácilmente localizables y legibles.

  ```javascript
  //mal
  function Sessions() {
      this.gotoSession = gotoSession
      this.refresh = refresh
      this.search = search
      this.sessions = []
      this.title = 'Sessions'

      function gotoSession() {
          /* */
      }

      function refresh() {
          /* */
      }

      function search() {
          /* */
      }
  }
  
  //bien
  function sessions() {
      this.title = 'Sessions'

      this.sessions = []

      this.gotoSession = () => {
          /* ... */
      }

      this.refresh = () => {
          /* ... */
      }

      this.search = () => {
          /* ... */
      }
  }
  ```

### Declaraciones de Funciones para Esconder los Detalles de Implementación

  - Escribir expresiones de funciones(`function expression`) con `const` o `let` ayuda a no confiar en el `hoisting` de JavaScript y ver la ejecución secuencial de la web.
  - Escribir las funciones que se accedan sólo desde el html al final de las declaraciones.

  ```javascript
  //mal
  function avengers(dataservice, logger) {
      var vm = this
      
      vm.avengers = []
      vm.getAvengers = getAvengers
      vm.title = 'Avengers'

      activate()

      function activate() {
          return getAvengers().then(function() {
              logger.info('Activated Avengers View')
          })
      }

      function getAvengers() {
          return dataservice.getAvengers().then(function(data) {
              vm.avengers = data
            
              return vm.avengers
          })
      }
  }
  
  //bien
  function avengers(dataservice, logger) {
      this.title = 'Avengers'

      this.avengers = []

      const activate = () =>
          this.getAvengers()
          .then(() => logger.info('Activated Avengers View'))

      this.getAvengers = () =>
          dataservice.getAvengers()
          .then((data) => {
              this.avengers = data
              
              return this.avengers
          })

      activate()
  }
  ```

### Diferir la Lógica del Controlador

  - Difiera la lógica dentro de un controlador delegándola a servicios y fábricas.

    *¿Por qué?*: La lógica podría ser reutilizada por varios controladores cuando la colocas en un servicio y la expones como una función.

    *¿Por qué?*: La lógica en un servicio puede ser aislada en un test unitario, mientras que la lógica de llamadas en un controlador se puede mockear fácilmente.

    *¿Por qué?*: Elimina dependencias y esconde detalles de implementación del controlador.

  ```javascript

  //mal
  function order($http) {
      this.total = 0

      this.checkCredit = () =>
          $http.get([])
          .then((data) => this.isCreditOk = (this.total <= maxRemainingAmount))
          .catch((error) => // Interpret error)
  }
  
  //bien
  function Order(creditService) {
      vm.total = 0

      this.checkCredit() =>
          creditService.isOrderTotalOk(vm.total)
          .then((isOk) => this.isCreditOk = isOk)
          .catch(creditService.showError)
  }
  ```

### Mantén tus Controladores Enfocados

  - Define un controlador para una vista, no intentes reutilizar el controlador para otras vistas. En lugar de eso, mueve la lógica que se pueda reutilizar a fábricas y deja el controlador simple y enfocado en su vista.

    *¿Por qué?*: Reutilizar controladores con varias vistas es arriesgado y necesitarías buena cobertura de tests `end to end` (e2e) para asegurar que todo funciona bien en la aplicación.

### Asignando Controladores

  - Cuando un controlador debe ser asociado a una vista y cada componente puede ser reutilizado por otros controladores o vistas, define controladores con sus rutas.

    Nota: Si una Vista es cargada por otra además de por la ruta, entonces usa la sintaxis `ng-controller="AvengersCtrl as avengersCtrl"`.

    *¿Por qué?*: Emparejar el controlador en la ruta permite a diferentes rutas invocar diferentes pares de controladores y vistas. Cuando los controladores son asignados en la vista usando [`ng-controller`](https://docs.angularjs.org/api/ng/directive/ngController), esa vista siempre estará asociada al mismo controlador.

 ```javascript
  //mal - cuando se use con una ruta y queramos asociarlo dinámicamente
  // route-config.js
  angular.module('app')
  .config(function($routeProvider) {
      $routeProvider
      .when('/avengers', {
          templateUrl: 'avengers.html'
      })
  })
  ```

  ```html
  <!-- avengers.html -->
  div(ng-controller="AvengersCtrl as avengersCtrl")
  ```

  ```javascript
  //bien
  // route-config.js
  angular.module('app')
  .config(function ($routeProvider) {
      $routeProvider.when('/avengers', {
          templateUrl: 'avengers.html',
          controller: 'AvengersCtrl',
          controllerAs: 'avengersCtrl'
      })
  })
  ```

  ```html
  <!-- avengers.html -->
  div
  ```

**[Volver](#tabla-de-contenidos)**

## Servicios

### Singletons

  - Los Servicios son instanciados con un `new`, usan `this` para los métodos públicos y las variables. Ya que son muy similares a las factories, usa una factory en su lugar por consistencia.

    Nota: [Todos los servicios AngularJS son singletons](https://docs.angularjs.org/guide/services). Esto significa que sólo hay una instancia de un servicio por inyector.

  ```javascript
  // service
  angular.module('app')
  .service('logger', function () {
      this.logError = (msg) => {
          /* */
      }
  })
  ```

  ```javascript
  // factory
  angular.module('app')
  .factory('logger', function () {
      return {
            logError: (msg) => {
                /* */
            }
       }
  })
  ```

**[Volver](#tabla-de-contenidos)**

## Fábricas

### Responsabilidad Única

  - Las fábricas deben tener una [responsabilidad única](http://en.wikipedia.org/wiki/Single_responsibility_principle), que es encapsulada por su contexto. Cuando una fábrica empiece a exceder el principio de responsabilidad única, una nueva fábrica debe ser creada.

### Singletons

  - Las Fábricas son singleton y devuelven un objeto que contiene las variables del servicio.

    Nota: [Todos los servicios AngularJS son singletons](https://docs.angularjs.org/guide/services).

### Miembros accesibles Arriba

  - Devuelve directamente el objeto a usar, ordena las propiedades y luego los métodos alfabéticamente, deja un espacio entre las propiedades primiticas y los métodos, así como entre métodos y propiedades complejas.

    *¿Por qué?*: Reducirás el número de líneas y aumentarás la legibilidad.

  ```javascript
  //mal
  function dataService() {
      let someValue = ''
    
      const save = () => {
          /* */
      }

      const validate = () => {
          /* */
      }

      return {
          save: save,
          someValue: someValue,
          validate: validate
      }
  }
  
  //mal
  function dataService() {
      let someValue = ''

      const service = {
          save: save,
          someValue: someValue,
          validate: validate
      }
      
      return service

      function save() {
          /* */
      }

      function validate() {
          /* */
      }
  }
  
  //bien
  function dataService() {
      return {
          someValue: '',

          save() {
              //código
          },

          validate() {
              //código
          }
      }
  }
  ```


### Declaración de Funciones para Esconder los Detalles de Implementación

  ```javascript
  //mal
   function dataservice($http, $location, $q, exception, logger) {
      let isPrimed = false
      let primePromise

      const getAvengers = function() {
          // código
      }

      const getAvengerCount = function() {
          // código
      }

      const getAvengersCast = function() {
          // código
      }

      const prime = function() {
          // código
      }

      const ready = function(nextPromises) {
          // código
      }

      const service = {
          getAvengersCast: getAvengersCast,
          getAvengerCount: getAvengerCount,
          getAvengers: getAvengers,
          ready: ready
      }

      return service
  }

  //mal
  function dataservice($http, $location, $q, exception, logger) {
      let isPrimed = false
      let primePromise

      const service = {
          getAvengersCast: getAvengersCast,
          getAvengerCount: getAvengerCount,
          getAvengers: getAvengers,
          ready: ready
      }

      return service

      ////////////

      function getAvengers() {
          // código
      }

      function getAvengerCount() {
          // código
      }

      function getAvengersCast() {
          // código
      }

      function prime() {
          // código
      }

      function ready(nextPromises) {
          // código
      }
  }

  //bien
  function dataservice($http, $location, $q, exception, logger) {
      let isPrimed = false
      let primePromise

      return {
          getAvengersCast() {
              //código
          },

          getAvengerCount() {
              //código
          },

          getAvengers() {
              //código
          },

          ready() {
              //código
          }
      }
  }
  ```

**[Volver](#tabla-de-contenidos)**

## Servicios de Datos

### Separate Data Calls

  - Refactoriza la lógica para hacer operaciones e interaciones con datos en una factory. Crear data services responsables de las peticiones XHR, local storage, memoria o cualquier otra operación con datos.

    *¿Por qué?*: La responsabilidad del controlador es la de presentar y recoger información para la vista. No debe importarle cómo se consiguen los datos, sólo saber cómo conseguirlos. Separando los datos de servicios movemos la lógica de cómo conseguirlos al servicio de datos, y deja el controlador simple, enfocándose en la vista.

    *¿Por qué?*: Hace más fácil testear (mock o real) las llamadas de datos cuando testeamos un controlador que usa un data service.

    *¿Por qué?*: La implementación del servicio de datos puede tener código muy específico para usar el repositorio de datos. Podría incluir cabeceras, cómo hablar a los datos, u otros servicios como $http. Separando la lógica en servicios de datos encapsulamos la lógica en un único lugar, escondiendo la implementación de sus consumidores externos (quizá un controlador), de esta forma es más fácil cambiar la implementación.

  ```javascript
  //mal
  // dataservice factory
  angular
      .module('app.core')
      .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', 'logger'];

  function dataservice($http, logger) {
      return {
          getAvengers: getAvengers
      };

      function getAvengers() {
          return $http.get('/api/maa')
              .then(getAvengersComplete)
              .catch(getAvengersFailed);

          function getAvengersComplete(response) {
              return response.data.results;
          }

          function getAvengersFailed(error) {
              logger.error('XHR Failed for getAvengers.' + error.data);
          }
      }
  }
  
  //bien
  // dataservice factory
  angular.module('app.core')
  .factory('dataservice', function ($http, logger) {
      return {
          getAvengers() {
              return $http.get('/api/maa')
              .then(() => response.data.results)
              .catch(() => logger.error('XHR Failed for getAvengers.' + error.data))
          }
      }
  })
  ```

    Nota: El servicio de datos es llamado desde los consumidores, como el controlador, escondiendo la implementación del consumidor como se muestra a continuación.

  ```javascript
  //mala
  // controller llamando a la factory del data service
  angular
      .module('app.avengers')
      .controller('Avengers', Avengers);

  Avengers.$inject = ['dataservice', 'logger'];

  function Avengers(dataservice, logger) {
      var vm = this;
      vm.avengers = [];

      activate();

      function activate() {
          return getAvengers().then(function() {
              logger.info('Activated Avengers View');
          });
      }

      function getAvengers() {
          return dataservice.getAvengers()
              .then(function(data) {
                  vm.avengers = data;
                  return vm.avengers;
              });
      }
  }
  //bien
  // controller llamando a la factory del data service
  angular.module('app.avengers')
  .controller('Avengers', function (dataservice, logger) {
      this.avengers = []

      const activate = () =>
          getAvengers()
          .then(() => logger.info('Activated Avengers View'))
      }

      const getAvengers = () =>
          dataservice.getAvengers()
          .then((data) => {
              this.avengers = data

              return this.avengers
          })
      }

      activate()
  }
  ```

### Regresa una Promesa desde las Llamadas a Datos

  - Cuando llamamos a servicios de datos que devuelven una promesa como $http, devuelve una promesa en la llamada de tu función también.

    *¿Por qué?*: Puedes encadenar promesas y hacer algo cuando la llamada se complete y resuelva o rechace la promesa.

  ```javascript
  //bien
  const getAvengers = () => {
        /*
           Step 2
           Pide al servicio de datos los datos y espera por la promesa
        */
        dataservice.getAvengers()
        .then((data) => {
            /*
               Step 3
               setea los datos y resuelve la promesa
            */
            this.avengers = data;
            
            return this.avengers
        })
  
  const activate = () =>
      getAvengers().then(function() {
          /*
             Step 4
             Ejecuta una acción cuando se resuelva la promesa final
          */
          logger.info('Activated Avengers View')
      })

  activate()
  ```

    **[Volver](#tabla-de-contenidos)**

## Directivas
### Limitadas a 1 Por Archivo

  - Crea una directiva por archivo. Llama al archivo como la directiva.

    *¿Por qué?*: Es muy fácil colocar todas las directivas en un archivo, pero será más difícil de partir para ser compartida entre aplicaciones, módulos o para un simple módulo.

    *¿Por qué?*: Una directiva por archivo es fácil de mantener.

  ```javascript
  //mal
  /* directives.js */

  angular.module('app.widgets')
  /* directiva de órdenes que es específica del módulo de órdenes*/
  .directive('orderCalendarRange', orderCalendarRange)

  /* directiva de ventas que puede ser usada en algún otro lado a lo
  largo de la aplicación de ventas */
  .directive('salesCustomerInfo', salesCustomerInfo)

  /* directiva de spinner que puede ser usada a lo largo de las
  aplicaciones */
  .directive('sharedSpinner', sharedSpinner);

  function orderCalendarRange() {
      //código
  }

  function salesCustomerInfo() {
      //código
  }

  function sharedSpinner() {
      //código
  }
  ```

  ```javascript
  //bien
  /* calendarRange.directive.js */

  /*
      @desc directiva de órdenes que es específica al módulo de órdenes en la compañía Acme
      @example <div acme-order-calendar-range></div>
  */
  angular.module('sales.order')
  .directive('acmeOrderCalendarRange', function () {
      //código
  })
  
  //bien
  /* customerInfo.directive.js */

  /*
      @desc directiva de ventas que puede ser usada a lo largo de la aplicación de ventas en la compañía Acme
      @example <div acme-sales-customer-info></div>
  */
  angular.module('sales.widgets')
  .directive('acmeSalesCustomerInfo', function () {
      //código
  })

  //bien
  /* spinner.directive.js */

  /*
      @desc directiva de spinner que puede ser usada a lo largo de las aplicaciones en la compañía Acme
      @example <div acme-shared-spinner></div>
  */
  angular.module('shared.widgets')
  .directive('acmeSharedSpinner', function sharedSpinner() {
      //código
  })
  ```

    Nota: Hay muchas formas de llamar a las directivas, especialmente cuando pueden ser usadas en ámbitos específicos. Elige un nombre que tenga sentido para la directiva y que su archivo sea distintivo y claro. Hemos visto algunos ejemplos antes, pero veremos más en la sección de cómo nombrar.

### Manipula el DOM en una Directiva
###### [Style [Y072](#style-y072)]

  - Cuando manipules DOM directamente, usa una directiva. Si hay alguna alternativa como usando CSS para cambiar los estilos o los [animation services](https://docs.angularjs.org/api/ngAnimate), Angular templating, [`ngShow`](https://docs.angularjs.org/api/ng/directive/ngShow) o [`ngHide`](https://docs.angularjs.org/api/ng/directive/ngHide), entonces úsalos en su lugar. Por ejemplo, si la directiva sólo muestra o esconde elementos, usa ngHide/ngShow.

    *¿Por qué?*: Manipular el DOM puede ser difícil de testear, debugear y normalmente hay mejores maneras (e.g. CSS, animations, templates)

### Provee un Prefijo Único de Directiva

  - Proporciona un prefijo corto, único y descriptivo como `acmeSalesCustomerInfo` que se declare en el HTML como `acme-sales-customer-info`.

    *¿Por qué?*: El prefijo corto y único identifica el contexto de la directiva y el origen. Por ejemplo el prefijo `cc-` puede indicar que la directiva en particular es parte de la aplicación CodeCamper, mientras que `acme-` pudiera indicar que la directiva es de la compañía Acme.

    Nota: Evita `ng-` ya que está reservado para las directivas AngularJS. Estudia sabiamente las directivas usadas para evitar conflictos de nombres, como `ion-` de [Ionic Framework](http://ionicframework.com/).

### Limitate a Elementos y Atributos

  - Cuando crees directivas que tengan sentido como elemento, restringe `E` (elemento personalizado) y opcionalmente restringe `A` (atributo personalizado). Generalmente, si puede ser su control propio, `E` es apropiado, La pauta general es permitir `EA` pero intenta implementarlo como un elemento cuando sea un elemento único y como un atributo cuando añada mejoras a su propio elemento existente en el DOM.

    *¿Por qué?*: Mientras permitamos que una directiva sea usada como una clase, si esa directiva realmente está actuando como un elemento, tiene sentido que sea un elemento, o al menos un atributo.

    Nota: En AngularJS 1.3+ EA es el valor por defecto

  ```html
  //mal
  .my-calendar-range
  ```

  ```javascript
  angular.module('app.widgets')
  .directive('myCalendarRange', function () {
      var directive = {
          link: link,
          templateUrl: '/template/is/located/here.html',
          restrict: 'C'
      }
      
      return directive

      function link(scope, element, attrs) {
        //código
      }
  })
  ```

  ```html
  //bien
  my-calendar-range
  div(my-calendar-range)
  ```

  ```javascript
  angular.module('app.widgets')
  .directive('myCalendarRange', function () {
      return {
          restrict: 'EA',
          templateUrl: '/template/is/located/here.html',
          
          link() {
              //código
          }
      }
  }
  ```

### Directivas y ControllerAs

  - Usa la sintaxis `controller as` con una directiva para ser consistente con el uso de `controller as` con los pares de vista y controlador.

    Nota: La siguiente directiva demuestra algunas de las formas en las que puedes usar el scope dentro del link y el controlador de una directiva, usando controllerAs. He puesto la template para dejarlo todo en un lugar.

    Nota: En cuanto a la inyección de dependencias, mira [Identificar Dependencias Manualmente](#manual-annotating-for-dependency-injection).

    Nota: Nótese que el controlador de la directiva está fuera del closure de la directiva. Este estilo elimina los problemas que genera la inyección de dependencias donde la inyección es creada en un código no alcanzable después del `return`.

  ```html
  div(
      max="77"
      my-example
  )
  ```

  ```javascript
  angular.module('app')
  .directive('myExample', function myExample($scope) {
      return {
          bindToController: true, // porque el scope is aislado
          controllerAs: 'exampleCtrl',
          restrict: 'EA',
          templateUrl: 'app/feature/example.directive.html',

          scope: {
              max: '='
          },

          controller($scope) {
              // Inyectando el $scope solo para comparación
              this.min = 3
        
              console.log('CTRL: $scope.exampleCtrl.min = %s', $scope.exampleCtrl.min)
              console.log('CTRL: $scope.exampleCtrl.max = %s', $scope.exampleCtrl.max)
              console.log('CTRL: vm.min = %s', this.min)
              console.log('CTRL: vm.max = %s', this.max)
          },

          link(scope, el, attr, ctrl) {
              console.log('LINK: scope.min = %s *** should be undefined', scope.min)
              console.log('LINK: scope.max = %s *** should be undefined', scope.max)
              console.log('LINK: scope.exampleCtrl.min = %s', scope.exampleCtrl.min)
              console.log('LINK: scope.exampleCtrl.max = %s', scope.exampleCtrl.max)
          }
      }
  }
  ```

  ```html
  //example.directive.html
  div hello world
  div (max={{exampleCtrl.max}})
      input(ng-model="exampleCtrl.max")
  div(min={{exampleCtrl.min}})
      input(ng-model="exampleCtrl.min")
  ```

  - Usa `bindToController = true` cuando uses `controller as` con una directiva cuando quieras asociar el scope exterior al scope del controller de la directiva.

    *¿Por qué?*: Lo hace más fácil a la hora de asociar el scope exterior al scope del controlador de la directiva.

    Nota: `bindToController` fue introducido en Angular 1.3.0.

  ```html
  div(
      max="77"
      my-example
  )
  ```

  ```javascript
  angular.module('app')
  .directive('myExample', function () {
      return {
          bindToController: true,
          controllerAs: 'exampleCtrl',
          restrict: 'EA',
          templateUrl: 'app/feature/example.directive.html',

          scope: {
              max: '='
          },

          controller() {
              this.min = 3

              console.log('CTRL: this.min = %s', this.min)
              console.log('CTRL: this.max = %s', this.max)
          }
      }
  }
  ```

  ```html
  <!-- example.directive.html -->
  <div>hello world</div>
  <div>max={{exampleCtrl.max}}<input ng-model="exampleCtrl.max"/></div>
  <div>min={{exampleCtrl.min}}<input ng-model="exampleCtrl.min"/></div>
  ```

**[Volver](#tabla-de-contenidos)**

## Resolviendo Promesas en un Controlador

### Promesas de Activación de un Controlador
###### [Style [Y080](#style-y080)]

  - No uses funciones si no son necesarias.

    *¿Por qué?*: Añades líneas y por tanto complejidad a la página innecesarias, usa siempre variables descriptivas y si fuese necesario como apoyo algún comentario.

  ```javascript
  //mal
  function avengersCtrl(dataservice) {
      vm.avengers = []
      vm.title = 'Avengers'

      activate()

      ////////////

      function activate() {
          return dataservice.getAvengers()
          .then((data) => {
              vm.avengers = data

              return vm.avengers
          })
      }
  }
  
  //bien
  function avengersCtrl(dataservice) {
      this.avengers = []
      this.title = 'Avengers'

      //ACTIVATE
      dataservice.getAvengers()
      .then((data) => {
          this.avengers = data

          return this.avengers
      })
  }
  ```

### Resolución de Promesas en la Ruta

  - Cuando un controlador depende en una promesa a ser resuelta antes de que el controlador se active, resuelve esas dependencias en el `$routeProvider` antes de que la lógica del controlador sea ejecutada. Si necesitas condicionalmente cancelar una ruta antes de que el controlador sea activado, usa un route resolver.

  - Usa un route resolver cuando decidas cancelar la ruta antes de hacer la transición a la Vista.

    *¿Por qué?*: Un controlador puede requerir datos antes de que se cargue. Esos datos deben venir desde una promesa a través de una fábrica o de [$http](https://docs.angularjs.org/api/ng/service/$http). Usando un [route resolve](https://docs.angularjs.org/api/ngRoute/provider/$routeProvider) permite que la promesa se resuelva antes de que la lógica del controlador se ejecute, así puedes tomar decisiones basándote en los datos de la promesa.

    *¿Por qué?*: El código se ejecuta después de la ruta y la función activate del controlador. La Vista empieza a cargar al instante. El bindeo de los datos se ejecutan cuando la promesa del activate se resuelva. Una animación de "Cargando" se puede mostrar durante la transición de la vista (via ng-view o ui-view)

    Nota: El código se ejecuta antes que la ruta mediante una promesa. Rechazar la promesa cancela la ruta. Resolverla hace que la nueva vista espere a que la ruta sea resuelta. Una animación de "Cargando" puede ser mostrada antes de que se resuelva. Si quieres que la Vista aparezca más rápido y no necesitas un checkpoint para decidir si puedes mostrar o no la view, considera la técnica [controller `activate`](#style-y080).

  ```javascript
  //mal
  angular.module('app')
  .controller('avengers', function (movieService) {
      // sin resolver
      this.movies
      // resulta asincronamente
      movieService.getMovies()
      .then((response) => this.movies = response.movies)
  })
  ```

  ```javascript
  //bien
  // route-config.js
  angular.module('app')
  .config(($routeProvider) => {
      $routeProvider
      .when('/avengers', {
          controller: 'AvengersCtrl',
          controllerAs: 'avengersCtrl',
          templateUrl: 'avengers.html',

          resolve: {
              moviesPrepService(movieService) {
                  return movieService.getMovies()
              }
          }
      })
  }

  // avengers.js
  angular.module('app')
  .controller('AvengersCtrl', function (moviesPrepService) {
        this.movies = moviesPrepService.movies
  })
  ```
**[Volver](#tabla-de-contenidos)**

## Manejo de Excepciones

### Decoradores

  - Usa un decorador o [decorator](https://docs.angularjs.org/api/auto/service/$provide#decorator), en tiempo de configuración usando el servicio [`$provide`](https://docs.angularjs.org/api/auto/service/$provide), en el servicio [`$exceptionHandler`](https://docs.angularjs.org/api/ng/service/$exceptionHandler) para realizar acciones personalizadas cuando una excepción ocurra.

    *¿Por qué?*: Provee una manera consistente de manejar excepciones de AngularJS que no están siendo capturadas en tiempo de desarrollo o en tiempo de ejecución.

    Nota: Otra opción es sobreescribir el servicio en lugar de usar un decorador. Esto está bien, pero si quiere mantener el comportamiento por default y extenderlo se recomienda usar un decorador.

    ```javascript
    //bien
    angular.module('blocks.exception')
    .config(($provide) =>
        $provide.decorator('$exceptionHandler', ($delegate, toastr) =>
            function(exception, cause) {
                $delegate(exception, cause)

                const errorData = {
                    cause,
                    exception
                }
                /*
                    Pudieramos agregar el error a la colección de un servicio,
                    agregar los errores en el $rootScope,
                    logear los errores a un servidor remoto,
                    o logear localmente. O arrojarlos llanamente.
                    Dependende totalmente de tí.
                    arrojar excepción;
                */
                toastr.error(exception.msg, errorData)
            }
        )
    )
    ```

### Cachadores de Excepciones

  - Crea una fábrica que exponga una interfaz para cachar y manejar excepciones elegantemente.

    *¿Por qué?*: Provee de una manera consistente de cachar excepciones que puedan ser arrojadas en tu código (e.g. durante llamadas XHR o promesas que fallaron).

    Nota: El cachador de excepciones es bueno para cachar y reaccionar a excepciones específicas de llamadas que tu sabes van a arrojar una. Por ejemplo, al hacer una llamada XHR para obtener datos desde un servicio web remoto y quieres cachar cualquier excepción de ese servicio y reaccionar únicamente.

    ```javascript
    //bien
    angular.module('blocks.exception')
    .factory('exception', (logger) => {
        return {
            catcher(message) {
                return function(reason) {
                    logger.error(message, reason)
                }
            }
        }
    }
    ```

### Errores de Ruta

  - Maneja y logea todos los errores de enrutamiento usando [`$routeChangeError`](https://docs.angularjs.org/api/ngRoute/service/$route#$routeChangeError).

    *¿Por qué?*: Provee una manera consistente de manejar todos los
    errores de enrutamiento.

    *¿Por qué?*: Potencialmente provee una mejor experiencia de usuario si un error de enrutamiento ocurre y tu los rediriges a una pantalla amigable con más detalles u opciones de recuperación.

    ```javascript
    //bien
    function handleRoutingErrors() {
        /*
            Route cancellation:
            Cancelación de la Ruta:
            En un error de ruteo, ir al dashboard.
            Proveer una cláusula de salida si trata de hacerlo dos veces.
        */
        $rootScope.$on('$routeChangeError', (event, current, previous, rejection) => {
                const DESTINATION = (current && (current.title || current.name || current.loadedTemplateUrl)) || 'unknown target'
               
                const MSG = `Error routing to ${DESTINATION}. ` + (rejection.msg || '')
                /*
                    Optionally log using a custom service or $log.
                    Opcionalmente logear usando un servicio personalizado o $log.
                    (Don't forget to inject custom service)
                */
                logger.warning(MSG, [current])
            }
        )
    }
    ```

**[Volver](#tabla-de-contenidos)**

## Cómo Nombrar

### Pautas para nombrar

  - Usa el mismo nombre para todos los archivos del mismo tipo, que dependa la carpeta su identificación:
    * el nombre del archivo (`avengers/ctrl.js`)
    * el nombre del componente registrado en Angular (`AvengersCtrl as avengersCtrl`)

    *¿Por qué?*: Porque si ya van a estar en carpetas diferentes sólo vamos a crear redundancia, de esta forma enseguida se sabe que son los archivos que contiene la carpeta, ides como sublime text te permiten buscar por carpeta y fichero.

## Estructura de la Aplicación El Principio LIFT
### LIFT

  - Estructura tu aplicación de tal manera que puedas Localizar (`L`ocate) tu código rápidamente, Identificar (`I`dentify) el código de un vistazo, mantener la estructura más plana (`F`lattest) que puedas, y Trata (`T`ry) de mantenerte DRY. La estructura debe de seguir estas 4 pautas básicas.

    *¿Por qué LIFT?*: Provee una estructura consistente que escala bien, es modular, y hace más fácil incrementar la eficiencia de los desarrolladores al encontrar código rápidamente. Otra manera de checar la estructura de tu aplicación es preguntarte a ti mismo: ¿Qué tan rápido puede abrir y trabajar en todos los archivos relacionados a una caracteristica?

    Cuando encuentro que mi estructura no se siente cómoda, regreso y reviso estas pautas LIFT

    1. `L`ocating - Localizar nuestro código es fácil
    2. `I`dentify - Identificar código de un vistazo
    3. `F`lat - Estructura plana tanto como sea posible
    4. `T`ry - Tratar de mantenerse DRY (Don't Repeat Yourself) or T-DRY

### Estructura de Carpetas-por-Característica

  - Crea carpetas llamadas de acuerdo al característica que representan. Cuando una carpeta crezca para contener más de 7 archivos, comienza a considerar la creación de una carpeta para ellos. Tu límite puede ser diferente, así que ajusta de acuerdo a tus necesidades.

    *¿Por qué?*: Un desarrollador puede localizar el código, identificar cada qué representa cada archivo de un vistazo, la estructura es tan plana como puede ser, y no hay nombres repetidos o redundantes.

    *¿Por qué?*: Las pautas LIFT estarán cubiertas.

    *¿Por qué?*: Ayuda a evitar que la aplicación se sature a través de organizar el contenido y conservarlo alineado con las pautas LIFT.

    *¿Por qué?*: Cuando hay demasiados archivos (10+) localizarlos es más fácil con una estructura de directorios consistente y más difíciles en una estructura plana.

    ```javascript
    //mal
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

    //mal
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

    //bien

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

**[Volver](#tabla-de-contenidos)**
## Lógica de Arranque
### Configuración

  - Inyecta código dentro de [module configuration](https://docs.angularjs.org/guide/module#module-loading-dependencies) que necesite ser configurado antes de correr la aplicación angular. Candidatos ideales incluyen providers y constantes.

    *¿Por qué?*: Esto hace más fácil tener menos lugares para la configuración.

  ```javascript
  angular
  .module('app')
  .config((routerHelperProvider, exceptionHandlerProvider, toastr) => {
      exceptionHandlerProvider.configure(config.appErrorPrefix)

      routerHelperProvider.configure({
          docTitle: 'NG-Modular: '
      })

      toastr.options.positionClass = 'toast-bottom-right'
      toastr.options.timeOut = 4000
  })
  ```

### Bloques Run

  - Cualquier código que necesite ser ejecutado cuando una aplicación arranca debe ser declarado en una fábrica, ser expuesto a través de una función, o inyectado en el [bloque run](https://docs.angularjs.org/guide/module#module-loading-dependencies).

    *¿Por qué?*: Código que está directamente en un bloque run puede ser difícil de testear. Colocarlo en una fábrica lo hace fácil de abstraer y mockear.

  ```javascript
  angular
  .module('app')
  .run((authenticator, translator) => {
      authenticator.initialize()
      translator.initialize()
  })
  ```

**[Volver](#tabla-de-contenidos)**

## Servicios Envoltorios $ de Angular

### $document y $window

  - Usa [`$document`](https://docs.angularjs.org/api/ng/service/$document) y [`$window`](https://docs.angularjs.org/api/ng/service/$window) en lugar de `document` y `window`.

    *¿Por qué?*: Estos servicios son envueltos por Angular y son más fáciles de testear en lugar de usar document y window en las pruebas. Esto te ayuda a evitar que tener que mockear document y window tu mismo.

### $timeout y $interval

  - Usa [`$timeout`](https://docs.angularjs.org/api/ng/service/$timeout) y [`$interval`](https://docs.angularjs.org/api/ng/service/$interval) en lugar de `setTimeout` y `setInterval` .

    *¿Por qué?*: Estos servicios están envueltos por Angular y son más fáciles de testear y manejar el ciclo digest de AngularJS así que mantienen el bindeo de los datos en sincronización.

**[Volver](#tabla-de-contenidos)**

## Pruebas
Las pruebas unitarias ayudan a mantener el código limpio, así que incluyo algunas de mis recomendaciones en los fundamentos del testeo unitario con links para mayor información.

### Escribe Pruebas con Historias

  - Escribe un conjunto de pruebas para cada historia. Comienza con un test vacío y llénalo conforme escribas el código para la historia.

    *¿Por qué?*: Escribir descripciones para la prueba ayuda a definir claramente qué es lo que tu historia hará, qué no hará, y cómo puedes medir el éxito.

    ```javascript
    it('should have Avengers controller', function() {
        // TODO
    });

    it('should find 1 Avenger when filtered by name', function() {
        // TODO
    });

    it('should have 10 Avengers', function() {
        // TODO (mock data?)
    });

    it('should return Avengers via XHR', function() {
        // TODO ($httpBackend?)
    });

    // y así
    ```

### Librería para las Pruebas

  - Usa [Jasmine](http://jasmine.github.io/) o [Mocha](http://mochajs.org) para las pruebas unitarias.

    *¿Por qué?*: Ambas Jasmine y Mocha son usadas ampliamente por la comunidad de AngularJS. Ambas son estables, bien mantenidas, y proveen de características de pruebas robustas.

    Nota: Cuando uses Mocha, también considera elegir una librería como [Chai](http://chaijs.com).

### Test Runner

  - Usa [Karma](http://karma-runner.github.io) como test runner.

    *¿Por qué?*: Karma es fácil de configurar para correr una vez o automáticamente cuando cambias tu código.

    *¿Por qué?*: Karma encaja en tu proceso de Integración Continua fácilmente por sí sola o a través de Grunt o Gulp.

    *¿Por qué?*: Algunos IDE's están comenzando a integrarse con Karma, tal como [WebStorm](http://www.jetbrains.com/webstorm/) y [Visual Studio](http://visualstudiogallery.msdn.microsoft.com/02f47876-0e7a-4f6c-93f8-1af5d5189225).

    *¿Por qué?*: Karma funciona bien con líderes de automatización de tareas tales como [Grunt](http://www.gruntjs.com) (con [grunt-karma](https://github.com/karma-runner/grunt-karma)) y [Gulp](http://www.gulpjs.com) (con [gulp-karma](https://github.com/lazd/gulp-karma)).

### Stubear y Espíar
  - Usa [Sinon](http://sinonjs.org/) para el stubeo y espíar.

    *¿Por qué?*: Sinon funciona bien con ambos Jasmine y Mocha y extiende las características de stubeo y espío que ellos ofrecen.

    *¿Por qué?*: Sinon hace más fácil cambiar entre Jasmine y Mocha, si quieres probar ambos.

### Headless Browser
  - Usa [PhantomJS](http://phantomjs.org/) para correr tus pruebas en un servidor.

    *¿Por qué?*: PhantomJS es un navegador headless que ayuda a correr las pruebas necesitar una navegador "visual". Así que no necesitas instalar Chrome, Safari u otros navegadores en tu servidor.

    Nota: Aún debes testear en todos los navegadores de tu entorno, así como sea apropiado para tu audiencia meta.

### Mitiga Palabras Globales dentro de las Reglas de JSHint en las Pruebas

  - Relaja las reglas en tu código de prueba para permitir palabras globales comúnes como `describe` y `expect`.

    *¿Por qué?*: Tus pruebas son código y requieren la misma atención y reglas de calidad de código que todo tu código de producción. Sin embargo, variables globales usadas por el framework para pruebas, por ejemplo, puede ser relajado al incluir esto en tus specs de prueba.

    ```javascript
    /* global sinon, describe, it, afterEach, beforeEach, expect, inject */
    ```

  ![Testing Tools](https://raw.githubusercontent.com/johnpapa/angularjs-styleguide/master/assets/testing-tools.png)

### Organizando las Pruebas

  - Coloca archivos de pruebas unitarias (specs) lado a lado con tu código del cliente. Coloca tus specs que cubren la integración con el servidor o que prueban múltiples componentes en un directorio `tests` separado.

    *¿Por qué?*: Las Pruebas Unitarias tiene una correlación directa con un componente y archivo específico en tu código fuente.

    *¿Por qué?*: Es más fácil mantenerlas actualizadas ya que siempre están a la vista. Al escribir código ya sea que realices TDD o pruebes durante el desarrollo o después del desarrollo, los specs están lado a lado y nunca fuera de la vista o de la mente, así es más probable que sean mantenidas lo cual ayuda a mantener la cobertura de pruebas.

    *¿Por qué?*: Cuando actualices código fuente es más fácil ir y actualizar las pruebas al mismo tiempo.

    *¿Por qué?*: Colocarlas lado a lado hace más fácil encontrarlas y fácil de moverlas con el código fuente si mueves la fuente.

    *¿Por qué?*: Tener el spec cerca hace más fácil al lector del código fuente aprender cómo se supone que el componente es usado y descubrir sus propias limitaciones.

    *¿Por qué?*: Separar specs para que no estén un build de distribución es fácil con grunt o gulp.

    ```
    /src/client/app/customers/customer-detail.controller.js
                             /customer-detail.controller.spec.js
                             /customers.controller.spec.js
                             /customers.controller-detail.spec.js
                             /customers.module.js
                             /customers.route.js
                             /customers.route.spec.js
    ```

**[Volver](#tabla-de-contenidos)**

## Animaciones

### Uso

  - Usa sutiles [animaciones con AngularJS](https://docs.angularjs.org/guide/animations) para hacer transiciones entre estados en vistas y elementos visuales primarios. Incluye el [módulo ngAnimate](https://docs.angularjs.org/api/ngAnimate). Las 3 claves son sutil, fluido, transparente.

    *¿Por qué?*: Animaciones sutiles pueden mejorar la Experiencia de Usuario cuando son usadas apropiadamente.

    *¿Por qué?*: Animaciones sutiles pueden mejorar el rendimiento percibido como una transición de vista.

### Sub Segundos

  - Usa duraciones cortas para las animaciones. Yo generalmente empiezo con 300ms y ajusto hasta que es apropiado.

    *¿Por qué?*: Animaciones largas pueden tener el efecto contrario en la Experiencia de Usuario y el rendimiento percibido al dar la apariencia de una aplicación lenta.

### animate.css

  - Usa [animate.css](http://daneden.github.io/animate.css/) para animaciones convencionales.

    *¿Por qué?*: Las animaciones que animate.css provee son rápidas, fluidas, y fáciles de agregar en tu aplicación.

    *¿Por qué?*: Provee consistencia en tus animaciones.

    *¿Por qué?*: animate.css está ampliamente usado y testeado.

    Nota: Ve este [ excelente post de Matias Niemelä sobre animaciones AngularJS](http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html)

**[Volver](#tabla-de-contenidos)**

## Comentarios

### jsDoc

  - Si planeas producir documentación, usa la sintaxis [`jsDoc`](http://usejsdoc.org/) para documentar nombres de funciones, descripción, parámetros y devoluciones. Usa `@namespace` y `@memberOf` para igualar la estructura de tu aplicación.

    *¿Por qué?*: Puedes generar (y regenerar) documentación desde tu código, en lugar de escribirla desde cero.

    *¿Por qué?*: Provee consistencia al usar una herramienta industrial común.

    ```javascript
    /**
     * Logger Factory
     * @namespace Factories
     */
    (function() {
      angular
      .module('app')
      .factory('logger', logger);

      /**
       * @namespace logger
       * @desc Application wide logger
       * @memberOf Factories
       */
      function logger($log) {
          return {
             logError
          }

          ////////////

          /**
           * @name logError
           * @desc Logs errors
           * @param {String} msg Message to log
           * @returns {String}
           * @memberOf Factories.Logger
           */
          function logError(msg) {
              const LOGGEDMSG = `Error: ${msg}`

              $log.error(LOGGEDMSG)

              return LOGGEDMSG
          }
      }
    })()
    ```

**[Volver](#tabla-de-contenidos)**

## Generador de Yeoman

Puedes usar el [generador de yeoman HotTowel](http://jpapa.me/yohottowel) para crear una aplicación que te sirve como punto de inicio en Angular que sigue esta guía de estilos.

1. Instala generator-hottowel

  ```
  npm install -g generator-hottowel
  ```

2. Crea un nuevo directorio y entra en el

  ```
  mkdir myapp
  cd myapp
  ```

3. Corre el generador

  ```
  yo hottowel helloWorld
  ```

**[Volver](#tabla-de-contenidos)**

## Enrutamiento
Enrutamiento del lado del Cliente es importante para crear un flujo de navegación entre vistas y vistas de composición que están hechas de muchas pequeñas plantillas y directivas.

  - Usa el [AngularUI Router](http://angular-ui.github.io/ui-router/) para ruteo del lado del cliente.

    *¿Por qué?*: UI Router ofrece todas las características del router de Angular mas algunas adicionales incluyendo rutas anidadas y estados.

    *¿Por qué?*: La sintaxis es bastante similar al router de Angular y es fácil de migrar al UI Router.

  - Define rutas para vistas en el módulo dónde éstas existen. Cada módulo debería contener las rutas para las vistas en ese módulo.

    *¿Por qué?*: Cada módulo debe ser capaz de funcionar por sí mismo.

    *¿Por qué?*: Al remover un módulo o al agregar un módulo, la aplicación solo contendrá rutas que apunten a las vistas existentes.

    *¿Por qué?*: Esto hace más fácil habilitar o deshabilitar porciones de una aplicación sin preocuparse de rutas huérfanas.

**[Volver](#tabla-de-contenidos)**

## Automatización de Tareas
Usa [Gulp](http://gulpjs.com) o [Grunt](http://gruntjs.com) para crear tareas automatizadas. Gulp deriva a código sobre configuración mientras que Grunt deriva a configuración sobre código. Personalmente yo prefiero Gulp ya que se siente más fácil de leer y escribir, pero ambos son excelentes.

  - Usa automatización de tareas para listar archivos que definan módulos `module.js` antes que otros archivos de JavaScript en la aplicación.

    *¿Por qué?*: Angular necesita la definición de módulos para ser registrados antes de que sean usados.

    *¿Por qué?*: Nombra módulos con un patrón específico como `module.js` hace más fácil tomarlos con un glob y listarlos primero.

    ```javascript
    const CLIENTAPP = './src/client/app/'

    // Siempre toma archivos de módulos primero
    const files = [
        `${CLIENTAPP}**/*.module.js`,
        `${CLIENTAPP}**/*.js`
    ]
    ```

**[Volver](#tabla-de-contenidos)**

## AngularJS docs
Para cualquier otra cosa, refiérete a la API, mira la [documentación de Angular](//docs.angularjs.org/api).

**[Volver](#tabla-de-contenidos)**
