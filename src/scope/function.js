function greetings(){
    var userName = "Ana";
    

    if (userName === "Ana") {
        console.log("Hola", userName)
    }
}

greetings();
// console.log(userName) -> devuelve un error ya que userName se declara dentro de una funcion y solo en la funcion puede acceder por el scope function