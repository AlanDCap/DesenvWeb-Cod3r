const nome = 'Rebeca';
const concatenacao = 'Olá' + nome + '!';

const template = `
    Olá
    ${nome}!`; // na template string é possível quebrar linhas e utilizar a sintaxe ${} para interpolar, interpretar código dentro da string
console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);