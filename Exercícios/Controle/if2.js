 function teste1(num) {
     if (num > 7) //a função if não precisa de chaves, nesse caso ela considera apenas uma linha de código. o segundo console.log é sempre executado. 
        console.log(num)
    console.log('Final')
 }

 teste1(6)
 teste1(8)

 function teste2 (num) {
     if(num > 7); { //o uso do ; define uma linha de código que está sendo usado na condicional. Assim o próximo bloco de código sempre se executa, independente do if. 
         console.log(num)
     }
 }

teste2(6)
teste2(8)