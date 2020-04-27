
//Tomar un elemento del DOM
const para1 = document.querySelector('p');
console.log(para1);

const para2 = document.querySelector('.error');
console.log(para2);

//simepre agarra el primero 

//div. error - Manera para diferenciarlo del otro error que es del parrafo
const para3 = document.querySelector('div.error');
console.log(para3);

//En elementos, se copia en "Copy selector" y se pega el body > h1
const para4 = document.querySelector('body > h1');
console.log(para4); 

//Tomar todos los elemtos del DOM, de una misma propiedad 
//( o lo que sean del DIV y P), se crea un Nodo de lista
const paras = document.querySelectorAll('p');
console.log(paras);

//Selecionar un elemento especifico de esa lista
console.log(paras[0]);
console.log(paras[2]);

//Esta es uan funcion de flecha, recorre la lista de nodos y para casa nodo individual obtenemos 
//acceso dentro de la funcion de devolucion de llamada

paras.forEach(para => {
 console.log(para);
})

//Aparece una lista de todos los elementos que lleven .error
const errors = document.querySelectorAll('.error');
console.log(errors);


