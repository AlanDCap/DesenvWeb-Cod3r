var a = 3; //var sempre aceita novas atribuições de valores
let b = 4; //não aceita novas atribuições da mesma variável

var a = 30;
b = 40; // comportamento estranho do JS

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
//c = 50, não é possível atribuir novos valores a uma const

console.log(c);