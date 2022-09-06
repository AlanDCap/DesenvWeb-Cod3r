//parâmetros variáveis
function soma() {
    let soma = 0;
    for (i in arguments){
        soma += arguments[i];
    }
    return soma;
}

console.log(soma());
console.log(soma(1));
console.log(soma(1, 2));
console.log(soma(1,2,3,4,5,6));
console.log(soma(1, 2, " é o total"));
console.log(soma("total: ", 1, 2));

//parâmetros padrão
function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma(1,2));

function soma2 (a, b, c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;
    return a + b + c;
}

//valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}
