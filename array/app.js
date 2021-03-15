//EJERCICIOS ARRAYS

//EJERCICIOS 1
// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números numeros y devuelva el menor de ellos. Ejemplo:

// const obtenerMenor = (numeros) =>{
//         for(let i = 0; i < numeros.length; i++){
//                 console.log(Math.min(...numeros))
//         }
// }
// obtenerMenor([5, 7, 99, 34, 54, 2, 12]); //2
// obtenerMenor([8, 1, 54, 2, 12]); // 1


// const numeros = [33, 2, 5, 17, 88 ,29]
// const aNumeroMenor = (menor, numeros) => numeros < menor ? numeros : menor
// const numeroMenor = numeros.reduce(aNumeroMenor) // 2
// console.log(numeroMenor)


//EJERCICIOS 2
// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:

// sumarNumeros([5, 7, 10, 12, 24]) // 58

// const sumarNumeros = arreglo => {
//         let count = 0;
//         for(i = 0; i < arreglo.length ; i++){
//                 count = count + arreglo[i]
//         }
//         console.log(count)
// }

// sumarNumeros([5, 7, 10, 12, 24])

//EJERCICIOS 3
// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de si dicho numero se encuentra en el array de numeros. Ejemplo:

// const contiene = (numero, numeros) => {
//         for(let i = 0; i < numeros.length; i++){
//                 //console.log(numeros[i])
//                 console.log(numeros.includes(numero));
//         }
// }

// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]) // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]) // false

//EJERCICIOS 4
// invertirCaso(string)
// Crear una función invertirCaso que tome como argumento un string string y devuelva un string donde cada letra tiene el caso invertido, es decir, cada letra está mayúscula si estaba en minúscula, y viceversa.

// const invertirCaso = str =>{
//         let nuevaPalabra = '';
//         for(let i = 0; i < str.length; i++){
//                 str[i] === str[i].toUpperCase() ? 
//                 nuevaPalabra += str[i].toLowerCase() :
//                 nuevaPalabra += str[i].toUpperCase();
//         }
//         return nuevaPalabra

// };


// console.log(invertirCaso('Ada Lovelace')) // 'aDA lOVELACE'
// console.log(invertirCaso('feliz cumple')) // 'FELIZ CUMPLE'
// console.log(invertirCaso('jAvAsCrIpT')) // 'JaVaScRiPt'



//EJERCICIOS 5
// gano(tragamonedas)
// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.

// 1.- genero el arreglo 
//2- recorrer el arreglo

//const tragamonedas = ['⭐️', '⭐️', '⭐️', '💫', '✨'];
// const tragamonedas = ['💫', '💫', '💫', '💫', '💫'];

// const gano = arr =>{
//         let result = "";
//         for(let i = 0; i < 4; i++){
//                 tragamonedas[i] === tragamonedas [i + 1] ?
//                 result = true :
//                 result = false
//         }
//         return result
// }

//console.log(gano([tragamonedas])) // false
// console.log(gano([tragamonedas])) // true
// gano(['💫', '💫', '💫', '💫', '💫', '⭐️']) // true

//EJERCICIOS 6
// estanJuntos(personajes)
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:

// const personajes = ['Sam', 'Frodo', 'Legolas'];
// //const personajes = ['Aragorn', 'Frodo', 'Frodo'];

// const estanJuntos = arr => {
//         let result = "";
//         for(let i = 0; i < arr.length; i++){
//                 personajes[i] === 'Sam' && personajes[i+1] === 'Legolas' ?
//                 result = true :
//                 result = false
//         }
//         return result
// }

// estanJuntos(personajes) //true
// estanJuntos(['Aragorn', 'Frodo', 'Frodo']) //true
// estanJuntos(['Sam', 'Orco', 'Frodo']) //false


// const estanJuntos = (personajes) =>{
//         let result = "";
//         for(let i = 0; i < 2; i++){
//                 //console.log(personajes[i])

//                 personajes[i] === 'Frodo' && (personajes[i+1] === 'Sam' || personajes[i-1] )?
//                         result = true :
//                         result = false       
//         }
//          return result
// }
// estanJuntos(['Aragorn', 'Frodo', 'Sam'])
// console.log(estanJuntos(['Sam', 'Frodo', 'Frodo']))  //true
// console.log(estanJuntos(['Aragorn', 'Frodo', 'Sam']))  //true
// console.log(estanJuntos(['Sam', 'Orco', 'Frodo']))  //false

//EJERCICIOS 7
// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// const perrosYGatos = 'ppgpgpgpg'

// const separar = (perrosYGatos) => {
//         return perrosYGatos.split('').sort().join('')
// }

// console.log(separar(perrosYGatos));

/////OTRA SOLUCION CON ARREGLOS

// const animales = 'pgpgpgpgppg'

