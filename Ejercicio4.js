
let radio=100;
const pi=3.14;

//imprimir los resultados
console.log(radio, pi);

//operaciones matematicas +,-,*,/,**,%
console.log(30 / 3); //divide 30/3

let resultado=radio % 3; // divide el radio entre tres y nos da el resto
console.log(resultado);

//calcular el area de un circulo pi*r al cuadrado
let area= pi*radio**2;
console.log(area);

/*orden de las operaciones 
B(parentesis) I(Indices o exponentes) D(Diviciones) M(Multiplicaciones) A(Adiciones) S(supreciones)*/
let result= 10 * (4-2)**2;
console.log(result);

//sumar uno
let num=10;
//num=num+1;
//num++;
//num--;
//num += 10;
//num -=8;
//num *=5;
//num /=4
console.log(num);


//NaN - not a number no es un numero
console.log(5 / 'holaa');

let respuesta= 'tengo en mi carro ' + num + ' num';
console.log(respuesta);