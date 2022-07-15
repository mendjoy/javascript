//Operações ternárias 
//Operador ternário (?:) - (condição) ? 'Valor para verdadeiro' : ('Valor para facil); 1

//Usando if, else

const pontuacaoUsurario = 999;

if (pontuacaoUsurario >= 1000){
    console.log('Usuario VIP');
} else {
    console.log('Usuário normal')
}

//usando operação ternaria 

const nivelUsuario = pontuacaoUsurario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);