// const separar = (animales) =>{
//         let perros = [];
//         let gatos = [];
//         for(i = 0; i < animales.length; i++){
//                 animales[i] === 'p' ?
//                 perros.push(animales[i]) :
//                 gatos.push(animales[i])
//         }
//         return perros.concat(gatos);
// }
// console.log(separar(animales));

// // separar('🐶🐱🐶🐱🐱🐶🐶') // '🐶🐶🐶🐶🐱🐱🐱'


        //EJERCICIOS 8

// obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
// Ejemplo:

// const obtenerChatStatus = (usuarias) =>{
//                 // console.log(usuarias[i])
//                 let num = usuarias.length - 2;
//                 if (usuarias.length === 1){
//                         return `${usuarias[0]} está conectada`;
//                 }else if(usuarias.length === 2){
//                           return `${usuarias[0]}, ${usuarias[1]} están conectadas`;
//                 } else if (usuarias.length > 2) {
//                         return `${usuarias[0]}, ${usuarias[1]} y ${num} persona(s) más están conectadas`;
//                 }
//         }


        ////////        OTRA SOLUCION 
        // const obtenerChatStatus = (usuarios) => {
        //         const cant = usuarios.length;
        //         if(usuarios.length === 1){
        //             return `${usuarios[0]} está conectada`;
        //         }
        //         if(usuarios.length === 2){
        //             return`${usuarios.join(' y ')} están conectadas`;
        //         }
        //         if(usuarios.length > 2){
        //             const result = usuarios.slice(0,2);
        //             const num = cant - 2;
        //             return `${result.join(', ')} y ${num} persona(s) más están conectadas`;
        //         }
        //     };

// console.log(obtenerChatStatus(['Ada'])) // 'Ada está conectada'
// console.log(obtenerChatStatus(['Ada', 'Grace'])) // 'Ada y Grace están conectadas'
// console.log(obtenerChatStatus(['Ada', 'Grace', 'Marie'])) // 'Ada, Grace y 1 persona(s) más están conectadas'

//EJERCICIOS 9
// germinar(plantines)
// Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// const germinar = (plantines) =>{
//         let arreglo = plantines.split('');
//         // console.log(arreglo)
      
//         for(let i = 0; i < arreglo.length; i++){
//                 if(arreglo[i] === 'P'){
//                         arreglo[i] = arreglo[i-1]
//                 }
//         }
//         console.log(arreglo.join(''));
// }

//germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
//germinar('rPgPfPrPgPfP') // 'rrggffrrggff'
// // germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
// // germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'


//EJERCICIOS 10
// comer(plantas)
// Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// const comer = str => {
//         let antesConejo = "";
//         let despuesStop = "";
//         for (let i = 0; i < str.length; i++) {
//                 //let conejo = str[i];
//                 //console.log(conejo)
//                 let conejo = str.indexOf('C');
//                 let stop =  str.indexOf('P');
//                 antesConejo = str.slice(0,conejo);
//                 despuesStop = str.slice(stop + 1, str.length);
//                 //console.log(antesConejo);
//                 //console.log(despuesStop);
//                 //console.log(antesConejo.concat(despuesStop));
//         }
//         return antesConejo.concat(despuesStop)
// }

// const comer = plantas =>{
//         let arr = plantas.split(' ');
//         //console.log(arr)
//         let posicionConejo = arr.indexOf('🐰');
//         console.log(posicionConejo)
//         let posicionCruz = arr.indexOf('🚫');
//         console.log(posicionCruz);
//         let arrayIzq = arr.slice(0, posicionConejo);
//         console.log(arrayIzq);
//         let arrayDer = arr.slice(posicionCruz + 1, arr.length);
//         console.log(arrayDer);
//         console.log(arrayIzq.concat(arrayDer).join());
// }
// comer('🐰🥕🥬🥕🚫🥕') // '🥕'    //🐰🥕🥬🥕🚫🥕

// comer('CzlzP') // ''       //🐰🥕🥬🥕🚫
// comer('zlCzzzP') // '🥕🥬'         // 🥕🥬🐰🥕🥕🥕🚫
// comer('CzlzPz') // '🥕'    //🐰🥕🥬🥕🚫🥕
// comer('hzhChlhhPr') // '🌱🥕🌱🌷' //🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷
//console.log(comer('hzhChlhhPr')) // '🌱🥕🌱🌷' //🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷

//EJERCICIOS 11
// multiplicar(multiplicador, numeros)
// Crear una función multiplicar que tome como argumentos un número multiplicador y un array de números numeros, y que devuelva un array donde cada elemento es el resultado del elemento del primer array (en la misma posición) multiplicado por el número ingresado. Ejemplo:

// const multiplicar = (multiplicador, numeros)=>{
//         console.log(numeros.map(function(numero){
//                 return numero * multiplicador;

