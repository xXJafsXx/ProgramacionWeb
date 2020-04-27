//creacion de un vector de strings
let animales = ['perro', 'gato','oso'];
//cambiar el segundo valor del vector
//animales[1]= 'leon';
console.log(animales[1]);

let edades= [10,12,14,15,19];
console.log(edades[2]);

let random=['Jesus','Gloria', 10, 45, 7];
console.log(random);

//tamanio del vector
console.log(animales.length);

//metodo de los arreglos
let result = animales.join(',');
console.log(result);

let result2 = animales.indexOf('oso');
console.log(result2);

let result3 = animales.concat(['lobo', 'elefante']);
console.log(result3);

let result4 = animales.push('canario');
result4=animales.pop();
console.log(result4);