// aula de short-circuit ( &&, ||)

/*
*Valores FALSY  (valores que indicam false)
* false - valor literal false
* 0 
* "", '',`` - espaços vazios 
* null/ undefined
*NaN
Qualquer valor diferente desses é avaliado em true 
 */
console.log('joyce' && 0 && 'Maria'); // retorna o valor 0 
console.log('joyce' &&  true && 'Maria'); //Checa os dois valores e retorna o ultimo 'Maria'
console.log('Joyce' && "" && 'Maria'); //false
console.log('joyce' && null && 'Maria'); //false
console.log('joyce' && NaN && 'Maria'); //false 

console.log(0 || false || null || 'Joyce' || true); //retorna Joyce, retorna o primeiro valor true
//quando todas forem falsas, o ultimo valor falso será retornado 