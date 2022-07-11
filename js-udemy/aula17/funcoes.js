//Aula sobre funções (Básico)

//Funções executam ações
function saudacao (nome) {
    return (`Bom dia! ${nome}`); //Para retornar o valor 
};

 const variavel = saudacao('Joyce'); //executar função, dentro dos parenteses são colocados parametros
 console.log(variavel); //Ira mostrar undefined, quando não é especificado o que a função dve retornar 


 function soma(x,y) {
    const resultado = x + y;  //Nada que esta dentro da função pode ser alterada fora dela
    return resultado; //encerra a função, qualquer coisa colocada abaixo não é executado 
 };

 const resultado = soma (2+2);
 console.log(resultado)

//função dentro de uma variavel 
 const raiz = function (n){
    return n ** 0.5;
 };

 console.logo(raiz(9));

 // arow function

 const raiz2 = (n) => n ** 0.5;
   
 console.logo(raiz2(9));