
/*Este proyecto consiste en almacenar en un arreglo todos los servicios que realiza una empresa,
  estos servicios se ingresan por teclado. 
  Cada servicio se define de la siguiente manera:
  numero de servicio, tipo de servicio(ingenieria, marketing, capacitacion), numero de participantes, estado(inicial, en proceso, terminado).
  Al final se imprime el arreglo con todos los servicios almacenados*/

/*creacion de la funcion constructora,
aqui se crea el objeto servicio*/

function servicio(numero,tipo,participantes, estado){
    this.numero=numero;
    this.tipo=tipo;
    this.participantes=participantes;
    this.estado=estado;
}

//creacion de un arreglo de almacenamiento de objetos(servicios)
todos_servicios=[];

//funcion que permita imprimir cada objecto(servicio)
function imprime(valor){
    console.log(valor)
}

//funcion que evalua si hay o no objetos en el array
function evalua(){
    if(todos_servicios.length==0){
        alert("Aun no hay servicios registrados")
    } else{
        for (const i of todos_servicios) {
            imprime(i)
            }
            }
                }

//funcion que permita solicitar los componentes del servicio
var asignacion=true
while (asignacion) {
    var pregunta = prompt("Escriba 1 si deseas ingresar un servicio, escribe 0 si no deseas ingresar un servicio, escribe 2 si deseas mirar todos los servicios.") 
switch (pregunta) {
    case "1":
        var num=prompt("Ingrese el numero de servicio: ")
        var tipo=prompt("Ingrese el tipo de servicio, si es ingenieria escriba I, si es marketing escriba M, si es capacitacion escriba C")
                        tipo=tipo.toUpperCase();
                        if(tipo==="I"){
                            tipo="Ingenieria"
                        }else if(tipo==="M"){
                            tipo="Marketing"
                        }else if(tipo==="C"){
                            tipo="Capacitacion"
                        }
                        else{
                            tipo =prompt("Ingrese un servicio valido")
                        }
        var participantes=prompt("Escriba el numero de partipantes del servicio")
        var estado=prompt("Ingresa el estado del servicio, si es estado inicial escriba I, si esta en proceso escriba P, si esta finalizado F")
                        estado=estado.toUpperCase();
                        if(estado==="I"){
                            estado="inicial"
                        }else if(estado==="P"){
                            estado="En proceso"
                        }else if(estado==="F"){
                            estado="finalizado"
                        }
                        else{
                            tipo =prompt("Ingrese un estado valido")
                        }

        var s=new servicio(num,tipo,participantes,estado)
        var colocate=todos_servicios.unshift(s)
        asignacion=true
                alert("Servicio ingresado")
        break;
    case "0":
        alert("Muchas gracias")
        asignacion=false
        break;
    
    case "2":
        evalua();
        asignacion=true
        break;

    default:
        alert("Ingrese una opcion valida!")
        asignacion=true
}
    }
