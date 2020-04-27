//Objeto matematico que tiene  varias propiedades y metodos agrupados en el

console.log(Math);
//pi constante matematica
console.log(Math,PI);
//asi podemos ver las diferentes contantes de las propiedades matematicas
console.log(Math,E);

//creamos una constante  y establecemos punto 8.8

const area=8.8;

//podemos utilizar diferentes metodos ejeplo para redondear alguna cantidad o usar los decimales
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//creamos una constante con un numero aleatorio

const random = Math.random();

console.log(random);
//si queremos un numero aleatorio entre 1 y 20 entonces hacemos lo siguiente
console.log(Math.round(random*20));