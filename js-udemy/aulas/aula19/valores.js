/*
Primitivos (imutaveis) - string, number, boolean, undefined, null, (bigint, symbol) - valor 
estes valores podem ser copiados, mas continuam independentes
*/


let a ='A';
let b = a; //cópia, sao idependentes
console.log(a,b);

a= 'outra coisa'
console.log(a,b); //O valor de b nao foi alterado, somente o valor de a

//Valores de referencia (mutaveis) - arrays, object, function - os valores dependem um do outro 

let c = [1,2,3];
let d = c; //valores linkados, apontam pro mesmo valor na memoria 

console.log(c,d);

c.push(4);

console.log(c, d);

c.pop();
console.log(c, d); 