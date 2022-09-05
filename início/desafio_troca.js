const a = 7;
const b = 94;

// fazer com que os valores das variáves a e b sejam trocados entre si, e imprimir no terminal.

console.log(a);
console.log(b);

{
    let a = b;
    console.log(a);
}

{
    let b = a;
    console.log(b);
}

/* 
soluções da aula

let a = 7;
let b = 94;

let temp = a;
a = b;
b = temp;

console.log(a);
console.log(b);

ou ainda

let a = 7;
let b = 94;

[a, b] = [b, a] 

console.log(a);
console.log(b);
*/
