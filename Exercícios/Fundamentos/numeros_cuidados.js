console.log(7 / 0); //gera resultado infinito
console.log('10' / 2); //JS utiliza o conteúdo da string como número.
console.log('3' + 2); //o formato de string é mais forte e o resultado é 32
console.log('3' - 2); // subtração não faz sentido em string, logo executa como numérico
console.log('Show!' * 2); // a operação não se executa. Outras linguagens repetiriam a string
console.log(0.1 + 0.7); //JS causa imprecisão de cálculo pela especificação de número dele (IEEE)
//console.log(10.toString()); Não é possível utilizar a função a partir do número diretamente
console.log((10.345).toFixed(2));