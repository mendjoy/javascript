// Atribuição via desestruturação (objetos)
// {} são utilizadas em objetos

const pessoa = { 
    nome: 'Joyce',
    sobrenome: 'Mendes',
    idade: 24,
    endereco: {
        rua: 'Visc de maua',
        numero: 388
    }
};

const nome1 = pessoa.nome; //atribuição 
console.log(nome1);

//Atribuição via desestruturação

const {nome: teste, sobrenome, idade} = pessoa; //utilizar chaves
console.log(teste, sobrenome);

const { endereco: {rua, numero} }= pessoa;
console.log(rua, numero); 
