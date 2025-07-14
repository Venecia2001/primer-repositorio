const contendorCard = document.querySelector(".conteinerFichas")
const imgFondo = document.querySelector(".fotoNoticia")


document.addEventListener("DOMContentLoaded", function () {
    const divgrande = document.querySelector(".divGrande");
    const puntos = document.querySelectorAll(".punto");

    puntos.forEach((cadaPunto, i) => {
        cadaPunto.addEventListener("click", () => {
            console.log(i);

            let posicion = i;
            let operacion = posicion * -33.33;

            console.log(operacion);

            divgrande.style.transform = `translateX(${operacion}%)`;

            puntos.forEach( (cadaPunto, i) =>{
                cadaPunto.classList.remove("activo")
            })
            cadaPunto.classList.add("activo")

        });
    });
});

const divgrande = document.querySelector(".divGrande");
const puntos = document.querySelectorAll(".punto");

const btnRight = document.querySelector("#btnRight")
const btnleft = document.querySelector("#btnLeft")


let posicion = 0;  // Índice de la imagen actual (empezamos con la primera)
const totalSlides = puntos.length;  // Total de elementos en el carrusel


console.log(puntos[2])

btnRight.addEventListener("click", ()=>{
    posicion = (posicion + 1) % totalSlides;

    console.log(posicion)

    let operacion = posicion * -33.33;

    divgrande.style.transform = `translateX(${operacion}%)`;

    puntos[0].classList.add("activo")

    puntos.forEach( (cadaPunto, i) =>{
        cadaPunto.classList.remove("activo")
    })

    if(posicion === 1){

        puntos.forEach( (cadaPunto, i) =>{
            cadaPunto.classList.remove("activo")
        })

        puntos[1].classList.add("activo")
    }
    else if(posicion === 2){
        puntos.forEach( (cadaPunto, i) =>{
            cadaPunto.classList.remove("activo")
        })
        
        puntos[2].classList.add("activo")

    }
    else{
        puntos[0].classList.add("activo")
    }


})

btnleft.addEventListener("click", ()=>{
    posicion = (posicion - 1 + totalSlides) % totalSlides;

    console.log(posicion)

    let operacion = posicion * -33.33;

    divgrande.style.transform = `translateX(${operacion}%)`;

    puntos[0].classList.add("activo")

    puntos.forEach( (cadaPunto, i) =>{
        cadaPunto.classList.remove("activo")
    })

    if(posicion === 1){

        puntos.forEach( (cadaPunto, i) =>{
            cadaPunto.classList.remove("activo")
        })

        puntos[1].classList.add("activo")
    }
    else if(posicion === 2){
        puntos.forEach( (cadaPunto, i) =>{
            cadaPunto.classList.remove("activo")
        })
        
        puntos[2].classList.add("activo")

    }
    else{
        puntos[0].classList.add("activo")
    }

})


let tarjetas = []

let EquiposConmebol = ["Argentina", "Brasil", "Bolivia","Colombia", "Chile","Ecuador","Peru","Paraguay","Uruguay","Venezuela"]
const divPartidos = document.getElementById("contenedorPartidos")
const divPorteros = document.querySelector(".porteros")
const divDefensores = document.getElementById("divDefensas")
const divMedioCampo = document.getElementById("divMedioCampo")
const divDelanteros = document.getElementById("divDelanteros")

let partidosSeleccion = []
let portedosConvocados = []
let defensasConvocados = []
let mediocampistaConvocados = []
let delanterosConvcocados = []

class Convocados{
    constructor(nombre, edad, club, foto){
        this.nombre = nombre
        this.edad = edad
        this.club = club
        this.foto = foto
    }
}

let portero1 = new Convocados("Rafael Romo" , 34,"Universidad Catolica", "img/romo.webp")
let portero2 = new Convocados("Wilker Fariñez" , 27,"Caracas FC", "img/fariñezI.avif")
let portero3 = new Convocados("Alain Baroja" , 34,"Club Always Ready", "img/baroja.jpg")

let defensa1 = new Convocados("Yordan Osorio" , 31,"Parma", "img/Osorio.webp")
let defensa2= new Convocados("Nahuel Ferraresi" , 25,"São Paulo", "img/nahuel_ferraresi.png")
let defensa3 = new Convocados("Ruben Ramirez" , 29,"Cusco Fc", "img/ruben.webp")
let defensa4 = new Convocados("Cristian Makoun" , 24," PFC Levski Sofia ", "img/Makoun.jfif")
let defensa5 = new Convocados("Migel Navarro" , 25,"Talleres", "img/Navaro.avif")
let defensa6 = new Convocados("Alexander Gonzalez" , 32,"Emelec", "img/AlexanderGon.jpg")
let defensa7 = new Convocados("Jon Aranburu" , 22,"Real Sociedad", "img/Aranburu.jpg")
let defensa8 = new Convocados("Carlos Vivas" , 21,"Deportivo Tachira", "img/pipoVivas.webp")
let defensa9 = new Convocados("Renne Rivas" , 21," Al-Taawon FC ", "img/Renne.jpg")

