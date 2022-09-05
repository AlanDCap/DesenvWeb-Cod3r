const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[10]); //retorna undefined

valores [4] = 10
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); //retira o último valor do index
delete valores[0];

console.log(typeof valores);