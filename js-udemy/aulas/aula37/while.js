//Estruturas de repetição (while e do while)

/*Quando a estrutura de repetição 'for' é utilizado geralmente sabemos quantos laços serão feitos, quando não se sabe a
quantidade de laços é utilizado 'while' ou 'do while' */

const nome = 'Joyce';
let i = 0;

while(i < nome.length){
    console.log(nome[i]);
    i++; 
}

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;

let rand = random(1, 50);
console.log(rand); 

while (rand  !== 10){
    rand = random(min, max);
    console.log(rand)
}