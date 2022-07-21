// Estrutura de repetição (for in) - le os indices ou chaves do objeto 

const frutas = ['Pera', 'Maça', 'Uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

//usando for in 

for (let indise in frutas) {
    console.log(frutas[indice]);
}

const pessoa = {
    nome:'Joyce',
    sobrenome: 'Mendes',
    idade: 24
}

for ( let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}