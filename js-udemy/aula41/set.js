// setInterval e setTimeout = ambas funções disponiveis no navegador e no node - controlam timer 

function mostraHora(){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
    hour12: false 
   } )};

console.log(mostraHora());


// OU, para trabalhar com um intervalo de tempo utilizar a função  setInterval
function funcaoDoInterval(){
    console.log(mostraHora()) 
};

setInterval(funcaoDoInterval,1000 ) //configura um interalo de tempo, para que alguma função seja executada em determinado momento
//Primeiro escolher a função e depois escolher o tempo para ser executada em ms