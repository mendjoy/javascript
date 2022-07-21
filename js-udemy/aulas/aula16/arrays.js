//Aula sobre arrays (Básico)

//Arrays são indexados por elementos: ex  Maria (0), Luiz (1) João (2)
const alunos = ['Maria', 'Luiz', 'Jõao']; //Dentro de colchetes
console.log(alunos);
console.log(alunos[1]);

//Arrays podem ser editados 
alunos[0] = 'Eduardo'
console.log(alunos)

//elementos podem ser adicionados no final
alunos[3] = 'Luiza';
alunos.push('Otavio'); //adiciona elementos no final 
console.log(alunos);

//elementos podem ser adicionados no inicio 
alunos.unshift('Julia'); //aletração do indice de todos os elementos 
console.log(alunos);

//Para saber tamanho do array
console.log(alunos.length);

//Remover elementos do array 

//Remove o ultimo elemento alunos.pop(); 
const removido = alunos.pop(); //Possivel salvar o elemento removido em uma variavel 
console.log(alunos); 
console.log(removido);

const removido2 = alunos.shift(); //Retira o alemento inicial 
console.log(alunos);
console.log(removido2);

//Remover elementos sem alterar os indices: o elemento removido é mostrado como vazio 
delete alunos [1]; 
console.log(alunos)

//fatiar 
console.log(alunos.slice[0, 2]); //Fatiar do elemento x até o elemento x, o ultimo não sera exibido

//Perguntar se é um array 
console.log(alunos instanceof Array); //retorna true ou false