//         })
// )}

// multiplicar(2, [5, 7, 15, 22, 40]) // [10, 14, 30, 44, 80]
// multiplicar(10, [2, 5, 77]) // [20, 50, 770]


//EJERCICIOS 12
// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un array de strings palabras y que devuelva un array con las palabras que tengan una cantidad de letras mayor a longitud. Ejemplo:


// const filtrarPorLongitudMayorA = (longitud, palabras)=>{
//         let filtrados = palabras.filter(pal => pal.length > longitud);
//        console.log(filtrados) 
// }
// filtrarPorLongitudMayorA(4, [  'dia',  'remolacha',  'azul',  'sorpresa',  'te', 'verde',])
// filtrarPorLongitudMayorA(2, [  'dia',  'remolacha',  'azul',  'sorpresa',  'te', 'verde',])
// ['remolacha', 'sorpresa', 'verde']

//EJERCICIOS 13
// recortar(cantidadLetras, palabras)
// Crear una función recortar que tome como argumentos un número cantidadLetras y un array de strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. Por ejemplo, elefante recortada a 4 letras queda elef.

// const recortar = (cantidadLetras, palabras) =>{
//         let recortada = palabras.map(palabra => palabra.slice(0, cantidadLetras))
//         console.log(recortada)
// }
// recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
// recortar(1, ['algoritmo', 'bug', 'compilador']) // ['a', 'b', 'c']

//EJERCICIOS 14
// sonIguales(a, b)
// Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true si ambos arrays tienen los mismos valores en la misma posición, o false sino.

// const sonIguales = (a, b) => {
//         for(let i = 0; i < a.length; i++){
//                 if(a[i] === b[i]){
//                         console.log('true')
//                 }else if (a[i] !== b[i]) {
//                         console.log('false')
//                         return
//                 }
                
//         }
// }

// sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]) // true
// sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105])// false
// sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]) // false


//EJERCICIOS 15
// obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
// Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros puntajesA y puntajesB de la misma longitud.
//La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente dependiendo de quien tenga el puntaje más alto. Por ejemplo:

// const puntajesA = [3, 5, 2]
// const puntajesB = [4, 6, 2]

// puntajesA[0] vs. puntajesB[0] -> Gana B
// puntajesA[1] vs. puntajesB[1] -> Gana B
// puntajesA[2] vs. puntajesB[2] -> Empate

// Resultado final: Gana Jugadora B

// const suma = puntajesA.reduce(
//         (sumaA, puntaje) =>  sumaA + puntaje
// );
// console.log(suma);

// const puntajeA = [4, 4, 4];
// const puntajeB =[1, 2, 3];


// const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) =>{
//         let puntajeAcumuladoA = 0;
//         let puntajeAcumuladoB = 0;

//         for(let i=0; i<puntajesA.length; i++){
//                 if(puntajesA[i] > puntajesB[i]){
//                         puntajeAcumuladoA += 1;
//                         //console.log(puntajesA[i], puntajesB[i]);
//                 } else if(puntajesA[i] < puntajesB[i]){
//                         puntajeAcumuladoB += 1;
//                         //console.log(puntajesA[i], puntajesB[i]);
//                 }else if(puntajesA === puntajesB){
//                         puntajeAcumuladoA += 1;
//                         puntajeAcumuladoB += 1;
//                         //console.log(puntajesA[i], puntajesB[i])
//                 }
//         }
//         // console.log(puntajeAcumuladoA)
//         // console.log(puntajeAcumuladoB)
//         if(puntajeAcumuladoA > puntajeAcumuladoB){
//                 console.log(`Ganó ${jugadoraA}`)
//         }else if(puntajeAcumuladoA < puntajeAcumuladoB) {
//                 console.log(`Ganó ${jugadoraB}`)
//         }else{
//                 console.log('Empate')
//         }
//         return
// }

// obtenerResultado('Ada', 'Grace', [4, 4, 4], [1, 2, 3]) // Ada
// obtenerResultado('Ada', 'Grace', [3, 5, 5, 7], [4, 1, 2, 9]) // Empate
// obtenerResultado('Ada', 'Grace', [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]) // Grace


//EJERCICIOS 16
// jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)
// Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. Por ejemplo:

// const jugadasA = ['piedra', 'piedra', 'tijera']
// const jugadasB = ['papel', 'tijera', 'tijera']

// // jugadasA[0] vs. jugadasB[0] -> Gana B
// // jugadasA[1] vs. jugadasB[1] -> Gana A
// // jugadasA[2] vs. jugadasB[2] -> Empate

// // Resultado final: Empate
// jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra']) // Grace
// jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel']) // Empate
// jugarPiedraPapelTijeras(
//   'Ada',
//   'Grace',
//   ['piedra', 'papel', 'papel', 'piedra', 'tijera'],
//   ['papel', 'piedra', 'tijera', 'tijera', 'papel']
// ) // Ada


                ////////////// Ejercicios con DOM ////////////////////////


