const myGlobal = 0;

function myFunction(){
    const number = 1;
    console.log(myGlobal);

    function parent(){
        const inner = 2;
        console.log(myGlobal, number);

        function child() {
            console.log(inner, number, myGlobal)
        }

        return child();
    }

    return parent();
}
myFunction();

//un closure es una funcion dentro de una funcion
//el ambito lexito en los closures hacen referencia a la accesibilidad de las variables creadas dentro de los diferentes closures, que se determinan en este caso como la posicion en la cual se van declarando y asignando y luego llamandolas.s


console.log(nombre)
var nombre;