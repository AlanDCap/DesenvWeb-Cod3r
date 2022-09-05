let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--)
//no momento da comparação ente os numeros, o valor de num1 já recebeu a adição, mas o de num 2 ainda não foi subtraído, deixando os dois em 1

console.log(num1 === num2) //a partir dessa linha os dois já são diferentes