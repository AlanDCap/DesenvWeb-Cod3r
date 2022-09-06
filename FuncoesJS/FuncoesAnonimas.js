const soma = function (a, b) {
    return a + b;
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(2, 5);
imprimirResultado(4, 6, soma);
imprimirResultado(3, 5, function (x, y) {
    return x - y;
})
imprimirResultado(5, 7, (c, d) => c * d);