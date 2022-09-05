//armazenando funções em variáveis
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3)); 

//retorno implícito. Podemos utilizar a arrow function sem a definição do escopo com as chaves, indicando assim que ela terá apenas uma linha de comando. Essa linha será retornada automaticamente
const subtracao = (a, b) => a - b;

console.log(subtracao(2, 3));

//arrow function com um argumento e retorno implícito
const a = 5;
const dobro = a => a * 2;

console.log(`O dobro de ${a} é ${dobro(a)}`);