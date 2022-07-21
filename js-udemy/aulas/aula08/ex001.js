const nome='Joyce';
const sobrenome='Mendes';
const idade=24;
const peso=56
const altura=1.54;
let imc= peso/(altura * altura);
let anoNascimento= 2022-idade; 

console.log(nome, sobrenome, 'tem', idade, 'anos, nasceu em', anoNascimento, 'pesa', peso, 'kg, tem', altura, 'de altura, e seu imc é', imc ); 

//usando template string

console.log(`${nome} ${sobrenome} tem ${idade} anos, nasceu em ${anoNascimento}, pesa ${peso} kg, tem ${altura} de altura e seu imc é ${imc}`)