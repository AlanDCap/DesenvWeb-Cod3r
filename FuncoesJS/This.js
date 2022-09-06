const pessoa = {
    saudação: 'Bom dia',
    falar() {
        console.log(this.saudação);
    }
}

pessoa.falar();

//conflito entre paradigma funcional e OO
const falar = pessoa.falar;
falar(); 

//usando bind
const falaDePessoa = pessoa.falar.bind(pessoa);
falaDePessoa();

//outro uso de bind
function Pessoa () {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000)
}

new Pessoa;