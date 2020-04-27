//Consultar todos los elementos
const paras = document.querySelectorAll('p');

//Recorrerlos
paras.forEach(p => {
    //La diferencia es que si usamos en un texto, nos dara todo el texto visible
    //dentro de ese elemento ahora
    //console.log(p.innerText);

    //Se muestra en el modo consola del navegador 
    //console.log(p.textContent)
    //Marca dependiendo el estilo parrafos que tienen "error"
    if(p.textContent.includes('error')) {
        p.classList.add('error');
    }
    //Marca dependiendo el estilo parrafos que tienen "success"
    if(p.innerText.includes('success')){
        p.classList.add('success');   
    }
});

//Alternar clases 
const title = document.querySelector('.title')
//La clase title se va alternar con la clase test
//En el "elementos" del navegador aparece asi  <h1 class="title">The DOM</h1>
title.classList.toggle('test');
title.classList.toggle('test');
//Si se coloca dos veces ose ase repite, se elimina 