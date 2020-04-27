//metodo de stirng comunes
let email= 'jesusalejandro2199@gmail.com';

//imprimira el numero del vector donde se encuentra la penultima letra a buscar
let resultado=email.lastIndexOf('g');
console.log(resultado);

//imprime el texto almacenado controlando el tamaño es decir, imprimir letra por letra desde un punto a otro
let resultado2=email.slice(0,13);
console.log(resultado2);

//imprime el texto almacenado controlando el tamaño es decir, imprimir letra por letra desde un punto a otro
let resultado3=email.substr(5,11);
console.log(resultado3);

//remplaza la primera letrapor la segunda solo una vez
let resultado4=email.replace('s','r');
console.log(resultado4);