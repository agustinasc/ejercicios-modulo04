// generarGrilla(filas, columnas, items)
// Crear una función generarGrilla que tome como argumentos un número entero filas, un número entero columnas y un array de valores items, y devuelva una matriz de filas filas y columnas columnas, donde cada ítem de la matriz es un ítem aleatorio de items.

let newArr = [];

const generarGrilla = (filas, columnas, item) =>{
    for(let i = 0; i < filas; i++){
        newArr[i] = [];
        for(let j = 0; j < columnas; j++){
            let randomItem = item[Math.floor(Math.random() * item.length)]
            //console.log(randomItem)
            newArr[i][j] = randomItem;
            console.log('pasos:', newArr)

        }
    }
    console.log(newArr)
}


generarGrilla(2, 3, [1, 2]);
//   [
//     [1, 1, 2], 
//     [2, 1, 1]
//   ]


//generarGrilla(3, 3, ['a', 'b', 'c']) 
/* 
//   [
//     ['c', 'c', 'a'], 
//     ['c', 'a', 'a'], 
//     ['b', 'a', 'b']
//   ]
// */
