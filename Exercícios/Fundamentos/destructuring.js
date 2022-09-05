// novo recurso do ES2015

//extração de atributos do objeto para torná-los acessíveis for do objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//extração de atributos com atribuição em novas variáveis. extrai nome a armazena em i
const { nome, idade } = pessoa
console.log(nome, idade)

 const { nome: n, idade: i} = pessoa
 console.log(n, i)

 //extração de atributos não existentes
 const { sobrenome, bemHumorada = true} = pessoa
                        //valor padrão
console.log(sobrenome, bemHumorada)                     

//extração de atributos que fazem parte de objetos dentro do objeto
const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, nome, cep)