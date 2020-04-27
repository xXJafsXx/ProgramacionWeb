//Cambiar elementos internos de texto y de HTML
//Se obtiene el texto interno del elemento
const para1 = document.querySelector('p');
//console.log(para1.innerText);

//Si se quiere actualizar el texto
//para1.innerText = 'Hola k hace';

//Para colocar el texto antiguo con el nuevo
//para1.innerText += 'Hola k hace';

//Cambiar el texto de varios elementos a la vez
//Se obtienen los textos internos de los elementos
const paras = document.querySelectorAll('p');
//paras.forEach(para => {
  //  console.log(para.innerText);
//});

// Agregar texto adicional dentro de todos los elementos 
//paras.forEach(para => {
  //  console.log(para.innerText);
    //para.innerText += ' Hola k hace';
//});

//HTML

// Se ve el contenido dentro del div, el cual es olo la etiqueta p
const content = document.querySelector('.contenido');
//console.log(content.innerHTML);

//Cambiar el contenido HTML interno a una etiqueta h2
 //content.innerHTML = '<h2>Hola k hace</h2>';

 //Cambia en elementos de p (parrafo) a h2
 //content.innerHTML += '<h2>Hola k hace</h2>'

 //Lista o serie de personas, queremos generar una pequeña 
 //plantilla HTML para cada uno 

 const gente = ['Jesus','Amaya', 'Gloria '];
gente.forEach(persona =>{
    content.innerHTML += `<p>${persona}</p>`;
})
 