//Ejercicio 1
// Lista de tareas
// Crear un programa que muestre:

// un input de texto
// un botón que diga Agregar tarea
// una lista ul
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array

// const lista = document.getElementById('lista');
// const agregarTarea = document.getElementById('agregar-tarea');
// const inputTarea = document.getElementById('input-tarea');


// const tareas = [
//         "primer tarea",
//         "segunda tarea",
//         "tercera tarea",
// ]

// const pintarTareas = (tareas) => {
//         let mostrar = '';
//         for (let index = 0; index < tareas.length; index++) {
//                 console.log(tareas[index]);
//                 mostrar = mostrar + `<li>${tareas[index]}</li>`
//         }
//         //console.log(mostrar)
//         lista.innerHTML = mostrar
// }
// pintarTareas(tareas)

// agregarTarea.addEventListener('click', ()=>{
//         //console.log(inputTarea.value)
//         tareas.push(inputTarea.value);
//         //console.log(tareas)
//         pintarTareas(tareas);
//         inputTarea.value = '';
// })

//Ejercicio 2. Buscador
// Crear un programa que muestre:

// un input de texto
// una lista ul
// El programa debe tener como datos un array con strings con distintas palabras, y al inicializarse la lista debe mostrar las palabras del array como ítems de lista.

// Al escribir en el input, se debe actualizar la lista para mostrar aquellas palabras que contengan como substring lo ingresado, ignorando mayúsculas y minúsuculas. Es decir, si se busca script y JavaScript es un string dentro del array, se debe mostrar.

// Para actualizar la lista se debe:
// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// Cuando el input no tienen ningún valor ingresado, la lista debe mostrar todos los ítems del array.

// TIP: vas a necesitar dos arrays, uno para todas las palabras y otro para los resultados de búsqueda.

// const texto = document.getElementById('texto');
// const lista = document.getElementById('lista');
// const canciones = [
//         "Bandido", 
//         "La noche de anoche", 
//         "Bichota", 
//         "Si me tomo una cerveza"
// ]
// //console.log(canciones)

// texto.addEventListener('keyup', ()=>{
//         let mostrar = [];
//         for (let i = 0; i<canciones.length; i++){
//            if(canciones[i].includes(texto.value)){
//                 mostrar.push(canciones[i])
//                 }
//         }
//         playList(mostrar);
// })

// const playList = (arr) =>{
//         let pintarCanciones = '';
//         for(let i = 0; i < arr.length; i++){
//             //console.log(canciones[i])
//             pintarCanciones += `<li>${arr[i]}</li>`;
//         }
//         lista.innerHTML = pintarCanciones;
// }
// playList(canciones);


// //Buscar coincidencias de letras en las canciones
// let coincidencia = (str) =>{
//         for(let i=0; i<canciones.length; i++){
//                 console.log(canciones.element[i]);

//         }
// }
//console.log(canciones.find(element => element == buscado))


// const texto = document.getElementById('texto');
// const lista = document.getElementById('lista');
// const palabras = ['palabra', 'otra', 'mas', 'una mas'];


// texto.addEventListener('keyup', () => {
//     let result = [];
//     // result = palabras.filter(palabra => palabra.includes(texto.value))
//     for(let i = 0; i < palabras.length; i++){
//         if(palabras[i].includes(texto.value)){
//             result.push(palabras[i])
//         }
//     }
//     pintarLista(result);
// })


// const pintarLista = arr => {
//     let palabrasGuardadas = ''
//     for (let index = 0; index < arr.length; index++) {
//         palabrasGuardadas += `<li>${arr[index]}</li>` ;
//     }
    
//     lista.innerHTML = palabrasGuardadas
// }

// pintarLista(palabras)

//Ejercicio 3. Total de gastos
// Crear un programa que muestre:

// un input de números
// un botón que diga Agregar gasto/ganancia
// una lista ul
// un elemento p
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista y el elemento p.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array
// El elemento p se actualiza con el total de la suma de los valores del array.

const moneda = document.getElementById('moneda');
const agregar = document.getElementById('agregar');
const gastos = document.getElementById('gastos');
const total = document.getElementById('total');

let arreglo = [];

agregar.addEventListener('click', ()=>{
        arreglo.push(moneda.value);
        pintarArreglo(arreglo)
})

const pintarArreglo = arr => {
        let cajita = '';
        let totalMoneda = 0;
        for(let i = 0; i<arr.length; i++){
              cajita += `<li>${arr[i]}</li>`;
              totalMoneda += parseInt(arr[i])
        }
        gastos.innerHTML = cajita;
        total.innerHTML = totalMoneda;  
        moneda.value = '';
}
