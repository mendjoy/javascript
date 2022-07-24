function retornaHora (data) {
    if ( data && !(data instanceof Date)){
        console.log("Não é")
        throw new TypeError ('Esperando instcancia de Date.')
    };

if (! data){
    data = new Date();
}
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        minute: '2-digit',
        second:'2-digit',
        hour12: false
    }); 

};

try {
    const data = '01-01-1970 12:58:12'; 
    const hora = retornaHora(11); 
    console.log(hora);
} catch(e){
    //tratar erro
} finally {
    console.log('Tenha um bom dia')
}; 
