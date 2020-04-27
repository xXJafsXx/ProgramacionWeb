   //Agregar y eliminar clase de elemento 

//En consola, aparece  "DomTokenList", en donde se ve error
const content = document.querySelector('p');
console.log (content.classList);

//Obtener las clases que tienen un elemento 

//Se agregara una clase, y se eliminara la del index6
//A pesar que se elimini la clase, aparece en modo
// Elementos y consola del navegador
//content.classList.add('error');

//Se eliminara una clase, la clase error 
//Se elimino de igual forma el estilo de error
content.classList.remove('error')

//Se va a aggregar la lista success
//Se agrego de igual forma el estilo de success
content.classList.add('success');