// Tipo de converciones
let puntos='100';
console.log(puntos+1);
console.log(typeof puntos);
puntos=Number(puntos);
console.log(puntos+1);
console.log(typeof puntos);

//separador
console.log('-------------------');
//separador

let resultado = Number('hola');//estamos en el hoyo, no puedes convertir una letra en un numero
console.log(resultado);

let resul= String(50);
console.log(resul, typeof resul);

let result = Boolean(45);//true porque no es 0
console.log(result, typeof result);
result = Boolean(0);//false
console.log(result, typeof result);
result = Boolean('0');//true porque no es null
console.log(result, typeof result);
result = Boolean('');//false
console.log(result, typeof result);