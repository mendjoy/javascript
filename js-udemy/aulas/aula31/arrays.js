//Atribuição via desestruturação (arrays)

let a = 'A';  //valor de B
let b = 'B';  //valor de C
let c = 'C';  //Valor de A

[a, b, c] = [1, 2, 3]; // lado esquerdo, desestruturação, lado direito array

//OU
const letras = [b, c, a];
[a, b, c] = letras; 

console.log(a,b,c);

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // arrays são indexado
const primeiroNumero = numeros2[0]; //pegando o valor de um array atraves do indice, somente de um valor 
console.log(numeros2 [0]);

//Com a atribuição via desestruturação é possivel capturar varios valores e jogar em variaveis 

const numeros3 = [1000, 2000, 3000, 4000, 500, 6000, 7000, 800, 9];
const [primeiroNumero2, segundoNumero, ...resto] = numeros;  //não esquecer colchetes
console.log(primeiroNumero2, segundoNumero);   
console.log(resto); 

// ... rest/spread