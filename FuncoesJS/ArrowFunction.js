//sintaxe de função
let dobro = function (a) {
    return 2 * a;
}

//arrow function sempre precisa ser armazenada em uma variável
//a palavra function é substituída por =>
dobro = (a) => {
    return 2 * a;
}

//caso tenha apenas um parâmetro os parênteses são dispensáveis
//caso tenha apenas uma linha de comando as chaves são dispensáveis
//e o retorno é implícito
dobro = a => 2 * a;

let ola = function() {
    return 'Olá';
}

ola = () => 'Olá';

/*devido a flexibilidade do js é possível trocar os parênteses
por _ sem prejudicar o funcionamento da função*/
ola = _ => 'Olá';

let soma = (a, b) => a + b;

console.log(soma(1,2));