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