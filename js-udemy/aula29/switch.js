const data = new Date ();
const diaSemana = data.getDay();
console.log(diaSemana); 
let diaSemanaTexto; 

//Usando o if 

if (diaSemana ===0){
    diaSemanaTexto = '  Domingo';
} else if  (diaSemana === 1){
    diaSemanaTexto = 'Segunda-Feira';
} else if (diaSemana === 2){
    diaSemanaTexto = 'Terça-Feira';
} else if (diaSemana === 3){
    diaSemanaTexto = 'Quarta-Feira';
} else if (diaSemana === 4){
    diaSemanaTexto = 'Quinta-Feira';
} else if (diaSemana ===5){
    diaSemanaTexto = 'Sexta-Feira';
} else if (diaSemana === 6){
    diaSemanaTexto = 'Sábado';
} else {
    diaSemana = '';
}

//utilizando o Switch (Utilizando quando há varias verificações dentro de uma mesma variavel)

switch (diaSemana){
    case 0: 
        diaSemanaTexto = 'Domingo'; //caso diaSemana seja 0, apresente isso...
        break; 
    case 1:
        diaSemanaTexto = 'Segunda'; 
        break; 
    case 2:
        diaSemanaTexto = 'Terça';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = '';
        break; 
}

console.log(diaSemana, diaSemanaTexto); 
