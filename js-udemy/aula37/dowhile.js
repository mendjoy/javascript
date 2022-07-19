//O while checa a condição e depois executa o codigo, o do while, checa e depois executa

function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);

do {
    rand = random(min, max);
    console.log(rand)
}while (rand !== 10);