let mediocampista1 = new Convocados("José Martínez" ,30,"Sport Club Corinthians", "img/jose_martinezpng.png")
let mediocampista2 = new Convocados("Cristian Cásseres Jr." ,24,"Toulouse F.C.", "img/cristian_casseres.png")
let mediocampista3 = new Convocados("Yangel Herrera" ,24,"Girona F.C", "img/Yangel.webp")
let mediocampista4 = new Convocados("Tomas Rincon" ,35,"Santos F.C", "img/Tomás_Rincón.jpg")
let mediocampista5 = new Convocados("Telasco Segovia" ,24,"Casa Pia AC", "img/telasco_segovia.png")
let mediocampista6 = new Convocados("Bryant Ortega" ,21," Jeddah Club ", "img/Ortega.webp")
let mediocampista7 = new Convocados("Jefferson Savarino" ,27," Botafogo", "img/Jefferson_Savarino.jpg")
let mediocampista8 = new Convocados("Eduard Bello" ,29," Barcelona Sporting Club", "img/bello.webp")


let delantero1 = new Convocados("Darwin Machís" ,31,"Real Valladolid Club de Fútbol", "img/Machis.jpg")
let delantero2 = new Convocados("Jhon Murillo" ,28," Atlas FC", "img/Murillo.jpg")
let delantero3 = new Convocados("Yeferson Soteldo" ,28,"Gremio", "img/soteldo2.jfif")
let delantero4 = new Convocados("Kervin Andrade" ,19,"Fortaleza", "img/Kevin.jpg")
let delantero5 = new Convocados("Salomon Rondon" ,35,"Pachuca", "img/salomon.jfif")
let delantero6 = new Convocados("Jhonder Cadiz" ,29,"Club León", "img/jhonder-cadiz.jpg")
let delantero7 = new Convocados("Eric Ramidez" ,25,"Club Atlético Tigre", "img/Eric_ramidez.jpg")




portedosConvocados.push(portero1,portero2,portero3)
defensasConvocados.push(defensa1,defensa2,defensa3,defensa4,defensa5,defensa6,defensa7,defensa8,defensa9)
mediocampistaConvocados.push(mediocampista1,mediocampista2,mediocampista3,mediocampista4,mediocampista5,mediocampista6,mediocampista7,mediocampista8)
delanterosConvcocados.push(delantero1,delantero2,delantero3,delantero4,delantero5,delantero6,delantero7)



class CardPartidos{
    constructor(banderaLocal, nombreLocal, banderaVic, nombreVic, fecha, hora, torneo){
        this.banderaLocal = banderaLocal
        this.nombreLocal = nombreLocal
        this.banderaVic = banderaVic
        this.nombreVic = nombreVic
        this.fecha = fecha
        this.hora = hora
        this.torneo = torneo
    }
}

let Venezuela_paraguay = new CardPartidos("imagenesIndex/bandera.png",EquiposConmebol[9],"imagenesIndex/Chile.png",EquiposConmebol[4],"19/11/2024","8:00pm","Eliminatorias Copa del Mundo");

let Venezuela_brasil = new CardPartidos("imagenesIndex/brasil.png",EquiposConmebol[1],"imagenesIndex/bandera.png",EquiposConmebol[9],"14/11/2024","8:00pm","Eliminatorias Copa del Mundo");

partidosSeleccion.push(Venezuela_paraguay,Venezuela_brasil)

class CardNoticias{
    constructor(titulo,descricion,imagen,enlace){
        this.titulo = titulo
        this.descricion = descricion
        this.imagen = imagen
        this.enlace = enlace
        
    }
}

let noticia1 = new CardNoticias("Botafogo de Jefferson Savarino clasificó a la final de la Libertadores","El Botafogo de Jefferson Savarino jugará por primera vez la final de la Copa Libertadores, pese a su caída ante Peñarol en la vuelta de las semifinales, El volante venezolano fue titular y disputó 73 minutos", "imagenesIndex/libertadoresSavarino.jpg","https://www.lavinotinto.com/botafogo-de-jefferson-savarino-clasifico-a-la-final-de-la-libertadores/" )

