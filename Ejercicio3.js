

//agarra un elemento por su ID
const title = document.getElementById('page-title');
console.log(title);

//obtener elementos por su nombre de clase
//No se necesita el punto en "error"
//Coleccion HTML
const errors = document.getElementsByClassName('error');
console.log(errors);

//[0] obtener el primer elemento
console.log(errors[0]);

// NO podemos usar el foreach para cada metodo en la coleccion HTML
//Produce un error
//errors.forEach(error => {
 //console.log(error); 
//});

//obtener elementos por su nombre de etiqueta
//Coleccion HTML
const paras = document.getElementsByTagName('p');
console.log(paras); 

//Se puede obtener un elemento especifico
console.log(paras[1]);