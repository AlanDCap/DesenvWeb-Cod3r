//criar de forma literal
function fun1() {};

//armazenar em variável
const fun2 = function () {}

//armazenar em array
const array = [function (a, b){return a + b}, fun1, fun2];
console.log(array[0](2,5));

//armazenar em um atributo de objeto
const obj = {};
obj.falar = function( ) {return 'Opa'}
console.log(obj.falar());

//passar função como parâmetro de outra função
function run(fun) {
    fun();
}

run(function () {console.log('Executando...')});

//uma função pode retornar ou conter uma função
function soma(a, b){
    return function (c){
        console.log(a + b + c);
    };
}
//como o retorno é uma função, passa-se os parâmetros dessa 
//função retornada logo após os parâmetros da primeira função.
soma(3, 4)(5);
//ou pode armazenar a primeira função em uma variável
const seteMais = soma (3, 4);
seteMais(7);