//IEE 754-2008 Padrão que o js segue para os números

let num1 = 1500.00; //number
let num2 = 2.5; //number

console.log(num1.toString); //continua sendo um number
num1= num1.toString(num1); //converter o number para string
console.log(num1.toString(2)); //mostra a reprsentação binaria da variavel
console.log(num1.toFixed(2)); //Mostra as casas decimais de acordo o indicado
console.log(Number.isInteger(num1)); //Retorna true or false, se o número for inteiro

let temp = num1 * 'olá';
console.log(Number.isNaN); //Retorna se é uma operação invalida (true or false)


