function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 40, max: 50}))

/* ou poderia usar a seguinte forma
const obj = { max: 50, min: 40}
console.log(rand(objt))*/