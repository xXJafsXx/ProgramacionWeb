//tipo string
console.log('wasaaa soy chucho');

let email= 'jesusalejandro2199@gmail.com';
console.log(email);

//tipo concatenando stirngs
let nombre= 'Jesus';
let apellido= 'Sanchez';

let nombreCompleto= nombre + ' ' + apellido;
console.log(nombreCompleto);

//tipo obtener caracteres
console.log(nombreCompleto[3]);

//tipo tamaño del string
console.log(nombreCompleto.length);

//tipo metodos de string
console.log(nombreCompleto.toUpperCase());
let resultado= nombreCompleto.toLocaleLowerCase();
console.log(resultado, nombreCompleto);
//se imprimira el numero de la posicion del caracter a buscar en la consola
let index= email.indexOf('@');
console.log(index);