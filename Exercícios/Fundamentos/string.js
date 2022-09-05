const escola = 'Cod3r';

console.log(escola.charAt(4));
console.log(escola.charAt(5)); // não retorna erro
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('C'));

console.log(escola.substring(1)); //vai escrever os caracteres a partir do índice 1
console.log(escola.substring(0, 3)); // escreve os caracteres até o 3, sem incluir o 3

console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!');

console.log(escola.replace(3, 'e'));

console.log('Ana,Maria,Pedro'.split(','));