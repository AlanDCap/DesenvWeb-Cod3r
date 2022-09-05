console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola' //inserir atributos dentro de um objeto
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
    //this.nome significa o nome associado a esse objeto
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)