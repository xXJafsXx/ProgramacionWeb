//Tipos pimitivos y de referencia

//EJEMPLO DE TIPOS PRIMITIVOS
//let scoreOne = 50;
//Aqui estamos haciendo una copia de la variable anterior y diciendo que esta es nueva
//let scoreTwo = scoreOne;

//lo amacena en una pila por que es un valor primitivo

//Aqui estamos iniciando sesion en la consola una cadena de plantilla
//console.log('scoreOne: ${scoreOne}', 'scoreTwo: ${scoreTwo}');

//Aqui hacemos un cambio de la puntuación 1 ahora es 100 y no 50 pero la puntuación 2 sigue siendo 50
//scoreOne=100;
//console.log('scoreOne: ${scoreOne}', 'scoreTwo: ${scoreTwo}');
//nos damos cuenta que hacer una cpia de valores primitivos como este si cambiamos a uno de ellos no afecta al otro


//VALOSRES DE REFERENCIA


const userOne = {name: 'ryu', age: 30};
//creamos una copia de la variable del usuario para configurarlo
const userTwo = userOne;

console.log(userOne, userTwo);
//cambiamos elnombre de uno y podemos ver que cambia en los dos
userOne.age = 40;
console.log(userOne, userTwo);