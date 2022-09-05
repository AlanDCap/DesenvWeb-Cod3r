let valor

console.log(valor)

valor = null //ausência de valor, pode ser usado para zerar o valor de uma variável
console.log(valor)

//console.log(valor.toString()) //Erro por não ser possível acessar o valor de uma variável null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco // a forma ideal para remover um atributo, ao invés de deixá-lo undefined
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto.preco)