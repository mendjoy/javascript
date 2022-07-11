//Aula sobre strings 

// strings são indexadas, a contagem inicia do 0
let umaString = "Um \"texto\""; //Utilizar aspas duplas dentro de outras
let duasString = "Um \\texto"; //Será exibida apenas uma barra

console.log(duasString);
console.log(umaString[4]); //Mostra o elemento 4
console.log(duasString.charAt(6)); //mostra o elemento da posição indicada
console.log(umaString.concat(' em um lindo dia')); //efetua concatenação 
console.log(umaString.indexOf('texto')); // Mostra o indice pelo qual inicia a palavra procurada
console.log(umaString.lastIndexOf('texto')); 
console.log(umaString.match(/[a-z]/g)); 
console.log(umaString.replace('Um', 'outro'));//troca uma palavra pela outra
console.log(umaString.replace(/e/g, '#')); //Troca uma letra pela outra
console.log(umaString.length); //Mostra o tamanho da string
console.log(umaString.slice(3,9));//Faz o fatiamento da string, de acordo com o indice de inicio e de fim
console.log(umaString.split(' ', 1)); //divide o texto de acordo com o indicado
console.log(umaString.toUpperCase); //coloca a string toda em maiuscula
console.log(umaString.toLowerCase); //Coloca tudo em minuscula


