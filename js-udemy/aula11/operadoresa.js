/*
*Operadores Aritmeticos 
*  + adição e concatenação (string+ string)
*  - subtração 
*  / divisão
*  * Multiplicação
*  ** Potenciação
*  % resto da divisão
 */

const num1 = 5;
const num2 = 10; 
const num3 = 15; 
console.log(num1 % (num2 + num2)* num3); 


//Ordem de precedencia: (); **; * / % ; + - 
//Não se modifica o valor de uma const

let contador = 1;
contador ++; // operador de incremento 
contador ++;
contador ++;
console.log(contador)

let contador2 = 2;
contador2 --; //Operador decremento
contador2 --;
console.log(contador2);

//Pré incremento ou decremento e pós incremento ou decremento 

//NaN = not a number 

//Conversões
const n4 = 10; 
const n5 = parseInt('5') //Converte string para number (inteiro)
console.log(n4 + n5);

const n6 = 16;
const n7 = parseFloat('6.2'); //converte string para number com ponto flutuante 
console.log(n6 + n7);

const n8 = 22;
const n9 = Number('6.2'); //converte string para number, não faz distinção entre inteiro e de ponto flutuante
console.log(n8 + n9);