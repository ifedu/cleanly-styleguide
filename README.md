# guide-style-cleanly
Guía de estilos para Jade, JS, CSS

#### *General*
- 4 Espacios de tabulación
- Comillas simples

#### *Jade*
- Atributos en cada línea sin , de separación y ordenados alfabéticamente.
- div omitidos si hay id o class.

```
    input.button(
        placeholder='input'
        type='text'
    )
```

#### *JS*
- Declaración de variables una por línea precedida de var(const o let).
- Ordenamiento alfabético siempre que sea posible tanto para variables como para propiedades
- Funciones anónimas que se asignen a una variable sin nombre.
- Línea en blanco de separación para separar grupos, condicionales, funciones.
- Encadenamiento de funciones en nuevo línea con mismo nivel de tabulación.
- Declarar las variables cuando donde son necesarias, no declararlas todas arriba.
- Espacios para separar -> = : { ( && || > = < y siguiente atributo

```
    var fnsNums = {
        total: 0,

        numeros: function (num1, num2, obj) {
            if (num1 > num2) {
                obj.txt = 'El primer número es mayor';
            } else {
                obj.txt = 'El segundo número es mayor';
            }

            this.total += num1 + num2;

            return this;
        }
    };

    var num1 = 5;
    var num2 = 10;
    var num3 = 20;
    var num4 = 15;
    var obj1 = {};
    var obj2 = {};

    fnsNums
    .numeros(num1, num2, obj1)
    .numeros(num3, num4, obj2);

    console.log(obj1.txt);
    console.log(obj2.txt);
    console.log('El total de los números sumados es ' + fnsNums.total);
```

#### *CSS*
- Cada propiedad en una línea.
- Línea en blanco de separación entre grupos de propiedades.
- Propiedades ordenadas alfabéticamente siempre que no afecte al resultado.
- Un espacio entre el nombre y la {.
- Un espacio entre : y el valor.

```
    .texto {
        background-color: #ddd;
        color: #333;
    }
        
    .centrar {
        text-align: center;
    }
```
