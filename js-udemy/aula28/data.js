//Objeto data. A função date é uma função construtora
//Timestamp unix 01/01/1970 marco 0


const  data = new Date(0);  
console.log(data.toString()); 

const umDia = 60 * 60 *24 *1000; //Seg, Min, um dia, *1000 = um dia em milsesimos de segundos 
console.log(data + umDia.toString()); 

const data2 = new Date (2022, 3, 20, 15, 14, 27, 500); //ano, mes, dia, hora, min, seg e milesimos 
console.log(data2.toString);

//Em JS a contagem dos meses inicia do 0. Nos dias da semana 0 representa o domingo e 6 sabado

const data3 = new Date ('2022-04-20 20:20:59.100');  //Data em forma de String 
console.log('Dia', data3.getDate()); //getDate - obtem o dia 
console.log('Mês', data3.getMonth() + 1); //getMonth - obtem o mes, importante somar +1
console.log('Ano', data3.getFullYear()); //getFullYear - obtem o ano 
console.log('Hora', data3.getHours()); //getHours - obtem a hora 
console.log('Minuto', data3.getMinutes()); //getMinutes - obtem os minutos 
console.log('Segundos', data3.getSeconds()); //getSeconds - obtem os segundos
console.log('Milisegundos', data3.getMilliseconds()); //getMilliseconds - obtem os milesimos
console.log('Dia da semana', data3.getDay()); //getDay - obtem o dia da semana (em número)

console.log(Date.now()); //Contagem dos ms do marco 0 até a data de hoje 