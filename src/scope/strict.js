'use strict';
pi = 3.1416
console.log(pi)

function myFunction(){
    'use strict'
    return pi = 3.1416;
}

console.log(myFunction());

//
/*El uso estricto permite que no se asignen variables sin antes declararlas tambien elimina otros errors y mejora el flujo de trabajo eliminando algunos errores silencionsos y mandando errores mas especificos haciendo mas facil de trabajar el debugging */