
//Arredondar para baixo 
let num1 = 9.54578;
let num2 = Math.floor (num1);  
console.log(num2);

//Arredondar para cima 
let num3 = 9.54578;
let num4 = Math.ceil (num3); 
console.log(num4);

//Arredondar para o mais proximo ex 1.5 para 2, e 1.4 para 1
let num5 = 9.54578;
let num6 = Math.round (num5); 
console.log(num6);

//Retorna qual é o maior valor 
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 0, 7, 6, 1500));

//retorna o menor valor 
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 0, 7, 6, 1500));

//gerar números aleatorios entre 0 e 1 (1 não é incluido)
console.log(Math.random());

const aleatorio = Math.round(Math.random () * (10 - 5) + 5); //número aleatorio entre 10 e 5 
console.log(aleatorio);

//Valor de pi
console.log(Math.PI);

//Potenciação
console.log(Math.pow(2,10));
console.log(2**10);

//Raiz quadrada 
let num10 = 9;
console.log(num10 ** (1/2));
console.log(num10 ** (0,5));

//Em Js é possivel fazer divisão com 0 
console.log(100/0); //retorna infinity