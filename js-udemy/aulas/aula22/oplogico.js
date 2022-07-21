/*
* Operadores lógicos 
* &&: and - os dosi valores devem ser verdadeiras para que retorne 'true', caso contrário retorna 'false'
* ||: or - apenas um dos valores precisa ser verdadeiro, para que retorne true 
* !: not - 
 */


console.log(true && true); //true
console.log(false && true); //false

console.log(true || false); //true
console.log(false || false); //false
console.log(false || true); //true

console.log(!false); //negação, inverte os valores, oq é false passa a ser true 
console.log(!!false); //negado uma vez, passa a ser true, negado outra vez passa a ser false e assim por diante