//Obtener y actualizar atributos de elementos HTML

//Se observa el valor en consola de 'href?, el cual es el link de la pagina
const link = document.querySelector('a');
console.log(link.getAttribute('href'));

//Se cambia el link en el  html del navegador(elementos)
link.setAttribute( 'href', 'https://www.youtube.com/watch?v=ek7rWClhRUY');

//Se cambio el texto interno  
link.innerText = 'Musica feliz';

//Otro ejemplo
const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

//Cambio el nombre de la clase error a sucess 
//en el html del navegador (elementos)
mssg.setAttribute('class', 'success');

//Cambiar de color de la etiqueta p
mssg.setAttribute('style', 'color:red;')  
