const paragrafos = document.querySelector('.paragrafo');
const ps = document.querySelector('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps){
    p.style.backgroundColor =backgroundColorBody; 
    p.style.color = '#FFFFFF'; 
}

