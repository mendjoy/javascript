function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
        case 0: 
            diaSemanaTexto = 'Domingo'; //caso diaSemana seja 0, apresente isso...
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda'; 
            return diaSemanaTexto; 
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
    return diaSemanaTexto;
}

const data = new Date ();
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemana(diaSemana);
console.log(diaSemana, diaSemanaTexto); 
