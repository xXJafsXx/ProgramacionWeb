//practica con funciones flecha

// const greet = function(){
//     return 'Hola mundo';
// };

// const greet =() => 'hola, mundo';
// const result = greet();
// console.log(result); 



// const bill = function(products, tax){
//     let total = 0;
//     for (let i = 0; i < products.length; i++){
//         total += products [i] + products [i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0;
    for (let i = 0; i < products.length; i++){
        total += products [i] + products [i] * tax;
    }
    return total;
};

console.log(bill([10,15,30],0.2));

