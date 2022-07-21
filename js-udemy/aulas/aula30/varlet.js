//Diferenças entre let/const e var 

let nome = 'Luiz'; //Não pode ser sobrescrita
var nome2 = 'Joyce'; //Pode ser sobrescrita, redeclarada
const  verdadeira = true ; 

if (verdadeira) {
    let nome = 'Mendes'; //let possui escopo de bloco {}, var so possui escopo de função
    console.log(nome, nome2); 

    if (verdadeira){
        let nome = 'Miranda';
        console.log('ok');
    }
};

function falaOi() {
    var nome = 'Joyce'; // so possui escopo de função 
    console.log(nome);
}

