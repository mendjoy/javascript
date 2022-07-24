//Tratando e lançando erros (try, catch, throw)


//bloco try, caso haja algum erro, sera captado pelo bloco catch 
try {
    console.log(naoExisto);
} catch(erro){
    console.log('Não existo, não existe'); //não é interessante exibir os erros para o usuario final 
    //console.log(erro); //não fazer isso 
}; 

function soma(x, y) {
    if ( typeof x !== 'number' ||  typeof y !== 'number'){
        throw new error ('x e y precisam ser números'); //lança um erro 
    }
    return x+y;
};

try {
    console.log(soma(6,7));
    console.log(soma('8', 9));}
    catch(error){
        //console.log(error);
    }


    try {
        //é executada quando não há erros 
    } catch (e) {
        //executada quando há erros 
    } finally {
        //sempre é executado (não é sempre utilizado, pode ser omitido)
    }

