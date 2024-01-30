//CICLO FOR
/*
let tabla = 12;

for(let i = 1; i <= 10; i++) {
    console.log(i, 'x', tabla, '=', i * tabla);
}
*/
//CONTINUE
/*let tabla = 12;

for(let i = 1; i <= 10; i++) {
    console.log(i)
    if(i==6) {
        continue
    }
        console.log(i, 'x', tabla, '=', i * tabla);
    
    }*/

    //BREAK

let tabla = 12;

for(let i = 1; i <= 10; i--) {
    console.log(i)
    if(i==6) {
        break;
    }
        console.log(i, 'x', tabla, '=', i * tabla);
    
    }