let noticia2 = new CardNoticias("El Inter también pone el ojo en Aramburu","El Inter de Milán amenaza la continuidad de Jon Aramburu, lateral diestro de 22 años de la Real Sociedad. Así lo asegura el periodista experto en fichajes Ekrem Konur.", "imagenesIndex/Aramburu.jpg", "https://onefootball.com/en/news/el-inter-tambien-pone-el-ojo-en-aramburu-40280288" )

let noticia3 = new CardNoticias("La Vinotinto Sub 20 se preparará en México","Este mes de noviembre los dirigidos por Ricardo Valiño enfrentarán tres choques preparatorios para el Suramericano 2025, donde competirán en el Grupo A", "imagenesIndex/la-Vinotinto-sub-20.jpg", "https://www.elnacional.com/deportes/la-vinotinto-sub-20-se-preparara-en-mexico/" )


tarjetas.push(noticia1,noticia2,noticia3);

tarjetas.forEach(noticia =>{

    let htmlCode = `
            <div class="ficha">
                <div class="fotoNoticia"> <img width='300' src='${noticia.imagen}' ></div>
                <div class="informacion">
                    <h2 class="tituloNoticia"> ${noticia.titulo} </h2>
                    <p> ${noticia.descricion}</p>
                    <a href="${noticia.enlace}" target="_blank">leer mas</a>
                </div>      
    
            </div>
    
    `
    contendorCard.innerHTML += htmlCode

    // imgFondo.style.backgroundImage = `url(${noticia.imagen})`;
})

partidosSeleccion.forEach(partido =>{

    let htmlCode = `
            <div class="partido1">
                <div class="cuadroPartidos">
                
                    <div class="Equipos">
    
                        
                        <div class="EquipoPartidos">
                            <div class="bandera">
                                <div class="escudo">
                                <img src="${partido.banderaVic}" alt="${partido.nombreVic}">
                                </div>
                            </div>
                            <div class="NombrePais">
                                <p>${partido.nombreVic}</p>
                            </div>
                        </div>
    
                        <div class="EquipoPartidos">
    
                            <div class="bandera">
                                <div class="escudo">
                                 <img src="${partido.banderaLocal}" alt="${partido.nombreLocal}">
                                </div>
                            </div>
                            
                            <div class="NombrePais">
                                <p>${partido.nombreLocal}</p>
                            </div>
                        </div>
                
                    </div>
    
                    <div class="fechaPartido"> 
                        <p>${partido.fecha}</p>
                        <p>${partido.hora}</p>
                        <p>${partido.torneo}</p>
                    </div>
    
                </div>

            </div>
    `

     divPartidos.innerHTML += htmlCode
})

portedosConvocados.forEach(portero =>{

    let htmlcodigo = `
    
                <div class="CardJugador">

                    <div class="imagenJugador">
                        <img src="${portero.foto}" alt="jugador"> 
                    </div>
                    <div class="descripcionJugador">
                        <p>${portero.nombre}</p>
                        <p>${portero.edad}</p>
                        <p>${portero.club}</p>
                    </div>
    
                </div>
    
    `
    divPorteros.innerHTML += htmlcodigo
})

defensasConvocados.forEach(defensa =>{
    let htmlcodigo = `
    
                <div class="CardJugador">

                    <div class="imagenJugador">
                        <img src="${defensa.foto}" alt="jugador"> 
                    </div>
                    <div class="descripcionJugador">
                        <p>${defensa.nombre}</p>
                        <p>${defensa.edad}</p>
                        <p>${defensa.club}</p>
                    </div>
                </div>
    
    `
    divDefensores.innerHTML += htmlcodigo
})
mediocampistaConvocados.forEach(medio =>{
    let htmlcodigo = `
    
                <div class="CardJugador">

                    <div class="imagenJugador">
                        <img src="${medio.foto}" alt="jugador"> 
                    </div>
                    <div class="descripcionJugador">
                        <p>${medio.nombre}</p>
                        <p>${medio.edad}</p>
                        <p>${medio.club}</p>
                    </div>
                </div>
    
    `
    divMedioCampo.innerHTML += htmlcodigo
})
delanterosConvcocados.forEach(delantero =>{
    let htmlcodigo = `
    
                <div class="CardJugador">

                    <div class="imagenJugador">
                        <img src="${delantero.foto}" alt="jugador"> 
                    </div>
                    <div class="descripcionJugador">
                        <p>${delantero.nombre}</p>
                        <p>${delantero.edad}</p>
                        <p>${delantero.club}</p>
                    </div>
                </div>
    
    `
    divDelanteros.innerHTML += htmlcodigo
})





