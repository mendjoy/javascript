/*Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem(number). retorne tru se a imagem estiver no modo paisagem. */



function ePaisagem (largura, altura){
    if (largura > altura) {
        return true
    }
    return false
}

const paisagem = ePaisagem(600, 50)
console.log(paisagem)


//Pode ser feito dessa forma

function ePaisagem2 (largura, altura){
    return largura > altura ? true : false
}

console.log(ePaisagem2(1000, 1080));

//pode ser feito também (arrow function)

const ePaisagem3 = (largura, altura) => largura > altura; 
console.log(ePaisagem3(1090, 2000)); 
