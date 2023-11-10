function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""

    jugada == 1 ? resultado = "Piedra 🪨" : jugada == 2 ? resultado = "Papel 🗞️" : jugada == 3 ? resultado = "Tijeras ✂️" : resultado = "MAL ELEGIDO"

    return resultado
}
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3) {
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    pc = aleatorio(1,3)

    alert("Elegiste: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))
    
    //COMBATE
    if(jugador == pc) {
        alert("EMPATE")
    } else if(jugador - pc == 1 || jugador - pc == -2) {
        alert("GANASTE")
        triunfos++
    } else {
        alert("PERDISTE")
        perdidas++
    }
}       

alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")