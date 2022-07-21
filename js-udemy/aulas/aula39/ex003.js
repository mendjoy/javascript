/*Escreva uma função que recebe um número e retorne o seguinte
* número é divisivel por 3 = Fizz
*Número é divisivel por 5 = Buzz
*número é divisivel por 3 e 5 =FizzBuzz
* número NÃO é divisivel por 3 e 5 = retorna o proprio número
*use a função com números de 0 a 100 */

function fizzBuzz (numero){
        if (typeof numero !== 'number'){
            return numero
        } else if (numero % 3 === 0 && numero % 5 === 0){
            return 'BuzzFizz'
        } else if (numero % 3 === 0){
            return 'Fizz'
        }  else if (numero % 5 === 0){
            return 'Buzz'
        } else {
            return numero
        }
    }
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}


