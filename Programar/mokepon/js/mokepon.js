const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado-html')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedorTarjetas')

const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let mascotaJugador
let ataquesMokepon

let ataquesMokeponEnemigo

let inputHipodoge 
let inputCapipepo
let inputRatigueya 
let inputLangostelvis 
let inputTucapalma 
let inputPydos 

let botonFuego 
let botonAgua 
let botonTierra 

let botones = []

let indexAtaqueJugador
let indexAtaqueEnemigo

let victoriasJugador = 0
let victoriasEnemigo = 0

let vidasJugador = 3
let vidasEnemigo = 3

let tipoJugador
let tipoEnemigo

let lienzo = mapa.getContext("2d")
let intervalo 

class Mokepon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.tipo = tipo
        this.x = 20
        this.y = 30
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY = 0
    }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, '💧')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, '🌱')
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, '🔥')
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, '💧')
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, '🌱')
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, '🔥')


hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

capipepo.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
)

langostelvis.ataques.push(
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🌱', id: 'boton-tierra'},
)

tucapalma.ataques.push(
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🔥', id: 'boton-fuego'},
)

pydos.ataques.push(
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '🔥', id: 'boton-fuego'},
    {nombre: '💧', id: 'boton-agua'},
    {nombre: '🌱', id: 'boton-tierra'},
    {nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)


function IniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciar.style.display = 'none'
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((mokepons) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepons.nombre}" />            
        <label class="tarjeta-de-mokepon" for="${mokepons.nombre}">
            <p>${mokepons.nombre}</p>
            <img src="${mokepons.foto}" alt="${mokepons.nombre}">
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
    })

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya') 
    inputLangostelvis = document.getElementById('Langostelvis') 
    inputTucapalma = document.getElementById('Tucapalma') 
    inputPydos = document.getElementById('Pydos')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'

    // sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'flex'
    intervalo = setInterval(pintarPersonaje, 50)

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id 
    } else if(inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id 
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id 
        mascotaJugador = inputRatigueya.id 
    } else if(inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id 
        mascotaJugador = inputLangostelvis.id 
    } else if(inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id 
        mascotaJugador = inputTucapalma.id 
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id 
        mascotaJugador = inputPydos.id 
    } else {
        alert('Debes seleccionar a una mascota')
        location.reload()
    }

    extraerAtaques(mascotaJugador)    
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
            tipoJugador = mokepones[i].tipo
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach(ataque => {
        ataquesMokepon = `
        <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `

        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach(boton => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })  
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length - 1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques

    tipoEnemigo = mokepones[mascotaAleatoria].tipo

    if(tipoJugador == '💧' && tipoEnemigo == '🔥') {
        sectionMensajes.innerHTML = "Tienes ventaja!"
        victoriasJugador++
    } else if(tipoJugador == '🌱' && tipoEnemigo == '💧') {
        sectionMensajes.innerHTML = "Tienes ventaja!"
        victoriasJugador++
    } else if(tipoJugador == '🔥' && tipoEnemigo == '🌱') {
        sectionMensajes.innerHTML = "Tienes ventaja!"
        victoriasJugador++
    } else if(tipoJugador == '🔥' && tipoEnemigo == '💧') {
        sectionMensajes.innerHTML = "Estas en desventaja!"
        victoriasEnemigo++
    } else if(tipoJugador == '💧' && tipoEnemigo == '🌱') {
        sectionMensajes.innerHTML = "Estas en desventaja!"
        victoriasEnemigo++
    } else if(tipoJugador == '🌱' && tipoEnemigo == '🔥') {
        sectionMensajes.innerHTML = "Estas en desventaja!"
        victoriasEnemigo++
    }

    secuenciaAtaque()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio =  aleatorio(0, ataquesMokeponEnemigo.length - 1)
    let tipoAtaque

    tipoAtaque = ataquesMokeponEnemigo[ataqueAleatorio].nombre

    tipoAtaque == '🔥'
    ? ataqueEnemigo.push('FUEGO')
    : tipoAtaque == '💧'
    ? ataqueEnemigo.push('AGUA')
    : ataqueEnemigo.push('TIERRA')

    console.log(ataqueEnemigo)

    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    for (let i = 0; i < ataqueJugador.length; i++) {
        if (ataqueJugador[i] === ataqueEnemigo[i]) {
            indexAmbosOponentes(i, i)
            crearMensaje("EMPATE")
        } else if (ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA') {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO') {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA') {
            indexAmbosOponentes(i, i)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(i, i)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
    }

    revisarVidas()
}

function revisarVidas() {
    victoriasJugador === victoriasEnemigo
    ?   crearMensajeFinal("EMPATE!!")
    : victoriasJugador > victoriasEnemigo
    ?   crearMensajeFinal("GANASTE!!")
    :   crearMensajeFinal("PERDISTE!!")
}

function crearMensaje(resultado) {
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

function pintarPersonaje() {
    capipepo.x += capipepo.velocidadX 
    capipepo.y += capipepo.velocidadY

    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto
    )

}

function moverDerecha() {
    capipepo.velocidadX = 5
}

function moverIzquierda() {
    capipepo.velocidadX = -5
}

function moverAbajo() {
    capipepo.velocidadY = 5
}

function moverArriba() {
    capipepo.velocidadY = -5
}

function detenerMovimiento() {
    capipepo.velocidadX = 0
    capipepo.velocidadY = 0
}

window.addEventListener('load', IniciarJuego)