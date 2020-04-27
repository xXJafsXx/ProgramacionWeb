//Cambiar el estilo de un elemento configurado directamente el atributo de estilo

const title = document.querySelector('h1');

//Esta totalment sobreescrito sobre lo naranja
//Quita el color naranja y pone el margen
//title.setAttribute('style', 'margin:50px;')

//Quita el margen y pone el color 
console.log(title.style);

//Muestra el estilo y el color en la consola
console.log(title.style);
console.log(title.style.color);

//Se tiene el margen y el color
//No se ha sobreescrito porque se agrego una nueva propiedad
title.style.margin = '50';
title.style.color = 'red';
title.style.fontSize = '60px'

//El margen se ha ido y dentro del atributo
//estilo ya no vemos el margen
//Porque se esta eliminando o agregando un estilo   
title.style.margin = '';
