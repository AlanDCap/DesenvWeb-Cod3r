let a = 2
let b = 3
let c = 10


function teste (a, b, c) {
    return a < b && !(!(c > b) || a < 0)
}
//A < B && !(!(C > B) || A < 0)

console.log(teste())