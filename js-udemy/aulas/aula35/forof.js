//Estrutura condicional (for of)
const nome = 'Joyce Mendes';


//for classico
for (let i = 0; i < nome.length; i++ ){
    console.log(nome[i])
}

//for in

for (let i in nome) {
    console.log(nome[i]);
}

// for of 
for (let valor of nome){
    console.log(valor);
}


/*For classico- geralmente utilizado com iteraveis (array ou strings)
for in- retorna o indice ou chave, geralmente utilizado com strings, arrays ou objetos
for of - retorna o valor em si, utilizado com iteraveis (arrays ou strings)*/