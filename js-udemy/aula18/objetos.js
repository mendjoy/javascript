//Aula sobre objetos ({}) basico
const  pessoa1 = {
    nome: 'Joyce',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

//função

function criaPessoa (nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
};

const pessoa2 = criaPessoa('Joyce', 'Miranda', 25);